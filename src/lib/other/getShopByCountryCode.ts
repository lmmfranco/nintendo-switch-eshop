import { countries, Country } from 'country-data';
import type { Region } from '../utils/constants';
import type { EShop, PriceResponse } from '../utils/interfaces';
import { getPrices } from './getPrices';

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
  region: Region
): Promise<EShop[]> => {
  try {
    const countryList: Country[] = countryCodes.map(
      (code: string) => countries.all.filter((country: Country) => country.alpha2 === code)[0]
    );
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

    const activeShops = shops.filter(
      (shop: PriceResponse) => shop && shop.prices && shop.prices.length && shop.prices[0].regular_price
    );
    const eShops = activeShops.map((shop: PriceResponse) => ({
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
