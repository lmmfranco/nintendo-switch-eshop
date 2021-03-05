import { getQueriedGamesAmerica } from '../src';

describe('getQueriedGamesAmerica', () => {
  test('GIVEN Zelda THEN returns results with some known games', async () => {
    const data = await getQueriedGamesAmerica('Zelda');

    expect(data).toBeInstanceOf(Object);
    expect(data.length).toBeGreaterThanOrEqual(20);

    expect(data).toEqual(
      expect.arrayContaining([
        // Expect Link's Awakening to be in the data
        expect.objectContaining({
          title: 'The Legend of Zelda™: Link’s Awakening'
        }),
        // Expect Breath of the Wild to be in the data
        expect.objectContaining({
          title: 'The Legend of Zelda: Breath of the Wild'
        }),
        // Expect Skyward Sword to be in the data
        expect.objectContaining({
          title: 'The Legend of Zelda™: Skyward Sword HD'
        })
      ])
    );
  });
});
