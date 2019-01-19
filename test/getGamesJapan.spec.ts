import { getGamesJapan } from '../lib';

test('getGamesJapan', async () => {
    jest.setTimeout(30000);
    const data = await getGamesJapan();
    expect(data).toBeInstanceOf(Object);
});