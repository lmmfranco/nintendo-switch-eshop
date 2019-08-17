import { getActiveShops } from '../src';

describe('getActiveShops', () => {
  test('should return a list of all active shops for all regions', async () => {
    jest.setTimeout(100 * 1000); // This request takes a long while
    const shops = await getActiveShops();

    expect(shops.length).not.toBe(0);
    expect(shops).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'US',
          country: 'United States',
          currency: 'USD',
          region: 1,
        })
      ])
    );
  });
});