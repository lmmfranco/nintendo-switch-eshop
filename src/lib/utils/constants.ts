/** Algolia ID for getting US games */
export const US_ALGOLIA_ID = 'U3B6GR4UA3';

/** Algolia Key for getting US games */
export const US_ALGOLIA_KEY = 'c4da8be7fd29f0f5bfa42920b0a99dc7';

/** Algolia key for getting US games with a query */
export const QUERIED_US_ALGOLIA_KEY = '6efbfb0f8f80defc44895018caf77504';

/** URL for getting US Games */
export const US_GET_GAMES_URL = `https://${US_ALGOLIA_ID}-dsn.algolia.net/1/indexes/ncom_game_en_us/query`;

/**
 * Sample game code for US store
 * @internal
 */
export const US_GAME_CHECK_CODE = '70010000000185';

/**
 * Regex for US game codes
 * @internal
 */
export const US_GAME_CODE_REGEX = /HAC\w(\w{4})/;

/**
 * Default limit for getting US games - Defaults to 200
 * @internal
 */
export const US_GAME_LIST_LIMIT = 1000;

/**
 * Index names for querying all games by both ascending and descending title
 * @internal
 */
export const US_INDEX_TITLE_ASC = 'ncom_game_en_us_title_asc';

/** @internal */
export const US_INDEX_TITLE_DES = 'ncom_game_en_us_title_des';

/**
 * Static query parameters for facets/filters in US Algolia calls
 * @internal
 */
export const US_FACETS = JSON.stringify([
  'generalFilters',
  'platform',
  'availability',
  'genres',
  'howToShop',
  'virtualConsole',
  'franchises',
  'priceRange',
  'esrbRating',
  'playerFilters'
]);

/** @internal */
export const US_PLATFORM_FACET_FILTER = 'platform:Nintendo Switch';

/**
 * ESRB options and Coming Soon facet filters for querying all games in one request
 * @internal
 */
export const US_ESRB_RATINGS_FILTERS = {
  everyone: 'esrbRating:Everyone',
  everyone10: 'esrbRating:Everyone 10+',
  teen: 'esrbRating:Teen',
  mature: 'esrbRating:Mature'
};

/** @internal */
export const US_AVAILABILITY_FILTER = 'availability:Coming soon';

/**
 * Request headers for US games
 * @internal
 */
export const US_ALGOLIA_HEADERS = {
  'Content-Type': 'application/json',
  'X-Algolia-API-Key': US_ALGOLIA_KEY,
  'X-Algolia-Application-Id': US_ALGOLIA_ID
};

/**
 * Options used for getting EU gmaes
 * @internal
 */
export const EU_GET_GAMES_OPTIONS = {
  fq: 'type:GAME AND system_type:nintendoswitch* AND product_code_txt:*',
  q: '*',
  sort: 'sorting_title asc',
  start: '0',
  wt: 'json'
};

/** URL for getting EU Games */
export const EU_GET_GAMES_URL = 'http://search.nintendo-europe.com/{locale}/select';

/**
 * Sample game code for EU store
 * @internal
 */
export const EU_GAME_CHECK_CODE = '70010000000184';

/**
 * Regex for EU game codes
 * @internal
 */
export const EU_GAME_CODE_REGEX = /HAC\w(\w{4})/;

/**
 * Default locale when getting EU games - defaults to `en`
 * @internal
 */
export const EU_DEFAULT_LOCALE = 'en';

/**
 * Default limit used when getting EU games - defaults to `9999`
 * @internal
 */
export const EU_GAME_LIST_LIMIT = 9999;

/** URL for getting JP Games */
export const JP_GET_GAMES_URL = 'https://www.nintendo.co.jp/data/software/xml/switch.xml';

/**
 * Sample game code for JP store
 * @internal
 */
export const JP_GAME_CHECK_CODE = '70010000000039';

/**
 * Regex for JP game codes
 * @internal
 */
export const JP_GAME_CODE_REGEX = /HAC(\w{4})/;

/**
 * Regex for JP NSUID
 * @internal
 */
export const JP_NSUID_REGEX = /\d{14}/;

/** URL for getting game prices */
export const PRICE_GET_URL = 'https://api.ec.nintendo.com/v1/price';

/**
 * Options for getting Price data
 * @internal
 */
export const PRICE_GET_OPTIONS = { lang: 'en' };

/**
 * Default limit used when getting price data - defaults to `50`
 * @internal
 */
export const PRICE_LIST_LIMIT = 50;

/**
 * Predefined options for the unit system
 */
export const enum Region {
  AMERICAS = 1,
  EUROPE = 2,
  ASIA = 3
}
