import { stringify } from 'awesome-querystring';
import { countries, Country, regions } from 'country-data';
import { parse as xml2json } from 'fast-xml-parser';
import fetch from 'node-fetch';
import {
    EshopError,
    EU_DEFAULT_LOCALE,
    EU_GAME_CHECK_CODE,
    EU_GAME_CODE_REGEX,
    EU_GAME_LIST_LIMIT,
    EU_GET_GAMES_OPTIONS,
    EU_GET_GAMES_URL,
    JP_GAME_CHECK_CODE,
    JP_GAME_CODE_REGEX,
    JP_GET_GAMES_COMING,
    JP_GET_GAMES_CURRENT,
    JP_NSUID_REGEX,
    PRICE_GET_OPTIONS,
    PRICE_GET_URL,
    PRICE_LIST_LIMIT,
    US_ALGOLIA_ID,
    US_ALGOLIA_KEY,
    US_GAME_CHECK_CODE,
    US_GAME_CODE_REGEX,
    US_GAME_LIST_LIMIT,
    US_GET_GAMES_OPTIONS,
    US_GET_GAMES_URL,
    US_PRICE_RANGES,
} from './constants';
import {
    AlgoliaResponse,
    EShop,
    EURequestOptions,
    GameEU,
    GameJP,
    GameUS,
    PriceResponse,
    Region,
    TitleData,
    USRequestOptions
} from './interfaces';

/**
 * Removed duplicates from an array
 * @param {any[]} array The input array
 * @param {string} property The property to check
 * @method
 * @ignore
 */
const arrayRemoveDuplicates = (array: any[], property: string) => {
    const index: any[] = [];

    return array.filter((item: any) => {
        const key = property ? item[property] : item;
        return index.indexOf(key) >= 0 ? false : index.push(key);
    });
};

/**
 * Checks if object has a certain property
 * @param {object} obj Object to traverse
 * @param {string} prop Property to find
 * @private
 */
const hasProp = (obj: object, prop: string) => obj && prop in obj;

/**
 * Checks is the variable is of type array
 * @private
 * @param {any | any[]} object Object to check
 * @returns boolean
 */
const isArray = <T>(object: T | T[] | undefined): object is T[] => {
    if (!object) return false;
    return !!(<T[]> object).map;
};

/**
 * Fetches all games on american eshops
 *
 * Paginates every 200 games, _(maximum item count per request)_
 * @param {USRequestOptions} [options] (Optional) Options for the request
 * @param {number} [offset] (Optional) Offset to start searching at
 * @param {string[]} [games] (Optional) Array of games to filter by
 * @returns {Promise<GameUS[]>} Promise containing all the games
 * @method
 * @name getGamesAmerica
 */
export const getGamesAmerica = async (options: USRequestOptions = {}, offset: number = 0, games: GameUS[] = []): Promise<GameUS[]> => {
    const limit = hasProp(options, 'limit') ? options.limit : US_GAME_LIST_LIMIT;
    const shopProp = hasProp(options, 'shop') ? options.shop : 'ncom';
    let shop = shopProp === 'all' ? ['ncom', 'retail'] : shopProp;
    shop = shop === 'unfiltered' ? undefined : shop;

    const page = Math.floor(offset / <number> limit);

    const shopMapper = (shopType: 'ncom' | 'retail' | string) => {
        return shopType === 'ncom'
            ? 'filterShops:On Nintendo.com'
            : shopType === 'retail'
                ? 'filterShops:On retail'
                : '';
    };

    const shopFilters = isArray(shop) ? shop.map(value => shopMapper(value)) :
        [shop ? shopMapper(shop) : ''];

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
                            [US_GET_GAMES_OPTIONS.system],
                            shopFilters
                        ],
                        hitsPerPage: limit,
                        page,
                    }),
                }
            ],
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
    };

    try {
        if (hasProp(options, 'limit')) {
            const gamesUS = await fetch(`${US_GET_GAMES_URL}?${stringify({
                'x-algolia-api-key': US_ALGOLIA_KEY,
                'x-algolia-application-id': US_ALGOLIA_ID,
            })}`, body);

            if (!gamesUS.ok) throw new Error('US_games_request_failed');

            const filteredResponse: AlgoliaResponse = await gamesUS.json();
            const accumulatedGames: GameUS[] = arrayRemoveDuplicates(games.concat(filteredResponse.results[0].hits), 'slug');

            if (!hasProp(options, 'limit') && filteredResponse.results[0].hits.length + offset < filteredResponse.results[0].nbHits) {
                return await getGamesAmerica(options, offset + (limit as number), accumulatedGames);
            }
            return accumulatedGames;

        } else {
            /*
             * Using a workaround to get all the games.
             * Basically, fetch all the games from the different categories one by one,
             * if one category has > 1000 games, fetch all the games in each price range one by one.
             */

            // Get the counts of all the games in the different categories.
            const countGamesBody = {
                body: JSON.stringify({
                    requests: [{
                        indexName: 'noa_aem_game_en_us',
                        params: stringify({
                            facetFilters: [
                                [US_GET_GAMES_OPTIONS.system],
                                shopFilters
                            ],
                            facets: [
                                'categories'
                            ],
                            hitsPerPage: 0,
                        }),
                    }],
                }),
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
            };

            const gamesToCount = await fetch(`${US_GET_GAMES_URL}?${stringify({
                'x-algolia-api-key': US_ALGOLIA_KEY,
                'x-algolia-application-id': US_ALGOLIA_ID,
            })}`, countGamesBody);
            if (!gamesToCount.ok) throw new Error('US_games_request_failed');

            const response: AlgoliaResponse = await gamesToCount.json();
            const categoryCount = response.results[0].facets.categories;

            // Loop through all the categories and fetch the games.
            const allGamesPromises = Object.entries(categoryCount).map(async ([category, count]) => {
                const normalRequest = [{
                    indexName: 'noa_aem_game_en_us',
                    params: stringify({
                        facetFilters: JSON.stringify([
                            [US_GET_GAMES_OPTIONS.system],
                            [`categories:${category}`],
                            shopFilters
                        ]),
                        hitsPerPage: 1000,
                    }),
                }];

                const manyPriceRangeRequests = US_PRICE_RANGES.map(priceRange => ({
                    indexName: 'noa_aem_game_en_us',
                    params: stringify({
                        facetFilters: JSON.stringify([
                            [US_GET_GAMES_OPTIONS.system],
                            [`categories:${category}`],
                            [`priceRange:${priceRange}`],
                            shopFilters
                        ]),
                        facets: [
                            'platform',
                            'categories'
                        ],
                        hitsPerPage: 1000,
                    }),
                }));

                const finalGamesBody = {
                    body: JSON.stringify({
                        requests: count > 1000 ? manyPriceRangeRequests : normalRequest,
                    }),
                    headers: { 'Content-Type': 'application/json' },
                    method: 'post',
                };

                const allGamesResponse = await fetch(`${US_GET_GAMES_URL}?${stringify({
                    'x-algolia-api-key': US_ALGOLIA_KEY,
                    'x-algolia-application-id': US_ALGOLIA_ID,
                })}`, finalGamesBody);

                if (!allGamesResponse.ok) throw new Error('US_games_request_failed');

                const gamesResponse: AlgoliaResponse = await allGamesResponse.json();
                return count > 1000
                    ? gamesResponse.results
                        .map(result => result.hits)
                        .reduce((a, b) => a.concat(b, []))
                    : gamesResponse.results[0].hits;
            });

            // Finally fetch all the games and remove duplicates
            let allGames = (await Promise.all(allGamesPromises)).reduce((a , b) => a.concat(b, []));
            allGames = arrayRemoveDuplicates(allGames, 'slug');
            return allGames;

        }
    } catch (err) {
        if (/(?:US_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of US Games failed');
        throw err;
    }
};

/**
 * Fetches all games on japanese eShops
 * @returns {Promise<GameJP[]>} Promise containing all the games
 * @method
 * @name getGamesJapan
 */
export const getGamesJapan = async (): Promise<GameJP[]> => {
    try {
        const currentGamesJP = await fetch(JP_GET_GAMES_CURRENT);
        const comingGamesJP = await fetch(JP_GET_GAMES_COMING);
        if (!currentGamesJP.ok) throw new Error('JP_current_games_US_games_request_failed');
        if (!comingGamesJP.ok) throw new Error('JP_coming_games_US_games_request_failed');

        const parsedCurrentGames = xml2json(await currentGamesJP.text());
        const parsedComingGames = xml2json(await comingGamesJP.text());
        const currentGames: GameJP[] = parsedCurrentGames.TitleInfoList.TitleInfo;
        const comingGames: GameJP[] = parsedComingGames.TitleInfoList.TitleInfo;

        return currentGames.concat(comingGames);
    } catch (err) {
        if (/(?:JP_current_games_US_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of Current JP Games failed');
        if (/(?:JP_coming_games_US_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of Upcoming JP Games failed');
        throw err;
    }
};

/**
 * Fetches all games on european eShops
 * @param {EURequestOptions} [options] (Optional) Options for the request
 * @returns {Promise<GameUS[]>} Promise containing all the games
 * @method
 * @name getGamesEurope
 */
export const getGamesEurope = async (options: EURequestOptions = {limit: EU_GAME_LIST_LIMIT, locale: EU_DEFAULT_LOCALE}): Promise<GameEU[]> => {
    if (!options.limit) options.limit = EU_GAME_LIST_LIMIT;
    if (!options.locale) options.locale = EU_DEFAULT_LOCALE;

    try {
        const gamesEU = await fetch(`${EU_GET_GAMES_URL.replace('{locale}', options.locale)}?${stringify({
            rows: options.limit,
            ...EU_GET_GAMES_OPTIONS,
        })}`);

        if (!gamesEU.ok) throw new Error('EU_games_request_failed');

        const gamesData = await gamesEU.json();
        return <GameEU[]> gamesData.response.docs;
    } catch (err) {
        if (/(?:EU_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of EU Games failed');
        throw err;
    }
};

/**
 * Get pricing information for the requested games. Paginates every 50 games.
 * @param {string} country A two digit country code. (ISO 3166-1 alpha-2 country code)
 * @param {string[] | string} gameIds One or more NSUID of the corresponding games.
 * @param {number} [offset] (Optional) The offset to start at
 * @param {TitleData[]} [prices] (Optional) An array of {@link TitleData}
 * @return {Promise<PriceResponse>} A promise containing the pricing information.
 * @method
 * @name getPrices
 */
export const getPrices = async (country: string, gameIds: string[] | string, offset: number = 0, prices: TitleData[] = []): Promise<PriceResponse> => {
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
 * @param {string[]} countryCodes A list of 2 digit country codes for every country eShop to lookup. (ISO 3166-1 alpha-2 country codes)
 * @param {string} gameCode A 14 digits game NSUID from the desired region.
 * @param {Region} region A region id that will be appended in the final shop object for filtering purposes.
 * @returns {Promise<EShop[]>} A list of shop objects with country code, name and default currency.
 * @method
 * @name getShopsByCountryCodes
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
        if (/(?:ACTIVE_SHOPS_Rate_Limit)/i.test(err.toString())) throw new EshopError('Looks like you ran into a rate limit while getting price data, please do not spam the Nintendo servers.');
        throw err;
    }
};

/**
 * Gets all active eShops on American countries.
 * This method will launch several requests at nintendo web services, so don't abuse it.
 * @returns {Promise<EShop[]>} A list of shop objects with country code, name and default currency.
 * @method
 * @name getShopsAmerica
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
 * This method will launch several requests at nintendo web services, so don't abuse it.
 * @returns {Promise<EShop[]>} A list of shop objects with country code, name and default currency.
 * @method
 * @name getShopsEurope
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
 * This method will launch several requests at nintendo web services, so don't abuse it.
 * @returns {Promise<EShop[]>} A list of shop objects with country code, name and default currency.
 * @method
 * @name getShopsAsia
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
 * This method will launch several requests at nintendo web services, so don't abuse it.
 * @returns {Promise<EShop[]>} A list of shop objects with country code, name and default currency.
 * @method
 * @name getActiveShops
 */
export const getActiveShops = async (): Promise<EShop[]> => {
    const shopsAmerica = await getShopsAmerica();
    const shopsAsia = await getShopsAsia();
    const shopsEurope = await getShopsEurope();

    return shopsAmerica.concat(shopsAsia, shopsEurope);
};

/**
 * Parses the game code to extract the cross-region protion.
 * @param {GameUS | GameEU | GameJP} game The game object returned from one of the other methods.
 * @param {Region} region Region code
 * @returns {string | null} The 4-digit resulting game code
 * @method
 * @name parseGameCode
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
 * @param {GameUS | GameEU | GameJP} game The game object returned from one of the other methods.
 * @param {Region} region Region code
 * @returns {string | null} The 14-digits NSUID
 * @method
 * @name parseNSUID
 */
export const parseNSUID = (game: GameUS | GameEU | GameJP, region: Region): string | null => {
    switch (region) {
        case Region.EUROPE:
            return (game as GameEU).nsuid_txt ? (game as GameEU).nsuid_txt[0] : null;
        case Region.ASIA:
            const nsuidParse = JP_NSUID_REGEX.exec((game as GameJP).LinkURL[0]);
            return (nsuidParse && nsuidParse.length > 0) ? nsuidParse[0] : null;
        default:
        case Region.AMERICAS:
            return (game as GameUS).nsuid;
    }
};
