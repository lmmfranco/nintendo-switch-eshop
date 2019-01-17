import { stringify } from 'awesome-querystring';
import { countries, Country } from 'country-data';
import { parse as xml2json } from 'fast-xml-parser';
import fetch from 'node-fetch';
import {
    EshopError,
    EU_DEFAULT_LOCALE,
    EU_GAME_LIST_LIMIT,
    EU_GET_GAMES_URL,
    JP_GET_GAMES_COMING,
    JP_GET_GAMES_CURRENT,
    PRICE_GET_URL,
    PRICE_LIST_LIMIT,
    US_GAME_LIST_LIMIT,
    US_GET_GAMES_OPTIONS,
    US_GET_GAMES_URL
} from './constants';
import { IEshop, IEUOptions, IGameEU, IGameJP, IGameUS, IPriceResponse, ITitleData, IUSOptions } from './interfaces';

/**
 * Removed duplicates from an array
 * @param {any[]} array The input array
 * @param {string} property The property to check
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
 * Fetches all games on american eshops
 *
 * Paginates every 200 games, _(maximum item count per request)_
 * @param {IUSOptions} [options] (Optional) Options for the request
 * @param {number} [offset] (Optional) Offset to start searching at
 * @param {string[]} [games] (Optional) Array of games to filter by
 * @returns {Promise<IGameUS[]>} Promise containing all the games
 */
export const getGamesAmerica = async (options: IUSOptions = {shop: 'ncom', limit: US_GAME_LIST_LIMIT}, offset: number = 0, games: IGameUS[] = []): Promise<IGameUS[]> => {
    if (!options.limit) options.limit = US_GAME_LIST_LIMIT;
    if (!options.shop) options.shop = 'ncom';

    const shopParam = options.shop === 'all' ? ['ncom', 'retail'] : options.shop;

    try {
        const gamesUS = await fetch(`${US_GET_GAMES_URL}?${stringify({
            limit: options.limit,
            offset,
            shop: shopParam,
            ...US_GET_GAMES_OPTIONS,
        })}`);

        if (!gamesUS.ok) throw new Error('US_games_request_failed');

        const filteredResponse = await gamesUS.json();
        const accumulatedGames: IGameUS[] = arrayRemoveDuplicates(games.concat(filteredResponse.games.game), 'slug');

        if (!options.limit && filteredResponse.games.game.length + offset < filteredResponse.filter.total) {
            await getGamesAmerica(options, offset + options.limit, accumulatedGames);
        }

        return accumulatedGames;
    } catch (err) {
        if (/(?:US_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of US Games failed');
        return err;
    }
};

/**
 * Fetches all games on japanese eshops
 * @returns {Promise<IGameJP[]>} Promise containing all the games
 */
export const getGamesJapan = async (): Promise<IGameJP[]> => {
    try {
        const currentGamesJP = await fetch(JP_GET_GAMES_CURRENT);
        const comingGamesJP = await fetch(JP_GET_GAMES_COMING);
        if (!currentGamesJP.ok) throw new Error('JP_current_games_US_games_request_failed');
        if (!comingGamesJP.ok) throw new Error('JP_coming_games_US_games_request_failed');

        const parsedCurrentGames = xml2json(await currentGamesJP.text());
        const parsedComingGames = xml2json(await comingGamesJP.text());
        const currentGames: IGameJP[] = parsedCurrentGames.TitleInfoList.TitleInfo;
        const comingGames: IGameJP[] = parsedComingGames.TitleInfoList.TitleInfo;

        return currentGames.concat(comingGames);
    } catch (err) {
        if (/(?:JP_current_games_US_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of Current JP Games failed');
        if (/(?:JP_coming_games_US_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of Upcoming JP Games failed');
        return err;
    }
};

/**
 * Fetches all games on european eshops
 *
 * @param {IEUOptions} [options] (Optional) Options for the request
 * @param {string[]} [locale] (Optional) Locale for the request
 * @returns {Promise<IGameUS[]>} Promise containing all the games
 */
export const getGamesEurope = async (options: IEUOptions = {limit: EU_GAME_LIST_LIMIT, locale: EU_DEFAULT_LOCALE}): Promise<IGameEU[]> => {
    if (!options.limit) options.limit = EU_GAME_LIST_LIMIT;
    if (!options.locale) options.locale = EU_DEFAULT_LOCALE;

    try {
        const gamesEU = await fetch(`${EU_GET_GAMES_URL.replace('{locale}', options.locale)}?${stringify({
            fq: 'type:GAME AND system_type:nintendoswitch* AND product_code_txt:*',
            q: '*',
            rows: options.limit,
            sort: 'sorting_title asc',
            start: '0',
            wt: 'json',
        })}`);

        if (!gamesEU.ok) throw new Error('EU_games_request_failed');

        const gamesData = await gamesEU.json();
        return <IGameEU[]> gamesData.docs;
    } catch (err) {
        if (/(?:EU_games_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of EU Games failed');
        return err;
    }
};

/**
 * Get pricing information for the requested games. Paginates every 50 games.
 * @param {string} country A two digit country code. (ISO 3166-1 alpha-2 country code)
 * @param {string[] | string} gameIds One or more NSUID of the corresponding games.
 * @param {number} [offset] Optional: The offset to start at
 * @param {ITitleData[]} [prices] Optional: An array of {@link ITitleData}
 * @return {Promise<IPriceResponse>} A promise containing the pricing information.
 */
export const getPrices = async (country: string, gameIds: string[] | string, offset: number = 0, prices: ITitleData[] = []): Promise<IPriceResponse> => {
    try {
        const filteredIds = gameIds.slice(offset, offset + PRICE_LIST_LIMIT);
        const priceData = await fetch(`${PRICE_GET_URL}?${stringify({
            country,
            ids: filteredIds,
            limit: PRICE_LIST_LIMIT,
        })}`);

        if (!priceData.ok) throw new Error('PRICE_get_request_failed');
        const response: IPriceResponse = await priceData.json();

        if (response.prices && response.prices.length + offset < gameIds.length) {
            const accumulatedPrices = prices.concat(response.prices);
            getPrices(country, gameIds, offset + PRICE_LIST_LIMIT, accumulatedPrices);
        } else if (response.prices) {
            response.prices = response.prices.concat(prices);
            return response;
        }

        return response;
    } catch (err) {
        if (/(?:PRICE_get_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of eShop prices failed');
        return err;
    }
};

/**
 * Gets all active eshops given a list of countries.
 * @param {string[]} countryCodes A list of 2 digit country codes for every country eshop to lookup. (ISO 3166-1 alpha-2 country codes)
 * @param {string} gameCode A 14 digits game NSUID from the desired region.
 * @param {number} region A region id that will be appended in the final shop object for filtering purposes.
 * @returns {Promise<IEshop[]>} A list of shop objects with country code, name and default currency.
 */
export const getShopsByCountryCodes = async (countryCodes: string[], gameCode: string, region: number): Promise<IEshop[]> => {
    const countryList: Country[] = countryCodes.map((code: string) => countries.all.filter((country: Country) => country.alpha2 === code)[0]);
    let shops: IPriceResponse[] = [];

    for (const country of countryList) {
        try {
            const response = await getPrices(country.alpha2, gameCode);
            response.country = country;
            shops.push(response);
        } catch (err) {
            // intentionally empty
        }
    }

    shops = shops.filter(Boolean);
    const activeShops = shops.filter((shop: (IPriceResponse | undefined)) => shop && shop.prices && shop.prices.length && shop.prices[0].regular_price);
    return activeShops.map((shop: (IPriceResponse)) => {
        return {
            code: shop.country.alpha2,
            country: shop.country.name,
            currency: shop.prices[0].regular_price.currency,
            region,
        };
    });
};