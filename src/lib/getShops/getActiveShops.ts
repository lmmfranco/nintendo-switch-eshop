import type { EShop } from '../utils/interfaces';
import { getShopsAmerica } from './getShopsAmerica';
import { getShopsAsia } from './getShopsAsia';
import { getShopsEurope } from './getShopsEurope';

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
    throw err as Error;
  }
};
