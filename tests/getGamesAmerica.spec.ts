import { getGamesAmerica } from '../lib';

test('getGamesAmerica', async () => {
    const data = await getGamesAmerica({shop: 'ncom', limit: 1});
    expect(data).toBeInstanceOf(Object);
    expect(data).toHaveLength(1);
});