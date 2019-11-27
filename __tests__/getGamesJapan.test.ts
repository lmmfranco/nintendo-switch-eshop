import { getGamesJapan } from '../src';

test('getGamesJapan', async () => {
  jest.setTimeout(30000);
  const games = await getGamesJapan();

  expect(games).toBeInstanceOf(Object);
});