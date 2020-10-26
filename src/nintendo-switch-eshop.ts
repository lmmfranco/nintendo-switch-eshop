import { countries, Country, regions } from 'country-data';
import { parse as xml2json } from 'fast-xml-parser';
import fetch from 'node-fetch';
import { stringify } from 'querystring';
import { deprecate } from 'util';
import * as constants from './constants';
import * as interfaces from './interfaces';

/**
 * Removed duplicates from an array
 *
 * @param array The input array
 * @param property The property to check
 * @private
 */
const arrayRemoveDuplicates = (array: any[], property: string) => {
  const index: any[] = [];

  return array.filter((item) => {
    const key = property ? item[property] : item;

    return index.includes(key) ? false : index.push(key);
  });
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
export const getGamesAmerica = async (
  options: interfaces.RequestOptions = {},
  offset = 0,
  games: interfaces.GameUS[] = []
): Promise<interfaces.GameUS[]> => {
  const limit = (Reflect.get(options, 'limit') as number) ?? constants.US_GAME_LIST_LIMIT;
  const page = Math.floor(offset / limit);

  const sortingOptions = {
    direction: constants.US_GET_GAMES_OPTIONS.direction,
    sortBy: constants.US_GET_GAMES_OPTIONS.sort
  };

  const body = {
    body: JSON.stringify({
      requests: [
        {
          indexName: `noa_aem_game_en_us${
            sortingOptions.sortBy && sortingOptions.direction
              ? `_${sortingOptions.sortBy}_${sortingOptions.direction}`
              : ''
          }`,
          params: stringify({
            facetFilters: [[constants.US_GET_GAMES_OPTIONS.system] as any],
            hitsPerPage: limit,
            page
          })
        }
      ]
    }),
    headers: constants.US_ALGOLIA_HEADERS,
    method: 'POST'
  };

  try {
    if (Reflect.has(options, 'limit')) {
      const gamesUS = await fetch(constants.US_GET_GAMES_URL, body);

      if (!gamesUS.ok) throw new Error('US_games_request_failed');

      const filteredResponse: interfaces.AlgoliaResponse = await gamesUS.json();
      const accumulatedGames: interfaces.GameUS[] = arrayRemoveDuplicates(
        games.concat(filteredResponse.results[0].hits),
        'slug'
      );

      if (
        !Reflect.has(options, 'limit') &&
        filteredResponse.results[0].hits.length + offset < filteredResponse.results[0].nbHits
      ) {
        return await getGamesAmerica(options, offset + limit, accumulatedGames);
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
        requests: [
          {
            indexName: 'noa_aem_game_en_us',
            params: stringify({
              facetFilters: [[constants.US_GET_GAMES_OPTIONS.system] as any],
              facets: ['categories'],
              hitsPerPage: 0
            })
          }
        ]
      }),
      headers: constants.US_ALGOLIA_HEADERS,
      method: 'POST'
    };

    const gamesToCount = await fetch(constants.US_GET_GAMES_URL, categoriesRequestOptions);
    if (!gamesToCount.ok) throw new Error('US_games_request_failed');

    const response: interfaces.AlgoliaResponse = await gamesToCount.json();
    const categoryCount = response.results[0].facets.categories;

    // Loop through all the categories and fetch the games.
    const allGamesPromises = Object.entries(categoryCount).map(async ([category, count]) => {
      const normalRequest = [
        {
          indexName: 'noa_aem_game_en_us',
          params: stringify({
            facetFilters: JSON.stringify([[constants.US_GET_GAMES_OPTIONS.system], [`categories:${category}`]]),
            hitsPerPage: 100
          })
        }
      ];

      const manyPriceRangeRequests = constants.US_PRICE_RANGES.map((priceRange) => ({
        indexName: 'noa_aem_game_en_us',
        params: stringify({
          facetFilters: JSON.stringify([
            [constants.US_GET_GAMES_OPTIONS.system],
            [`categories:${category}`],
            [`priceRange:${priceRange}`]
          ]),
          facets: ['platform', 'categories'],
          hitsPerPage: 100
        })
      }));

      const allGamesRequestOptions = {
        body: JSON.stringify({ requests: count > 100 ? manyPriceRangeRequests : normalRequest }),
        headers: constants.US_ALGOLIA_HEADERS,
        method: 'POST'
      };

      const allGamesResponse = await fetch(constants.US_GET_GAMES_URL, allGamesRequestOptions);

      if (!allGamesResponse.ok) throw new Error('US_games_request_failed');

      const gamesResponse: interfaces.AlgoliaResponse = await allGamesResponse.json();

      return count > 100
        ? gamesResponse.results.map((result) => result.hits).reduce((a, b) => a.concat(b, []))
        : gamesResponse.results[0].hits;
    });

    // Finally fetch all the games and remove duplicates
    let allGames = (await Promise.all(allGamesPromises)).reduce((a, b) => a.concat(b, []));
    allGames = arrayRemoveDuplicates(allGames, 'slug');

    return allGames;
  } catch (err) {
    if (/(?:US_games_request_failed)/i.test(err.toString()))
      throw new constants.EshopError('Fetching of US Games failed');
    throw err;
  }
};

/**
 * Fetches all games on japanese eShops
 *
 * @returns Promise containing all the games
 */
export const getGamesJapan = async (): Promise<interfaces.GameJP[]> => {
  try {
    const gamesJP = await fetch(constants.JP_GET_GAMES_URL);

    if (!gamesJP.ok) throw new Error('JP_games_request_failed');

    const parsedGamesJP = xml2json(await gamesJP.text());

    const allGamesJP: interfaces.GameJP[] = parsedGamesJP.TitleInfoList.TitleInfo;

    return allGamesJP;
  } catch (err) {
    if (/(?:JP_games_request_failed)/i.test(err.toString()))
      throw new constants.EshopError('Fetching of JP Games failed');
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
export const getGamesEurope = async (
  options: interfaces.EURequestOptions = { limit: constants.EU_GAME_LIST_LIMIT, locale: constants.EU_DEFAULT_LOCALE }
): Promise<interfaces.GameEU[]> => {
  if (!options.limit) options.limit = constants.EU_GAME_LIST_LIMIT;
  if (!options.locale) options.locale = constants.EU_DEFAULT_LOCALE;

  try {
    const gamesEU = await fetch(
      `${constants.EU_GET_GAMES_URL.replace('{locale}', options.locale)}?${stringify({
        rows: options.limit,
        ...constants.EU_GET_GAMES_OPTIONS
      })}`
    );

    if (!gamesEU.ok) throw new Error('EU_games_request_failed');

    const gamesData = await gamesEU.json();

    return gamesData.response.docs as interfaces.GameEU[];
  } catch (err) {
    if (/(?:EU_games_request_failed)/i.test(err.toString()))
      throw new constants.EshopError('Fetching of EU Games failed');
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
export const getPrices = async (
  country: string,
  gameIds: string[] | string,
  offset = 0,
  prices: interfaces.TitleData[] = []
): Promise<interfaces.PriceResponse> => {
  try {
    const filteredIds = gameIds.slice(offset, offset + constants.PRICE_LIST_LIMIT);
    const priceData = await fetch(
      `${constants.PRICE_GET_URL}?${stringify({
        country,
        ids: filteredIds,
        limit: constants.PRICE_LIST_LIMIT,
        ...constants.PRICE_GET_OPTIONS
      })}`
    );

    if (priceData.status === 403) throw new Error('PRICE_Rate_Limit');
    if (!priceData.ok) throw new Error('PRICE_get_request_failed');
    const response: interfaces.PriceResponse = await priceData.json();

    if (response.prices && response.prices.length + offset < gameIds.length) {
      const accumulatedPrices = prices.concat(response.prices);

      return await getPrices(country, gameIds, offset + constants.PRICE_LIST_LIMIT, accumulatedPrices);
    } else if (response.prices) {
      response.prices = response.prices.concat(prices);

      return response;
    }

    return response;
  } catch (err) {
    if (/(?:PRICE_Rate_Limit)/i.test(err.toString()))
      throw new constants.EshopError(
        'Looks like you ran into a rate limit while getting price data, please do not spam the Nintendo servers.'
      );
    if (/(?:PRICE_get_request_failed)/i.test(err.toString()))
      throw new constants.EshopError('Fetching of eShop prices failed');
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
export const getShopsByCountryCodes = async (
  countryCodes: string[],
  gameCode: string,
  region: interfaces.Region
): Promise<interfaces.EShop[]> => {
  try {
    const countryList: Country[] = countryCodes.map(
      (code: string) => countries.all.filter((country: Country) => country.alpha2 === code)[0]
    );
    const shops: interfaces.PriceResponse[] = [];

    for (const country of countryList) {
      try {
        const response = await getPrices(country.alpha2, gameCode);
        response.country = country;
        shops.push(response);
      } catch (err) {
        continue;
      }
    }

    const activeShops = shops.filter(
      (shop: interfaces.PriceResponse) => shop && shop.prices && shop.prices.length && shop.prices[0].regular_price
    );
    const eShops = activeShops.map((shop: interfaces.PriceResponse) => ({
      code: shop.country.alpha2,
      country: shop.country.name,
      currency: shop.prices[0].regular_price.currency,
      region
    }));

    if (!eShops.length) throw new Error('ACTIVE_SHOPS_Rate_Limit');

    return eShops;
  } catch (err) {
    if (/(?:ACTIVE_SHOPS_Rate_Limit)/i.test(err.toString()))
      throw new Error(
        'Looks like you ran into a rate limit while getting price data, please do not spam the Nintendo servers.'
      );
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
export const getShopsAmerica = async (): Promise<interfaces.EShop[]> => {
  return getShopsByCountryCodes(
    regions.southAmerica.countries.concat(regions.centralAfrica.countries, regions.northernAmerica.countries),
    constants.US_GAME_CHECK_CODE,
    interfaces.Region.AMERICAS
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
export const getShopsEurope = async (): Promise<interfaces.EShop[]> => {
  return getShopsByCountryCodes(
    regions.northernEurope.countries.concat(
      regions.southernEurope.countries,
      regions.easternEurope.countries,
      regions.westernEurope.countries,
      regions.australia.countries,
      regions.southernAfrica.countries
    ),
    constants.EU_GAME_CHECK_CODE,
    interfaces.Region.EUROPE
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
export const getShopsAsia = async (): Promise<interfaces.EShop[]> => {
  return getShopsByCountryCodes(
    regions.southernAsia.countries.concat(
      regions.southernAsia.countries,
      regions.southeastAsia.countries,
      regions.eastAsia.countries,
      regions.westernAsia.countries
    ),
    constants.JP_GAME_CHECK_CODE,
    interfaces.Region.ASIA
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
export const getActiveShops = async (): Promise<interfaces.EShop[]> => {
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
export const parseGameCode = (
  game: interfaces.GameUS | interfaces.GameEU | interfaces.GameJP,
  region: interfaces.Region
) => {
  let codeParse: RegExpExecArray | null;

  switch (region) {
    default:
    case interfaces.Region.EUROPE:
      codeParse = constants.EU_GAME_CODE_REGEX.exec((game as interfaces.GameEU).product_code_txt[0]);
      break;
    case interfaces.Region.ASIA:
      codeParse = constants.JP_GAME_CODE_REGEX.exec((game as interfaces.GameJP).InitialCode);
      break;
    case interfaces.Region.AMERICAS:
      return deprecate(
        () =>
          constants.US_GAME_CODE_REGEX.exec((game as interfaces.GameUS).game_code!)?.length || false
            ? constants.US_GAME_CODE_REGEX.exec((game as interfaces.GameUS).game_code!)![1]
            : '',
        'game_code is no longer returned by the API for American games so it can no longer be parsed from the data.',
        'DEP0001'
      )();
  }

  return codeParse && codeParse.length > 1 ? codeParse[1] : null;
};

/**
 * Extracts NSUID information from the game object.
 *
 * @param game The game object returned from one of the other methods.
 * @param region Region code
 * @returns The 14-digits NSUID
 */
export const parseNSUID = (
  game: interfaces.GameUS | interfaces.GameEU | interfaces.GameJP,
  region: interfaces.Region
): string | null => {
  switch (region) {
    case interfaces.Region.EUROPE:
      return (game as interfaces.GameEU).nsuid_txt ? (game as interfaces.GameEU).nsuid_txt[0] : null;
    case interfaces.Region.ASIA:
      const nsuidParse = constants.JP_NSUID_REGEX.exec((game as interfaces.GameJP).LinkURL);

      return nsuidParse && nsuidParse.length > 0 ? nsuidParse[0] : null;
    default:
    case interfaces.Region.AMERICAS:
      return (game as interfaces.GameUS).nsuid;
  }
};
