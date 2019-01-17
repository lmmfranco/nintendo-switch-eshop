import { Country } from 'country-data';

/**
 * @typedef {ICategory} ICategory
 * @property {string[]} category
 */
export interface ICategory {
    category: string[];
}

/**
 * @typedef {IGameEU} IGameEU
 * @property {string} age_rating_type
 * @property {string} age_rating_value
 * @property {string} copyright_s
 * @property {string} developer
 * @property {string} excerpt
 * @property {string} fs_id
 * @property {string} game_series_t
 * @property {string} gift_finder_carousel_image_url_s
 * @property {string} gift_finder_description_s
 * @property {string} gift_finder_detail_page_image_url_s
 * @property {string} gift_finder_detail_page_store_link_s
 * @property {string} gift_finder_wishlist_image_url_s
 * @property {string} image_url
 * @property {string} image_url_sq_s
 * @property {string} image_url_tm_s
 * @property {string} originally_for_t
 * @property {string} pretty_agerating_s
 * @property {string} pretty_date_s
 * @property {string} publisher
 * @property {string} sorting_title
 * @property {string} title
 * @property {string} type
 * @property {string} url
 * @property {boolean} add_on_content_b
 * @property {boolean} club_nintendo
 * @property {boolean} near_field_comm_b
 * @property {boolean} physical_version_b
 * @property {boolean} play_mode_handheld_mode_b
 * @property {boolean} play_mode_tabletop_mode_b
 * @property {boolean} play_mode_tv_mode_b
 * @property {Date} change_date
 * @property {Date} date_from
 * @property {Date} priority
 * @property {number} age_rating_sorting_i
 * @property {number} players_from
 * @property {number} players_to
 * @property {string[]} compatible_controller
 * @property {string[]} game_categories_txt
 * @property {string[]} game_category
 * @property {string[]} language_availability
 * @property {string[]} nsuid_txt Array containing the 14-digit game unique identifier
 * @property {string[]} playable_on_txt
 * @property {string[]} product_code_txt Array containing the product code
 * @property {string[]} system_names_txt
 * @property {string[]} system_type
 * @property {string[]} title_extras_txt
 */
export interface IGameEU {
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
    nsuid_txt: string[];
    playable_on_txt: string[];
    product_code_txt: string[];
    system_names_txt: string[];
    system_type: string[];
    title_extras_txt: string[];
}

/**
 * @typedef {IGameUS} IGameUS
 * @property {string} game_code Product code. Can be parsed for a region wide code.
 * @property {boolean} buyonline
 * @property {string} front_box_art
 * @property {number} eshop_price USA eShop price (in dollars)
 * @property {string} nsuid 14-digit game unique identifier
 * @property {string} video_link
 * @property {string} number_of_players
 * @property {number} ca_price Canada eShop price (in canadian dollars)
 * @property {string} id
 * @property {string} title
 * @property {string} system Gaming platform
 * @property {boolean} free_to_start
 * @property {boolean} digitaldownload
 * @property {string} release_date
 * @property {ICategory} categories
 * @property {string} slug Game URL name
 * @property {boolean} buyitnow
 */
export interface IGameUS {
    game_code: string;
    buyonline: boolean;
    front_box_art: string;
    eshop_price: number;
    nsuid: string;
    video_link: string;
    number_of_players: string;
    ca_price: number;
    id: string;
    title: string;
    system: string;
    free_to_start: boolean;
    digitaldownload: boolean;
    release_date: string;
    categories: ICategory;
    slug: string;
    buyitnow: boolean;
}

/**
 * @typedef {IGameJP} IGameJP
 * @property {string[]} LinkURL A single item array containing the game url
 * @property {string[]} LinkTarget
 * @property {string[]} ScreenshotImgURL A single item array containing the game thumbnail url
 * @property {string[]} ScreenshotImgURLComing
 * @property {string[]} TitleName A single item array containing the game title
 * @property {string[]} TitleNameRuby
 * @property {string[]} SoftType
 * @property {string[]} SalesDate
 * @property {string[]} SalesDateStr
 * @property {string[]} MakerName
 * @property {string[]} Hard
 * @property {string[]} Memo
 */
export interface IGameJP {
    LinkURL: string[];
    LinkTarget: string[];
    ScreenshotImgURL: string[];
    ScreenshotImgURLComing: string[];
    TitleName: string[];
    TitleNameRuby: string[];
    SoftType: string[];
    SalesDate: string[];
    SalesDateStr: string[];
    MakerName: string[];
    Hard: string[];
    Memo: string[];
}

/**
 * @typedef {IEshop} IEshop
 * @property {string} code
 * @property {string} country
 * @property {string} currency
 * @property {Region} region
 */
export interface IEshop {
    code: string;
    country: string;
    currency: string;
    region: Region;
}

/**
 * @typedef {IPriceResponse} IPriceResponse
 * @property {IPriceError} error
 * @property {boolean} personalized
 * @property {string} country
 * @property {ITitleData[]} prices
 */
export interface IPriceResponse {
    error: IPriceError;
    personalized: boolean;
    country: Country;
    prices: ITitleData[];
}

/**
 * @typedef {ITitleData} ITitleData
 * @property {number} title_id
 * @property {string} sales_status
 * @property {IPriceData} regular_price
 * @property {IPriceData} [discount_price]
 */
export interface ITitleData {
    title_id: number;
    sales_status: string;
    regular_price: IPriceData;
    discount_price?: IPriceData;
}

/**
 * @typedef {IPriceError} IPriceError
 * @property {string} code
 * @property {string} message
 */
export interface IPriceError {
    code: string;
    message: string;
}

/**
 * @typedef {IPriceData} IPriceData
 * @property {string} amount
 * @property {string} currency
 * @property {string} raw_value
 * @property {string} [start_datetime]
 * @property {string} [end_datetime]
 */
export interface IPriceData {
    amount: string;
    currency: string;
    raw_value: string;
    start_datetime?: string;
    end_datetime?: string;
}

/**
 * @typedef {IRequestOptions} IRequestOptions
 * @property {number} limit Game count limit (Can only be lower than default page size)
 */
interface IRequestOptions {
    limit?: number;
}

/**
 * @typedef {IUSOptions} IUSOptions
 * @property {'retail' | 'ncom' | 'all'} shop Either `'retail' / 'ncom' / 'all'`. Defaults to `'ncom'`.
 * @extends IRequestOptions
 */
export interface IUSOptions extends IRequestOptions {
    shop?: 'retail' | 'ncom' | 'all';
}

/**
 * @typedef {IEUOptions} IEUOptions
 * @property {string} locale Game information locale. (EU Only)
 * @extends IRequestOptions
 */
export interface IEUOptions extends IRequestOptions {
    locale?: string;
}


/**
 * Predefined options for the unit system
 * @enum {Region} Region
 * @property {Region.AMERICAS}
 * @property {Region.EUROPE}
 * @property {Region.ASIA}
 */
export enum Region {
    AMERICAS = 1,
    EUROPE = 2,
    ASIA = 3,
}