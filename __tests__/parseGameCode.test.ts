import { parseGameCode, Region, GameUS, GameJP, GameEU } from '../src';

describe('Success: parseGameCode', () => {
  /* eslint-disable @typescript-eslint/camelcase */
  test('Region == AMERICAS', async () => {
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

  test('Region == ASIA', () => {
    const game: GameJP = {
      LinkURL: '123456789123456789',
      Hard: 'sample',
      LinkTarget: 'sample',
      MakerName: 'sample',
      Memo: 'sample',
      D: new Date().getTime(),
      SalesDateStr: 'sample',
      ScreenshotImgURL: 'https://example.com/HAC12345',
      ComingThumb: 'sample',
      ThumbVariation: 'sample',
      SoftType: 'sample',
      TitleName: 'sample',
      TitleNameRuby: 'sample',
    };

    const data = parseGameCode(game, Region.ASIA);
    expect(typeof data).toBe('string');
    expect(data).toBe('1234');
  });

  test('Region == Europe', () => {
    const game: GameEU = {
      nsuid_txt: [ '12345678912345', 'nope', 'not this one' ],
      sorting_title: 'sort',
      system_names_txt: [ 'xbox' ],
      system_type: [ 'console' ],
      title: 'sample game',
      title_extras_txt: [ 'sample' ],
      type: 'game',
      url: 'https://url.com',
      add_on_content_b: false,
      age_rating_sorting_i: 42,
      age_rating_type: 'E',
      age_rating_value: 'E',
      change_date: new Date(),
      club_nintendo: true,
      compatible_controller: [ 'Xbox', 'PS4' ],
      copyright_s: 'FOSS',
      date_from: new Date(2017, 3),
      developer: 'The World',
      excerpt: 'A very cool game',
      fs_id: 'id',
      game_categories_txt: [ 'sample' ],
      game_category: [ 'sample' ],
      game_series_t: 'series',
      gift_finder_carousel_image_url_s: 'https://url.com',
      gift_finder_description_s: 'descr',
      gift_finder_detail_page_image_url_s: 'https://url.com',
      gift_finder_detail_page_store_link_s: 'https://url.com',
      gift_finder_wishlist_image_url_s: 'https://url.com',
      image_url: 'https://url.com',
      image_url_h2x1_s: 'https://url.com',
      image_url_sq_s: 'https://url.com',
      image_url_tm_s: 'https://url.com',
      language_availability: [ 'en' ],
      near_field_comm_b: true,
      originally_for_t: '5',
      physical_version_b: true,
      play_mode_handheld_mode_b: true,
      play_mode_tabletop_mode_b: true,
      play_mode_tv_mode_b: true,
      playable_on_txt: [ 'xbox' ],
      players_from: 1,
      players_to: 200,
      pretty_agerating_s: 'E',
      pretty_date_s: '2017-03-17',
      priority: new Date(),
      product_code_txt: [ 'HAC12345' ],
      publisher: 'nintendo',
    };

    const data = parseGameCode(game, Region.EUROPE);
    expect(typeof data).toBe('string');
    expect(data).toHaveLength(4);
    expect(data).toBe('2345');
  });
});