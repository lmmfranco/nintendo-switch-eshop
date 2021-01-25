import fetch from 'node-fetch';
import { stringify } from 'querystring';
import { PRICE_GET_OPTIONS, PRICE_GET_URL, PRICE_LIST_LIMIT } from '../utils/constants';
import type { PriceResponse, TitleData } from '../utils/interfaces';
import { EshopError } from '../utils/utils';

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
    const priceData = await fetch(
      `${PRICE_GET_URL}?${stringify({
        country,
        ids: filteredIds,
        limit: PRICE_LIST_LIMIT,
        ...PRICE_GET_OPTIONS
      })}`
    );

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
    if (/(?:PRICE_Rate_Limit)/i.test(err.toString()))
      throw new EshopError('Looks like you ran into a rate limit while getting price data, please do not spam the Nintendo servers.');
    if (/(?:PRICE_get_request_failed)/i.test(err.toString())) throw new EshopError('Fetching of eShop prices failed');
    throw err;
  }
};
