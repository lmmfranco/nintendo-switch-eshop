import { getGamesAmerica } from '../lib';

describe('getGamesAmerica', () => {
    it('should allow custom limit', async () => {
        const data = await getGamesAmerica({shop: 'ncom', limit: 1});
        expect(data).toBeInstanceOf(Object);
        expect(data).toHaveLength(1);
    });

    it('should allow unfiltered shop', async () => {
        jest.setTimeout(60000);
        const data = await getGamesAmerica({shop: 'unfiltered'});
        expect(data).toBeInstanceOf(Object);
        expect(data.length).toBeGreaterThanOrEqual(1500);
    });
});

