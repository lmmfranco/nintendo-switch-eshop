import { Country } from 'country-data';

export interface Category {
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

export interface GameUS {
  /** Product code. Can be parsed for a region wide code. */
  game_code: string;
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

export interface AlgoliaResults {
  /** The games found */
  hits: GameUS[];
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

export interface AlgoliaResponse {
  results: AlgoliaResults[];
}

export interface GameJP extends Record<string, string | number> {
  /** The game url */
  LinkURL: string;
  /** The Link Target, if it exists */
  LinkTarget: string;
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
  SalesDateStr: string;
  MakerName: string;
  Hard: string;
  Memo: string;
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

export interface PriceError {
  code: string;
  message: string;
}

export interface PriceData {
  amount: string;
  currency: string;
  raw_value: string;
  start_datetime?: string;
  end_datetime?: string;
}

export interface RequestOptions {
  /**
   * Game count limit (Can only be lower than default page size).
   *
   * @remarks
   * On the US eshop, the max limit is 100. Leave empty to get all the games. */
  limit?: number;
}

export interface USRequestOptions extends RequestOptions {
  /**
   * Either `'retail'`,  `'ncom'` or `'all'`.
   * @default ncom
   */
  shop?: 'retail' | 'ncom' | 'all' | 'unfiltered';
}
export interface EURequestOptions extends RequestOptions {
  /** Game information locale. (EU Only) */
  locale?: string;
}

/**
 * Predefined options for the unit system
 */
export enum Region {
  AMERICAS = 1,
  EUROPE = 2,
  ASIA = 3,
}