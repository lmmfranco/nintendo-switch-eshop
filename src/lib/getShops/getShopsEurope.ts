import { regions } from 'country-data';
import { getShopsByCountryCodes } from '../other/getShopByCountryCode';
import { EU_GAME_CHECK_CODE, Region } from '../utils/constants';
import type { EShop } from '../utils/interfaces';

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
      regions.southernEurope.countries,
      regions.easternEurope.countries,
      regions.westernEurope.countries,
      regions.australia.countries,
      regions.southernAfrica.countries
    ),
    EU_GAME_CHECK_CODE,
    Region.EUROPE
  );
};
