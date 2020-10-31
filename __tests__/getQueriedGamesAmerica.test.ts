import { getQueriedGamesAmerica } from '../src';

describe('getQueriedGamesAmerica', () => {
  test('GIVEN Zelda THEN returns at least XXX results', async () => {
    const data = await getQueriedGamesAmerica('Zelda');

    expect(data).toBeInstanceOf(Object);
    expect(data.length).toBeGreaterThanOrEqual(20);

    // Expect Link's Awakening to be in the data
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: "The Legend of Zelda: Link's Awakening"
        })
      ])
    );

    // Expect Breath of the Wild to be in the data
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'The Legend of Zelda: Breath of the Wild'
        })
      ])
    );
  });
});
