import { lookup } from 'country-data';
import { getShopsByCountryCodes, Region } from '../lib';
import { US_GAME_CHECK_CODE } from '../lib/constants';

test('getShopsByCountry', async () => {
    const expectedReturn = [{code: 'US', country: 'United States', currency: 'USD', region: 1}];
    const data = await getShopsByCountryCodes(
        [lookup.countries({name: 'United States'})[0].alpha2],
        US_GAME_CHECK_CODE,
        Region.AMERICAS
    );
    expect(data).toBeInstanceOf(Object);
    expect(data).toHaveLength(1);
    expect(data).toMatchObject(expectedReturn);
});