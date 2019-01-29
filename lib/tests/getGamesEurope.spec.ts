import { getGamesEurope } from '../';

test('getGamesEurope', async () => {
    const data = await getGamesEurope({locale: 'en', limit: 1});
    expect(data).toBeInstanceOf(Object);
    expect(data).toHaveLength(1);
});