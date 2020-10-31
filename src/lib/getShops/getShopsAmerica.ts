import { regions } from 'country-data';
import { getShopsByCountryCodes } from '../other/getShopByCountryCode';
import { Region, US_GAME_CHECK_CODE } from '../utils/constants';
import type { EShop } from '../utils/interfaces';

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
    regions.southAmerica.countries.concat(regions.centralAfrica.countries, regions.northernAmerica.countries),
    US_GAME_CHECK_CODE,
    Region.AMERICAS
  );
};
