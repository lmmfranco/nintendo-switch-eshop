import type { Country } from 'country-data';
import type { Region } from './constants';

/** @internal */
interface Category {
  /** Categories array */
  category: string[];
}

export interface GameEU {
  age_rating_type: string;
  age_rating_value: string;
  copyright_s: string;
  developer: string;
  excerpt: string;
  fs_id: string;
  game_series_t: string;
  gift_finder_carousel_image_url_s: string;
  gift_finder_description_s: string;
  gift_finder_detail_page_image_url_s: string;
  gift_finder_detail_page_store_link_s: string;
  gift_finder_wishlist_image_url_s: string;
  image_url: string;
  image_url_h2x1_s: string;
  image_url_sq_s: string;
  image_url_tm_s: string;
  originally_for_t: string;
  pretty_agerating_s: string;
  pretty_date_s: string;
  publisher: string;
  sorting_title: string;
  title: string;
  type: string;
  url: string;
  add_on_content_b: boolean;
  club_nintendo: boolean;
  near_field_comm_b: boolean;
  physical_version_b: boolean;
  play_mode_handheld_mode_b: boolean;
  play_mode_tabletop_mode_b: boolean;
  play_mode_tv_mode_b: boolean;
  change_date: Date;
  date_from: Date;
  priority: Date;
  age_rating_sorting_i: number;
  players_from: number;
  players_to: number;
  compatible_controller: string[];
  game_categories_txt: string[];
  game_category: string[];
  language_availability: string[];
  /** Array containing the 14-digit game unique identifier */
  nsuid_txt: string[];
  playable_on_txt: string[];
  /** Array containing the product code */
  product_code_txt: string[];
  system_names_txt: string[];
  system_type: string[];
  title_extras_txt: string[];
}

/** Additional options for the [[getQueriedGamesAmerica]] method  */
export interface QueriedGamesAmericaOptions {
  /**
   * The amount of hits to be received per page
   * @minimum 0
   * @maximum 200
   * @default 200
   */
  hitsPerPage?: number;
  /**
   * The page number to get
   * @minimum 0
   * @default 0
   */
  page?: number;
}

export interface QueriedGameResult {
  /** The hits for this query */
  hits: QueriedGameUS[];
  /** The amount of hits */
  nbHits: number;
  /** The page that the result is on */
  page: number;
  /** The amount of pages available */
  nbPages: number;
  /** The amount of hits per page */
  hitsPerPage: number;
  /** Whether the amount of hits is exhaustive or not */
  exhaustiveNbHits: true;
  /** The query that was used */
  query: string;
  /** The params that were used */
  params: string;
  /** The amount of time it took the {@link https://www.nintendo.com nintendo.com} API to process this request */
  processingTimeMS: number;
}

export interface QueriedGameUS {
  /** Whether this game is available or not */
  availability: string[];
  /** The box art of the game, if any. Generally undefined for games that are yet to release. */
  boxart?: string;
  /** A description about this game */
  description: string;
  /** A list of companies that developed this game */
  developers: string[];
  /** A list of {@link https://www.esrb.org/ratings-guide/ ESRB descriptors} */
  esrbDescriptors: string[];
  /** The {@link https://www.esrb.org/ratings-guide/ ESRB Rating} */
  esrbRating: string;
  /** Whether this game is featured on the {@link https://www.nintendo.com nintendo.com} homepage */
  featured: boolean;
  /** The franchises this game is a part of */
  franchises: string;
  /** Whether this game is free to start */
  freeToStart: boolean;
  /** A list of general filters that could potentially be searched on {@link https://www.nintendo.com nintendo.com} to find this game with */
  generalFilters: string[];
  /**  A list of genres this game */
  genres: string[];
  /** A large wide image such as a screenshot or artwork of the game, if any. */
  horizontalHeaderImage?: string;
  /** A list of methods through which the game can be acquired, such as retail or digital download. */
  howToShop: string[];
  /** A Unix timestamp in **milliseconds** indicating when the information on this game was last modified */
  lastModified: number;
  /** The lowest price at which this game was ever sold */
  lowestPrice: number;
  /** The {@link https://en.wikipedia.org/wiki/List_price manufacturer's suggested retail price} for this game */
  msrp: number;
  /** The unique ID for this game. */
  nsuid: string;
  /** The amount of players that can simultaneously play this game */
  numOfPlayers: string;
  /** A unique {@link https://en.wikipedia.org/wiki/Universally_unique_identifier GUID} that represents this game's entry in the Nintendo API.  */
  objectID: string;
  /** The platform this game released on */
  platform: string;
  /** A list of player filters that could potentially be searched on {@link https://www.nintendo.com nintendo.com} to find this game with */
  playerFilters: string[];
  /** A category price range that this game falls under. Can be used on {@link https://www.nintendo.com nintendo.com} to find this game with */
  priceRange: string;
  /** A list of companies that published this game */
  publishers: string[];
  /**
   * A display of the release of this game. Can be either an ISO timestamp or some other representation of date.
   * @remark Nintendo has a tendency to also have entries such as `Early 2022` or `Late 2021` here. Normally these kinds of dates would not be parsed by JavaScript, but NodeJS does parse these natural input types.
   */
  releaseDateDisplay: string;
  /** The price of this game if and when it is on sale */
  salePrice: number | null;
  /** A unique {@link https://en.wikipedia.org/wiki/Clean_URL#Slug slug} for this game */
  slug: string;
  /** The title of this game */
  title: string;
  /** A unique to the information about this game. Prefix it with `https://www.nintendo.com` to have a valid URL. */
  url: string;
  /** Additional information returned by the API, it doesn't really serve any purpose but documenting it anyway because it's there. */
  _distinctSeqID: number;
  /** Additional information returned by the API, it doesn't really serve any purpose but documenting it anyway because it's there. */
  _highlightResult: HighlightResult;
}

export interface HighlightResult {
  title: Nsuid;
  nsuid: Nsuid;
  publishers: Nsuid[];
}

export interface Nsuid {
  value: string;
  matchLevel: string;
  matchedWords: string[];
  fullyHighlighted?: boolean;
}

export interface GameUS {
  /** @deprecated Product code. Can be parsed for a region wide code. */
  game_code?: string;
  buyonline: boolean;
  front_box_art: string;
  /** USA eShop price (in dollars) */
  eshop_price: number;
  /** 14-digit game unique identifier */
  nsuid: string;
  video_link: string;
  number_of_players: string;
  /** Canada eShop price (in canadian dollars) */
  ca_price: number;
  id: string;
  title: string;
  /** Gaming platform */
  system: string;
  free_to_start: boolean;
  digitaldownload: boolean;
  release_date: string;
  categories: Category;
  /** Game URL name */
  slug: string;
  buyitnow: boolean;
}

/** @internal */
interface AlgoliaResults<T extends GameUS | QueriedGameUS> {
  /** The games found */
  hits: T[];
  /** Total number of hits with current query */
  nbHits: number;
  page: number;
  nbPages: number;
  /** Number of hits per page */
  hitsPerPage: number;
  processingTimeMS: number;
  facets: {
    [key: string]: {
      [key: string]: number;
    };
  };
  /** Filters for the search query */
  facetFilters: string[][];
  exhaustiveFacetsCount: boolean;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
  index: string;
}

/** @internal */
export interface AlgoliaResponse {
  results: AlgoliaResults<GameUS>[];
}

export interface GameJP extends Record<string, string | number | undefined> {
  /** The game code for the game */
  InitialCode: string;
  /** The game url */
  LinkURL: string;
  /** The Link Target, if it exists */
  LinkTarget: string;
  /** The type of screenshot, if it exists */
  ScreenshotImgFlg: number;
  /** The screenshot URL, if it exists */
  ScreenshotImgURL: string;
  /** The variation of the thumbnail */
  ThumbVariation: string;
  ComingThumb: 'yes' | string;
  /** The game's title */
  TitleName: string;
  /** The title name in Asian characters */
  TitleNameRuby: string;
  SoftType: string;
  D: number;
  SalesDate: string;
  MakerName: string;
  Hard: string;
  Memo: string;
  PlatformID: string;
  Price: string;
  MakerKana: string;
}

export interface EShop {
  code: string;
  country: string;
  currency: string;
  region: Region;
}

export interface PriceResponse {
  error: PriceError;
  personalized: boolean;
  country: Country;
  prices: TitleData[];
}

export interface TitleData {
  title_id: number;
  sales_status: string;
  regular_price: PriceData;
  discount_price?: PriceData;
}

/** @internal */
interface PriceError {
  code: string;
  message: string;
}

/** @internal */
interface PriceData {
  amount: string;
  currency: string;
  raw_value: string;
  start_datetime?: string;
  end_datetime?: string;
}

/** @internal */
interface RequestOptions {
  /**
   * Game count limit (Can only be lower than default page size).
   *
   * @remarks
   * On the US eshop, the max limit is 100. Leave empty to get all the games. */
  limit?: number;
}

export interface EURequestOptions extends RequestOptions {
  /** Game information locale. (EU Only) */
  locale?: string;
}
