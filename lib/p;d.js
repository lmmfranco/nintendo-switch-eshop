const request = require("request");
const xml2js = require("xml2js");
const unique = require("array-unique-x");
const countries = require("country-data").countries;
const regions = require("country-data").regions;
const Q = require("q");

/**
 * Fetches all games on american eshops.  
 * Paginates every 200 games. _(maximum item count per request)_
 * @param {RequestOptions} [options] Request options (Optional)
 * @returns {Promise<GameUS[]>} Promise containing all the games.
 */
function getGamesAmerica(options, offset, games) {
    const limit = hasProp(options, "limit") ? options.limit : US_GAME_LIST_LIMIT;
    offset = offset || 0;
    games = games || [];
    const shop = hasProp(options, "shop") ? options.shop : "ncom";
    let shopParam;

    if(shop === "all") {
        shopParam = ["ncom","retail"];
    } else {
        shopParam = shop;
    }

    return new Promise((resolve, reject) => {
        request.get({
            url: US_GET_GAMES_URL,
            qs: {
                limit: limit,
                offset: offset,
                shop: shopParam
            },
            qsStringifyOptions: {
                indices: false
            }
        }, (err, res, body) => {
            if (err) return reject(err);
            
            let filteredResponse = JSON.parse(body);

            // Sometimes the last page of the request returns all items (thus giving duplicates)
            let accumulatedGames = unique(games.concat(filteredResponse.games.game), "slug");

            if (!hasProp(options, "limit") && filteredResponse.games.game.length + offset < filteredResponse.filter.total) {
                getGamesAmerica(options, offset + limit, accumulatedGames).then(resolve).catch(reject);
            } else {
                return resolve(accumulatedGames);
            }
        });
    });
}

/**
 * Fetches all games on japanese eshop.
 * @returns {Promise<GameJP[]>} Promise containing all the games.
 */
function getGamesJapan() {
    return new Promise((resolve, reject) => {
      request.get(JP_GET_GAMES_CURRENT, (err, res, body1) => {
            if (err) return reject(err);

            request.get(JP_GET_GAMES_COMING, (err, res, body2) => {
                if (err) return reject(err);

                xml2js.parseString(body1, (err, result1) => {
                    let currentGames = result1.TitleInfoList.TitleInfo;
                    xml2js.parseString(body2, (err, result2) => {
                        let comingGames = result2.TitleInfoList.TitleInfo;
                        return resolve(currentGames.concat(comingGames));
                    });
                });
            });
        });
    });
}

/**
 * Fetches all games on european eshop.  
 * Paginates every 9999 games. _(maximum item count per request)_
 * @param {RequestOptions} [options] Request options (Optional)
 * @returns {Promise<GameEU[]>} Promise containing all the games.
 */
function getGamesEurope(options) {
    const locale = hasProp(options, "locale") ? options.locale.toLowerCase() : EU_DEFAULT_LOCALE
    const limit = hasProp(options, "limit") ? options.limit : "9999";
    return new Promise((resolve, reject) => {
        request.get({
            url: EU_GET_GAMES_URL.replace("{locale}", locale),
            qs: {
                fq: "type:GAME AND system_type:nintendoswitch* AND product_code_txt:*",
                q: "*",
                rows: limit,
                sort: "sorting_title asc",
                start: "0",
                wt: "json"
            }
        }, (err, res, body) => {
            if(err) return reject(err);
            let responseWrapper = JSON.parse(body);
            resolve(responseWrapper.response.docs);
        });
    });
}

/**
 * Gets all active eshops given a list of countries.
 * @param {string[]} countryCodes A list of 2 digit country codes for every country eshop to lookup. (ISO 3166-1 alpha-2 country codes)
 * @param {string} gamecode A 14 digits game NSUID from the desired region.
 * @param {number} region A region id that will be appendend in the final shop object for filtering purposes.
 * @returns {Promise<Eshop[]>} A list of shop objects with country code, name and default currency.
 */
function getShopsByCountryCodes(countryCodes, gamecode, region) {
    let countryList = countryCodes.map(code => countries[code]);

    return new Promise((resolve, reject) => {
        let promises = [];

        countryList.forEach(country => {
            promises.push(getPrices(country.alpha2, gamecode).then(response => {
                response.country = country;
                return response;
            }));
        });

        Q.allSettled(promises).then(values => {
            let validShops = values.map(promise => promise.value).filter(value => value && !value.error);
            let activeShops = validShops.filter(shop => shop.prices && shop.prices.length && shop.prices[0].regular_price);
            let formatted = activeShops.map(shop => {
                return {
                    code: shop.country.alpha2,
                    country: shop.country.name,
                    currency: shop.prices[0].regular_price.currency,
                    region: region
                };
            });
            resolve(formatted);
        }).catch(reject);
    });
}

/**
 * Gets all active eshops on american countries.
 * This method will launch several requests at nintendo web services, so don't abuse it. 
 * @returns {Promise<Eshop[]>} A list of shop objects with country code, name and default currency.
 */
function getShopsAmerica() {
    return getShopsByCountryCodes(regions.southAmerica.countries
        .concat(regions.centralAmerica.countries)
        .concat(regions.northernAmerica.countries),
        US_GAME_CHECK_CODE, Region.AMERICAS);
}

/**
 * Gets all active eshops on european countries.
 * Please note that South Africa and Oceania countries are included.
 * This method will launch several requests at nintendo web services, so don't abuse it.
 * @returns {Promise<Eshop[]>} A list of shop objects with country code, name and default currency.
 */
function getShopsEurope() {
    return getShopsByCountryCodes(regions.northernEurope.countries 
        .concat(regions.southernEurope.countries)
        .concat(regions.easternEurope.countries)
        .concat(regions.westernEurope.countries)
        .concat(regions.australia.countries) // ¯\_(ツ)_/¯ They use EU nsuids
        .concat(regions.southernAfrica.countries), // ¯\_(ツ)_/¯ Nintendo lists them at EU 
        EU_GAME_CHECK_CODE, Region.EUROPE);
}

/**
 * Gets all active eshops on asian countries.
 * This method will launch several requests at nintendo web services, so don't abuse it.
 * @returns {Promise<Eshop[]>} A list of shop objects with country code, name and default currency.
 */
function getShopsAsia() {
    return getShopsByCountryCodes(regions.centralAsia.countries 
        .concat(regions.southernAsia.countries)
        .concat(regions.southeastAsia.countries)
        .concat(regions.eastAsia.countries)
        .concat(regions.westernAsia.countries),
        JP_GAME_CHECK_CODE, Region.ASIA);
}

/**
 * Gets all active eshops.
 * This method will launch several requests at nintendo web services, so don't abuse it.
 * @returns {Promise<Eshop[]>} A list of shop objects with country code, name and default currency.
 */
function getActiveShops() {
    return Q.all([getShopsAmerica(), getShopsAsia(), getShopsEurope()]).spread((america, asia, eu) => america.concat(asia).concat(eu));
}

/**
 * Get pricing information for the requested games. Paginates every 50 games.
 * @param {string} country A two digit country code. (ISO 3166-1 alpha-2 country code)
 * @param {string[] | string} gameIds One or more NSUID of the corresponding games.
 * @return {Promise<PriceResponse>} A promise containing the pricing information.
 */
function getPrices(country, gameIds, offset, prices) {
    offset = offset || 0;
    prices = prices || [];
    let filteredIds = gameIds.slice(offset, offset + PRICE_LIST_LIMIT);
    return new Promise((resolve, reject) => {
        request.get({
            url: PRICE_GET_URL,
            qs: {
                country: country,
                limit: PRICE_LIST_LIMIT,
                ids: filteredIds
            }
        }, (err, res, body) => {
            if (err) return reject(err);
            try {
                let response = JSON.parse(body);

                if(response.prices && response.prices.length + offset < gameIds.length) {
                    let accumulatedPrices = prices.concat(response.prices);
                    getPrices(country, gameIds, offset + PRICE_LIST_LIMIT, accumulatedPrices).then(resolve).catch(reject);
                } else if(response.prices){
                    response.prices = response.prices.concat(prices);
                    resolve(response);
                } else {
                    resolve(response);
                }
                
            } catch(e) {
                // Sometimes we get an unexpected response
                reject(e);
            }
        });
    });
}

/**
 * Parses the game code to extract the cross-region protion.
 * @param {GameUS | GameEU | GameJP} game The game object returned from one of the other methods.
 * @param {number} region Region code. (use the Region constant)
 * @returns {string} The 4-digit resulting game code.
 */
function parseGameCode(game, region) {
    let codeParse;

    switch (region) {
        case Region.EUROPE:
            codeParse = EU_GAME_CODE_REGEX.exec(game.product_code_txt[0]);
            break;
        case Region.ASIA:
            codeParse = JP_GAME_CODE_REGEX.exec(game.ScreenshotImgURL[0]);
            break;
        default:
        case Region.AMERICAS:
            codeParse = US_GAME_CODE_REGEX.exec(game.game_code);
            break;
    }

    return (codeParse && codeParse.length > 1) ? codeParse[1] : null;
}

/**
 * Extracts NSUID information from the game object.
 * @param {GameUS | GameEU | GameJP} game The game object returned from one of the other methods.
 * @param {number} region Region code. (use the Region constant)
 * @returns {string} The 14-digit NSUID.
 */
function parseNSUID(game, region) {
    let nsuidParse;
    switch (region) {
        case Region.EUROPE:
            return game.nsuid_txt ? game.nsuid_txt[0] : null;
        case Region.ASIA:
            nsuidParse = JP_NSUID_REGEX.exec(game.LinkURL[0]);
            return (nsuidParse && nsuidParse.length > 0) ? nsuidParse[0] : null;
        default:
        case Region.AMERICAS:
            return game.nsuid;
    }
}

function hasProp(obj, prop) {
    return obj && prop in obj;
}

module.exports = {
    Region: Region,
    parseGameCode: parseGameCode,
    parseNSUID: parseNSUID,
    getGamesAmerica: getGamesAmerica,
    getGamesEurope: getGamesEurope,
    getGamesJapan: getGamesJapan,
    getPrices: getPrices,
    getShopsByCountryCodes: getShopsByCountryCodes,
    getShopsAmerica: getShopsAmerica,
    getShopsEurope: getShopsEurope,
    getShopsAsia: getShopsAsia,
    getActiveShops: getActiveShops
};