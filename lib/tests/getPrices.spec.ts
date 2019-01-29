import { getPrices } from '../';
import { US_GAME_CHECK_CODE } from '../constants';

test('getPrices', async () => {
    const expectedReturn = {
        country: 'US',
        personalized: false,
        prices: [{regular_price: {amount: '$39.99', currency: 'USD', raw_value: '39.99'}, sales_status: 'onsale', title_id: 70010000000185}],
    };
    const data = await getPrices('US', US_GAME_CHECK_CODE);
    expect(data).toBeInstanceOf(Object);
    expect(data).toMatchObject(expectedReturn);
});