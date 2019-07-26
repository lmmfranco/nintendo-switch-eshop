export const US_GET_GAMES_OPTIONS = {system: 'platform:Nintendo Switch', sort: 'title', direction: 'asc'};
export const US_ALGOLIA_ID = 'U3B6GR4UA3';
export const US_ALGOLIA_KEY = '9a20c93440cf63cf1a7008d75f7438bf';
export const US_GET_GAMES_URL = `https://${US_ALGOLIA_ID}-dsn.algolia.net/1/indexes/*/queries`;
export const US_GAME_CHECK_CODE = '70010000000185';
export const US_GAME_CODE_REGEX = /HAC\w(\w{4})/;
export const US_GAME_LIST_LIMIT = 200;
export const US_PRICE_RANGES = [
    'Free to start',
    '$0 - $4.99',
    '$5 - $9.99',
    '$10 - $19.99',
    '$20 - $39.99',
    '$40+'
];

export const EU_GET_GAMES_OPTIONS = {fq: 'type:GAME AND system_type:nintendoswitch* AND product_code_txt:*', q: '*', sort: 'sorting_title asc', start: '0', wt: 'json'};
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