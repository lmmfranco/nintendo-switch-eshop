declare namespace switcheshop {
    enum Region {
        AMERICAS, EUROPE, ASIA
    }

    interface Categories {
        category: string[];
    }

    interface GameUS {
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

    interface GameEU {
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

     interface GameJP {
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

    type Game = GameUS | GameEU | GameJP;

    interface EShop {
        code: string;
        country: string;
        currency: string;
        region: Region;
    }

    interface PriceError {
        code: string;
        message: string;
    }

    interface PriceData {
        amount: string;
        currency: string;
        raw_value: string;
        start_datetime: string;
        end_datetime: string;
    }        

    interface TitleData {
        title_id: number;
        sales_status: string;
        regular_price: PriceData[];
        discount_price: PriceData[];
    }    


    interface PriceResponse {
        error: PriceError;
        personalized: boolean;
        country: string;
        prices: TitleData[];
    }

    interface RequestOptions {
        locale?: string;
        limit?: number;
        shop: string;
    }

    const Region: Region;
    function parseGameCode(game: Game, region: Region): string;
    function parseNSUID(game: Game, region: Region): string;
    function getGamesAmerica(options?: RequestOptions): Promise<GameUS[]>;
    function getGamesEurope(options?: RequestOptions): Promise<GameEU[]>;
    function getGamesJapan(): Promise<GameJP[]>;
    function getPrices(country: string, gameIds: string | string[]): Promise<PriceResponse>;
    function getShopsByCountryCodes(countryCodes: string[], gamecode: string, region: Region): Promise<EShop[]>;
    function getShopsAmerica(): Promise<EShop[]>;
    function getShopsEurope(): Promise<EShop[]>;
    function getShopsAsia(): Promise<EShop[]>;
    function getActiveShops(): Promise<EShop[]>;
}

export = switcheshop;
