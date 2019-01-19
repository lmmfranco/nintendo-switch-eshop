export const US_GET_GAMES_OPTIONS = {system: 'switch', sort: 'title', direction: 'asc'};
export const US_GET_GAMES_URL = 'http://www.nintendo.com/json/content/get/filter/game';
export const US_GAME_CHECK_CODE = '70010000000185';
export const US_GAME_CODE_REGEX = /HAC\w(\w{4})/;
export const US_GAME_LIST_LIMIT = 200;

export const EU_GET_GAMES_URL = 'http://search.nintendo-europe.com/{locale}/select';
export const EU_GAME_CHECK_CODE = '70010000000184';
export const EU_GAME_CODE_REGEX = /HAC\w(\w{4})/;
export const EU_DEFAULT_LOCALE = 'en';
export const EU_GAME_LIST_LIMIT = 9999;

export const JP_GET_GAMES_CURRENT = 'https://www.nintendo.co.jp/data/software/xml-system/switch-onsale.xml';
export const JP_GET_GAMES_COMING = 'https://www.nintendo.co.jp/data/software/xml-system/switch-coming.xml';
export const JP_GAME_CHECK_CODE = '70010000000039';
export const JP_GAME_CODE_REGEX = /\/HAC(\w{4})/;
export const JP_NSUID_REGEX = /\d{14}/;

export const PRICE_GET_URL = 'https://api.ec.nintendo.com/v1/price';
export const PRICE_GET_OPTIONS = {lang: 'en'};
export const PRICE_LIST_LIMIT = 50;

export class EshopError extends Error {

    /**
     * Create an EshopError
     * @param {string} message The message the error should show
     */
    constructor (message: string) {
        super(message);
        this.message = message;
        this.name = 'EshopError';
        this.stack = '';
    }
}