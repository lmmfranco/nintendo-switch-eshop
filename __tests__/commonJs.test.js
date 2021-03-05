/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
const { getQueriedGamesAmerica } = require('../src');

describe('CommonJS Require test', () => {
  test('GIVEN Pokemon THEN returns results with some known games', async () => {
    const data = await getQueriedGamesAmerica('Pokemon');

    expect(data).toBeInstanceOf(Object);
    expect(data.length).toBeGreaterThanOrEqual(20);

    expect(data).toEqual(
      expect.arrayContaining([
        // Expect Pokémon™ Legends: Arceus to be in the data
        expect.objectContaining({
          title: 'Pokémon™ Legends: Arceus'
        }),
        // Expect Pokémon™ Brilliant Diamond to be in the data
        expect.objectContaining({
          title: 'Pokémon™ Brilliant Diamond'
        }),
        // Expect New Pokémon Snap to be in the data
        expect.objectContaining({
          title: 'New Pokémon Snap™'
        })
      ])
    );
  });
});
