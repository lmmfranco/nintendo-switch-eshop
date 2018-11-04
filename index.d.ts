export as namespace SwitchEshop;

declare var eshop: SwitchEshop.IExports;
export = eshop;

declare namespace SwitchEshop {
    export enum Region {
        AMERICAS, EUROPE, ASIA
    }

    export interface Categories {
        category: string[];
    }

    export interface GameUS {
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
        categories: Categories;
        slug: string;
        buyitnow: boolean;
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

    export interface GameJP {
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

    export type Game = GameUS | GameEU | GameJP;

    export interface EShop {
        code: string;
        country: string;
        currency: string;
        region: Region;
    }

    export interface PriceError {
        code: string;
        message: string;
    }

    export interface PriceData {
        amount: string;
        currency: string;
        raw_value: string;
        start_datetime: string;
        end_datetime: string;
    }        

    export interface TitleData {
        title_id: number;
        sales_status: string;
        regular_price: PriceData[];
        discount_price: PriceData[];
    }    


    export interface PriceResponse {
        error: PriceError;
        personalized: boolean;
        country: string;
        prices: TitleData[];
    }

    export interface RequestOptions {
        locale?: string;
        limit?: number;
        shop: string;
    }

    export interface IExports {
        Region: Region,
        parseGameCode(game: Game, region: Region): string,
        parseNSUID(game: Game, region: Region): string,
        getGamesAmerica(options?: RequestOptions): Promise<GameUS[]>,
        getGamesEurope(options?: RequestOptions): Promise<GameEU[]>,
        getGamesJapan(): Promise<GameJP[]>,
        getPrices(country: string, gameIds: string | string[]): Promise<PriceResponse>,
        getShopsByCountryCodes(countryCodes: string[], gamecode: string, region: Region): Promise<EShop[]>,
        getShopsAmerica(): Promise<EShop[]>,
        getShopsEurope(): Promise<EShop[]>,
        getShopsAsia(): Promise<EShop[]>,
        getActiveShops(): Promise<EShop[]>
    }
}

