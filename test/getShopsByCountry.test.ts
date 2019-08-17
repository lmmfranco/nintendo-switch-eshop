import { lookup } from 'country-data';
import { getShopsByCountryCodes, Region, US_GAME_CHECK_CODE } from '../src';

describe('getShopsByCountry', () => {
  test('Success Case', async () => {
    const expectedReturn = [ {
      code: 'US', country: 'United States', currency: 'USD', region: 1,
    } ];
    const data = await getShopsByCountryCodes(
      [ lookup.countries({name: 'United States'})[0].alpha2 ],
      US_GAME_CHECK_CODE,
      Region.AMERICAS
    );
    expect(data).toBeInstanceOf(Object);
    expect(data).toHaveLength(1);
    expect(data).toMatchObject(expectedReturn);
  });
});