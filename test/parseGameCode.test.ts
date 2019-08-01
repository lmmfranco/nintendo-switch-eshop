import { parseGameCode, Region, GameUS } from '../src';

describe('parseGameCode', () => {
  /* eslint-disable @typescript-eslint/camelcase */
  test('parseGameCode', async () => {
    const game: GameUS = {
      buyitnow: true,
      buyonline: true,
      ca_price: 64.99,
      categories: { category: [ 'Party', 'Multiplayer', 'Action' ] },
      digitaldownload: false,
      eshop_price: 49.99,
      free_to_start: false,
      front_box_art: 'https://media.nintendo.com/nintendo/bin/oiM2QlLg9frNJhSWvFGmi5NAvEAGlYVx/_3d_ldcR3G0YQl590uHXZ89Jmouu5aS9.png',
      game_code: 'HACPAACCA',
      id: 'QY7EtPDIW1WGVWSEkQ7ZVLvCFvonU-Wl',
      nsuid: '70010000000141',
      number_of_players: '2 players simultaneous',
      release_date: 'Mar 3, 2017',
      slug: '1-2-switch',
      system: 'Nintendo Switch',
      title: '1-2-Switch',
      video_link: 'h1OTBqODE64B-g16PJeQj6tifbVKl_v8',
    };

    const data = parseGameCode(game, Region.AMERICAS);
    expect(typeof data).toBe('string');
    expect(data).toHaveLength(4);
    expect(data).toBe('AACC');
  });
});