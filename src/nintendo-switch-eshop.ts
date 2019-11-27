import { stringify } from '@favware/querystring';
import { countries, Country, regions } from 'country-data';
import { parse as xml2json } from 'fast-xml-parser';
import fetch from 'node-fetch';
import {
  EshopError, EU_DEFAULT_LOCALE, EU_GAME_CHECK_CODE, EU_GAME_CODE_REGEX,
  EU_GAME_LIST_LIMIT, EU_GET_GAMES_OPTIONS, EU_GET_GAMES_URL, JP_GAME_CHECK_CODE,
  JP_GAME_CODE_REGEX, JP_GET_GAMES_COMING, JP_GET_GAMES_CURRENT, JP_NSUID_REGEX,
  PRICE_GET_OPTIONS, PRICE_GET_URL, PRICE_LIST_LIMIT, US_ALGOLIA_HEADERS,
  US_GAME_CHECK_CODE, US_GAME_CODE_REGEX, US_GAME_LIST_LIMIT, US_GET_GAMES_OPTIONS,
  US_GET_GAMES_URL, US_PRICE_RANGES
} from './constants';
import {
  AlgoliaResponse, EShop, EURequestOptions, GameEU, GameJP, GameUS, PriceResponse, Region, TitleData, USRequestOptions
} from './interfaces';

/**
 * Removed duplicates from an array
 *
 * @param array The input array
 * @param property The property to check
 * @private
 */
const arrayRemoveDuplicates = (array: any[], property: string) => {
  const index: any[] = [];

  return array.filter(item => {
    const key = property ? item[property] : item;

    return index.includes(key) ? false : index.push(key);
  });
};

/**
 * Checks if object has a certain property
 *
 * @param obj Object to traverse
 * @param prop Property to find
 * @private
 */
const hasProp = <O extends {}>(obj: O, prop: keyof O) => obj && prop in obj;

/**
 * TypeGuard to check if the variable is an array of strings
 *
 * @param array Array to check
 * @returns Boolean representing whether the input is an array
 * @private
 */
const isStringArray = (array: string | string[]): array is string[] => {
  return Array.isArray(array);
};

/**
 * Fetches all games on american eshops
 *
 * @remarks
 * Paginates every 200 games, _(maximum item count per request)_
 *
 * @param options _(Optional)_ Options for the request
 * @param offset _(Optional)_ Offset to start searching at
 * @param games _(Optional)_ Array of games to filter by
 * @returns Promise containing all the games
 */
export const getGamesAmerica = async (options: USRequestOptions = {}, offset = 0, games: GameUS[] = []): Promise<GameUS[]> => {
  const limit = hasProp(options, 'limit') ? options.limit : US_GAME_LIST_LIMIT;
  const shopProp = hasProp(options, 'shop') ? options.shop : 'ncom';
  let shop = shopProp === 'all' ? [ 'ncom', 'retail' ] : shopProp;
  shop = shop === 'unfiltered' ? undefined : shop;

  const page = Math.floor(offset / (limit as number));

  const shopMapper = (shopType: 'ncom' | 'retail' | string) => {
    switch (shopType) {
      case 'ncom':
        return 'filterShops:On Nintendo.com';
      case 'retail':
        return 'filterShops:On retail';
      default:
        return '';
    }
  };

  let shopFilters: ReturnType<typeof shopMapper> | (ReturnType<typeof shopMapper>)[] = [ '' ];

  if (shop) {
    shopFilters = isStringArray(shop) ? shop.map(value => shopMapper(value)) : shopMapper(shop);
  }


  const sortingOptions = {
    direction: US_GET_GAMES_OPTIONS.direction,
    sortBy: US_GET_GAMES_OPTIONS.sort,
  };

  const body = {
    body: JSON.stringify({
      requests: [
        {
          indexName: `noa_aem_game_en_us${(sortingOptions.sortBy && sortingOptions.direction
            ? `_${sortingOptions.sortBy}_${sortingOptions.direction}` : '')}`,
          params: stringify({
            facetFilters: [
              [ US_GET_GAMES_OPTIONS.system ],
              shopFilters
            ],
            hitsPerPage: limit,
            page,
          }),
        }
      ],
    }),
    headers: US_ALGOLIA_HEADERS,
    method: 'POST',
  };

  try {
    if (hasProp(options, 'limit')) {
      const gamesUS = await fetch(US_GET_GAMES_URL, body);

      if (!gamesUS.ok) throw new Error('US_games_request_failed');

      const filteredResponse: AlgoliaResponse = await gamesUS.json();
      const accumulatedGames: GameUS[] = arrayRemoveDuplicates(games.concat(filteredResponse.results[0].hits), 'slug');

      if (!hasProp(options, 'limit') && filteredResponse.results[0].hits.length + offset < filteredResponse.results[0].nbHits) {
        return await getGamesAmerica(options, offset + (limit as number), accumulatedGames);
      }

      return accumulatedGames;
    }
    /**
     * Using a workaround to get all the games.
     * Basically, fetch all the games from the different categories one by one,
     * if one category has > 100 games, fetch all the games in each price range one by one.
     *
     * Get the counts of all the games in the different categories.
     */
    const categoriesRequestOptions = {
      body: JSON.stringify({
        requests: [ {
          indexName: 'noa_aem_game_en_us',
          params: stringify({
            facetFilters: [
              [ US_GET_GAMES_OPTIONS.system ],
              shopFilters
            ],
            facets: [
              'categories'
            ],
            hitsPerPage: 0,
          }),
        } ],
      }),
      headers: US_ALGOLIA_HEADERS,
      method: 'POST',
    };

    const gamesToCount = await fetch(US_GET_GAMES_URL, categoriesRequestOptions);
    if (!gamesToCount.ok) throw new Error('US_games_request_failed');

    const response: AlgoliaResponse = await gamesToCount.json();
    const categoryCount = response.results[0].facets.categories;

    // Loop through all the categories and fetch the games.
    const allGamesPromises = Object.entries(categoryCount).map(async ([ category, count ]) => {
      const normalRequest = [ {
        indexName: 'noa_aem_game_en_us',
        params: stringify({
          facetFilters: JSON.stringify([
            [ US_GET_GAMES_OPTIONS.system ],
            [ `categories:${category}` ],
            shopFilters
          ]),
          hitsPerPage: 100,
        }),
      } ];

      const manyPriceRangeRequests = US_PRICE_RANGES.map(priceRange => ({
        indexName: 'noa_aem_game_en_us',
        params: stringify({
          facetFilters: JSON.stringify([
            [ US_GET_GAMES_OPTIONS.system ],
            [ `categories:${category}` ],
            [ `priceRange:${priceRange}` ],
            shopFilters
          ]),
          facets: [
            'platform',
            'categories'
          ],
          hitsPerPage: 100,
        }),
      }));

      const allGamesRequestOptions = {
        body: JSON.stringify({ requests: count > 100 ? manyPriceRangeRequests : normalRequest }),
        headers: US_ALGOLIA_HEADERS,
        method: 'POST',
      };

      const allGamesResponse = await fetch(US_GET_GAMES_URL, allGamesRequestOptions);

      if (!allGamesResponse.ok) throw new Error('US_games_request_failed');

      const gamesResponse: AlgoliaResponse = await allGamesResponse.json();

      return count > 100
        ? gamesResponse.results
          .map(result => result.hits)
          .reduce((a, b) => a.concat(b, []))
        : gamesResponse.results[0].hits;
    });

    // Finally fetch all the games and remove duplicates
    let allGames = (await Promise.all(allGamesPromises)).reduce((a, b) => a.concat(b, []));
    allGames = arrayRemoveDuplicates(allGames, 'slug');

    return allGames;
  } catch (err) {
    if (/(?:US_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of US Games failed');
    throw err;
  }
};

/**
 * Fetches all games on japanese eShops
 *
 * @returns Promise containing all the games
 */
export const getGamesJapan = async (): Promise<GameJP[]> => {
  try {
    const currentGamesJP = await fetch(JP_GET_GAMES_CURRENT);
    const comingGamesJP = await fetch(JP_GET_GAMES_COMING);
    if (!currentGamesJP.ok) throw new Error('JP_current_games_request_failed');
    if (!comingGamesJP.ok) throw new Error('JP_coming_games_request_failed');

    const parsedCurrentGames = xml2json(await currentGamesJP.text());
    const parsedComingGames = xml2json(await comingGamesJP.text());
    const currentGames: GameJP[] = parsedCurrentGames.TitleInfoList.TitleInfo;
    const comingGames: GameJP[] = parsedComingGames.TitleInfoList.TitleInfo;

    return currentGames.concat(comingGames);
  } catch (err) {
    if (/(?:JP_current_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of Current JP Games failed');
    if (/(?:JP_coming_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of Upcoming JP Games failed');
    throw err;
  }
};

/**
 * Fetches all games on the European, Australian or New Zealand eShops
 *
 * @remarks
 * Games from Australia / New Zealand can be limited. They are included only as much as that Nintendo assigns them properly to the PAL region
 *
 * @param options - Request options to pass to the eShop request {@link EURequestOptions | See EURequestOptions for details}
 * @returns Promise containing all requested EU/PAL games
 */
export const getGamesEurope = async (options: EURequestOptions = { limit: EU_GAME_LIST_LIMIT, locale: EU_DEFAULT_LOCALE }): Promise<GameEU[]> => {
  if (!options.limit) options.limit = EU_GAME_LIST_LIMIT;
  if (!options.locale) options.locale = EU_DEFAULT_LOCALE;

  try {
    const gamesEU = await fetch(`${EU_GET_GAMES_URL.replace('{locale}', options.locale)}?${stringify({
      rows: options.limit,
      ...EU_GET_GAMES_OPTIONS,
    })}`);

    if (!gamesEU.ok) throw new Error('EU_games_request_failed');

    const gamesData = await gamesEU.json();

    return gamesData.response.docs as GameEU[];
  } catch (err) {
    if (/(?:EU_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of EU Games failed');
    throw err;
  }
};

/**
 * Gets pricing information for the requested games. Paginates every 50 games.
 *
 * @param country A two digit country code. (ISO 3166-1 alpha-2 country code)
 * @param gameIds One or more NSUID of the corresponding games.
 * @param offset _(Optional)_ The offset to start at
 * @param prices _(Optional)_ An array of {@link TitleData}
 * @returns A promise containing the pricing information.
 */
export const getPrices = async (country: string, gameIds: string[] | string, offset = 0, prices: TitleData[] = []): Promise<PriceResponse> => {
  try {
    const filteredIds = gameIds.slice(offset, offset + PRICE_LIST_LIMIT);
    const priceData = await fetch(`${PRICE_GET_URL}?${stringify({
      country,
      ids: filteredIds,
      limit: PRICE_LIST_LIMIT,
      ...PRICE_GET_OPTIONS,
    })}`);

    if (priceData.status === 403) throw new Error('PRICE_Rate_Limit');
    if (!priceData.ok) throw new Error('PRICE_get_request_failed');
    const response: PriceResponse = await priceData.json();

    if (response.prices && response.prices.length + offset < gameIds.length) {
      const accumulatedPrices = prices.concat(response.prices);

      return await getPrices(country, gameIds, offset + PRICE_LIST_LIMIT, accumulatedPrices);
    } else if (response.prices) {
      response.prices = response.prices.concat(prices);

      return response;
    }

    return response;
  } catch (err) {
    if (/(?:PRICE_Rate_Limit)/i.test(err.toString())) throw new EshopError('Looks like you ran into a rate limit while getting price data, please do not spam the Nintendo servers.');
    if (/(?:PRICE_get_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of eShop prices failed');
    throw err;
  }
};

/**
 * Gets all active eShops given a list of countries.
 *
 * @param countryCodes A list of 2 digit country codes for every country eShop to lookup. (ISO 3166-1 alpha-2 country codes)
 * @param gameCode A 14 digits game NSUID from the desired region.
 * @param region A region id that will be appended in the final shop object for filtering purposes.
 * @returns A list of shop objects with country code, name and default currency.
 */
export const getShopsByCountryCodes = async (countryCodes: string[], gameCode: string, region: Region): Promise<EShop[]> => {
  try {
    const countryList: Country[] = countryCodes.map((code: string) => countries.all.filter((country: Country) => country.alpha2 === code)[0]);
    const shops: PriceResponse[] = [];

    for (const country of countryList) {
      try {
        const response = await getPrices(country.alpha2, gameCode);
        response.country = country;
        shops.push(response);
      } catch (err) {
        continue;
      }
    }

    const activeShops = shops.filter((shop: PriceResponse) => shop && shop.prices && shop.prices.length && shop.prices[0].regular_price);
    const eShops = activeShops.map((shop: PriceResponse) => (
      {
        code: shop.country.alpha2,
        country: shop.country.name,
        currency: shop.prices[0].regular_price.currency,
        region,
      }
    )
    );

    if (!eShops.length) throw new Error('ACTIVE_SHOPS_Rate_Limit');

    return eShops;
  } catch (err) {
    if (/(?:ACTIVE_SHOPS_Rate_Limit)/i.test(err.toString())) throw new Error('Looks like you ran into a rate limit while getting price data, please do not spam the Nintendo servers.');
    throw new Error(err);
  }
};

/**
 * Gets all active eShops on American countries.
 *
 * @remarks
 * This method will launch several requests at nintendo web services, so don't abuse it.
 *
 * @returns A list of shop objects with country code, name and default currency.
 */
export const getShopsAmerica = async (): Promise<EShop[]> => {
  return getShopsByCountryCodes(
    regions.southAmerica.countries.concat(
      regions.centralAfrica.countries, regions.northernAmerica.countries
    ),
    US_GAME_CHECK_CODE,
    Region.AMERICAS
  );
};

/**
 * Gets all active eShops on European countries.
 *
 * @remarks
 * This method will launch several requests at nintendo web services, so don't abuse it.
 *
 * @returns A list of shop objects with country code, name and default currency.
 */
export const getShopsEurope = async (): Promise<EShop[]> => {
  return getShopsByCountryCodes(
    regions.northernEurope.countries.concat(
      regions.southernEurope.countries, regions.easternEurope.countries,
      regions.westernEurope.countries, regions.australia.countries,
      regions.southernAfrica.countries
    ),
    EU_GAME_CHECK_CODE,
    Region.EUROPE
  );
};

/**
 * Gets all active eShops on Asian countries
 *
 * @remarks
 * This method will launch several requests at nintendo web services, so don't abuse it.
 *
 * @returns A list of shop objects with country code, name and default currency.
 */
export const getShopsAsia = async (): Promise<EShop[]> => {
  return getShopsByCountryCodes(
    regions.southernAsia.countries.concat(
      regions.southernAsia.countries, regions.southeastAsia.countries,
      regions.eastAsia.countries, regions.westernAsia.countries
    ),
    JP_GAME_CHECK_CODE,
    Region.ASIA
  );
};

/**
 * Gets all active eShops.
 *
 * @remarks
 * This method will launch several requests at nintendo web services, so don't abuse it.
 *
 * @returns A list of shop objects with country code, name and default currency.
 */
export const getActiveShops = async (): Promise<EShop[]> => {
  try {
    const shopsAmerica = await getShopsAmerica();
    const shopsAsia = await getShopsAsia();
    const shopsEurope = await getShopsEurope();

    return shopsAmerica.concat(shopsAsia, shopsEurope);
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * Parses the game code to extract the cross-region portion.
 *
 * @param game The game object returned from one of the other methods.
 * @param region Region code
 * @returns The 4-digit resulting game code
 */
export const parseGameCode = (game: GameUS | GameEU | GameJP, region: Region): string | null => {
  let codeParse: RegExpExecArray | null;

  switch (region) {
    case Region.EUROPE:
      codeParse = EU_GAME_CODE_REGEX.exec((game as GameEU).product_code_txt[0]);
      break;
    case Region.ASIA:
      codeParse = JP_GAME_CODE_REGEX.exec((game as GameJP).ScreenshotImgURL[0]);
      break;
    default:
    case Region.AMERICAS:
      codeParse = US_GAME_CODE_REGEX.exec((game as GameUS).game_code);
      break;
  }

  return (codeParse && codeParse.length > 1) ? codeParse[1] : null;
};

/**
 * Extracts NSUID information from the game object.
 *
 * @param game The game object returned from one of the other methods.
 * @param region Region code
 * @returns The 14-digits NSUID
 */
export const parseNSUID = (game: GameUS | GameEU | GameJP, region: Region): string | null => {
  switch (region) {
    case Region.EUROPE:
      return (game as GameEU).nsuid_txt ? (game as GameEU).nsuid_txt[0] : null;
    case Region.ASIA:
      const nsuidParse = JP_NSUID_REGEX.exec((game as GameJP).LinkURL);

      return (nsuidParse && nsuidParse.length > 0) ? nsuidParse[0] : null;
    default:
    case Region.AMERICAS:
      return (game as GameUS).nsuid;
  }
};