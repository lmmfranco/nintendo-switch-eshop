<div align="center">
<p>
<a href="https://www.npmjs.com/package/nintendo-switch-eshop">
<img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/nintendoeshop.png" height="200" alt="logo">
</a>
</p>

<p>
<h1> nintendo-switch-eshop </h1>
<h3> A Node.JS lib written to extract Nintendo Switch's eShop game and pricing information </h3>
</p>

<p>
<a href="https://depfu.com/repos/lmmfranco/nintendo-switch-eshop"><img src="https://img.shields.io/depfu/lmmfranco/nintendo-switch-eshop.svg?style=flat-square" alt="Depfu" /></a><!--
--><a href="https://github.com/lmmfranco/nintendo-switch-eshop/blob/master/LICENSE.md"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg?longCache=true&style=flat-square&logo=read-the-docs&colorB=8CA1AF&logoColor=white&link=https://www.slack.com&colorA=000000" alt="License"></a><!--
--><a href="https://www.npmjs.com/package/nintendo-switch-eshop"><img src="https://img.shields.io/node/v/nintendo-switch-eshop.svg?style=flat-square" alt="Node Version"></a><!--
--><a href="https://circleci.com/gh/lmmfranco/nintendo-switch-eshop/tree/master"><img src="https://img.shields.io/circleci/project/github/lmmfranco/nintendo-switch-eshop/master.svg?style=flat-square" alt="Build Status" title="Build Status" /></a>
</p>

<p>
<a href="https://www.npmjs.com/package/nintendo-switch-eshop"><img src="https://img.shields.io/bundlephobia/min/nintendo-switch-eshop.svg?style=popout-square" alt="NPM bundle size (minified)" title="NPM bundle size (minified)" /></a><!--
--><a href="https://www.npmjs.com/package/nintendo-switch-eshop"><img src="https://img.shields.io/bundlephobia/minzip/nintendo-switch-eshop.svg?style=flat-square" alt="NPM bundle size (minified + gzip)" title="NPM bundle size (minified + gzip)" /></a><!--
--><a href="https://www.npmjs.com/package/nintendo-switch-eshop"><img src="https://img.shields.io/npm/v/nintendo-switch-eshop.svg?style=flat-square" alt="NPM Version" title="NPM Version" /></a><!--
--><a href="https://www.npmjs.com/package/nintendo-switch-eshop"><img src="https://img.shields.io/npm/dw/nintendo-switch-eshop.svg?style=flat-square" alt="NPM Weekly Downloads" title="NPM Weekly Downloads" /></a><!--
--><a href="https://www.npmjs.com/package/nintendo-switch-eshop"><img src="https://img.shields.io/npm/dt/nintendo-switch-eshop.svg?style=flat-square" alt="NPM Total Downloads" title="NPM Total Downloads" /></a>
</p>
</div>

---

## Installation

Add the package through your package manager of choice:
```sh
npm install nintendo-switch-eshop
# yarn add nintendo-switch-eshop
```

Require your desired functions:
```js
const { getGamesAmerica, getGamesEurope, getGamesJapan } = require('nintendo-switch-eshop');
// ES6 Style: import { getGamesAmerica, getGamesEurope, getGamesJapan } from 'nintendo-switch-eshop';
// getGamesAmerica is also default exported: import getGamesAmerica from 'nintendo-switch-eshop';
```

For calling functions with the correct parameters and syntax please refer to the documentation below:

* * *

<a name="US_GET_GAMES_OPTIONS"></a>

## US\_GET\_GAMES\_OPTIONS
Options used for getting US gmaes

**Kind**: global variable  
<a name="US_ALGOLIA_ID"></a>

## US\_ALGOLIA\_ID
Algolia ID for getting US games

**Kind**: global variable  
<a name="US_ALGOLIA_KEY"></a>

## US\_ALGOLIA\_KEY
Algolia Key for getting US games

**Kind**: global variable  
<a name="US_GET_GAMES_URL"></a>

## US\_GET\_GAMES\_URL
URL for getting US Games

**Kind**: global variable  
<a name="US_GAME_CHECK_CODE"></a>

## US\_GAME\_CHECK\_CODE
Sample game code for US store

**Kind**: global variable  
<a name="US_GAME_CODE_REGEX"></a>

## US\_GAME\_CODE\_REGEX
Regex for US game codes

**Kind**: global variable  
<a name="US_GAME_LIST_LIMIT"></a>

## US\_GAME\_LIST\_LIMIT
Default limit for getting US games - Defaults to 200

**Kind**: global variable  
<a name="US_PRICE_RANGES"></a>

## US\_PRICE\_RANGES
Price ranges for US games

**Kind**: global variable  
<a name="EU_GET_GAMES_OPTIONS"></a>

## EU\_GET\_GAMES\_OPTIONS
Options used for getting EU gmaes

**Kind**: global variable  
<a name="EU_GET_GAMES_URL"></a>

## EU\_GET\_GAMES\_URL
URL for getting EU Games

**Kind**: global variable  
<a name="EU_GAME_CHECK_CODE"></a>

## EU\_GAME\_CHECK\_CODE
Sample game code for EU store

**Kind**: global variable  
<a name="EU_GAME_CODE_REGEX"></a>

## EU\_GAME\_CODE\_REGEX
Regex for EU game codes

**Kind**: global variable  
<a name="EU_DEFAULT_LOCALE"></a>

## EU\_DEFAULT\_LOCALE
Default locale when getting EU games - defaults to `en`

**Kind**: global variable  
<a name="EU_GAME_LIST_LIMIT"></a>

## EU\_GAME\_LIST\_LIMIT
Default limit used when getting EU games - defaults to `9999`

**Kind**: global variable  
<a name="JP_GET_GAMES_CURRENT"></a>

## JP\_GET\_GAMES\_CURRENT
URL for getting currently released JP Games

**Kind**: global variable  
<a name="JP_GET_GAMES_COMING"></a>

## JP\_GET\_GAMES\_COMING
URL for getting upcoming JP Games

**Kind**: global variable  
<a name="JP_GAME_CHECK_CODE"></a>

## JP\_GAME\_CHECK\_CODE
Sample game code for JP store

**Kind**: global variable  
<a name="JP_GAME_CODE_REGEX"></a>

## JP\_GAME\_CODE\_REGEX
Regex for JP game codes

**Kind**: global variable  
<a name="JP_NSUID_REGEX"></a>

## JP\_NSUID\_REGEX
Regex for JP NSUID

**Kind**: global variable  
<a name="PRICE_GET_URL"></a>

## PRICE\_GET\_URL
URL for getting game prices

**Kind**: global variable  
<a name="PRICE_GET_OPTIONS"></a>

## PRICE\_GET\_OPTIONS
Options for getting Price data

**Kind**: global variable  
<a name="PRICE_LIST_LIMIT"></a>

## PRICE\_LIST\_LIMIT
Default limit used when getting price data - defaults to `50`

**Kind**: global variable  
<a name="EshopError"></a>

## EshopError
Class representing an error in the nintendo-switch-eshop library

**Kind**: global variable  
<a name="Region"></a>

## Region : <code>enum</code>
Predefined options for the unit system

**Kind**: global enum  
**Properties**

| Name | Type |
| --- | --- |
| 1 | <code>Region.AMERICAS</code> | 
| 2 | <code>Region.EUROPE</code> | 
| 3 | <code>Region.ASIA</code> | 

<a name="getGamesAmerica"></a>

## getGamesAmerica([options], [offset], [games]) ⇒ <code>Promise&lt;Array&lt;GameUS&gt;&gt;</code>
Fetches all games on american eshops

Paginates every 200 games, _(maximum item count per request)_

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;GameUS&gt;&gt;</code> - Promise containing all the games  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>USRequestOptions</code> | (Optional) Options for the request |
| [offset] | <code>number</code> | (Optional) Offset to start searching at |
| [games] | <code>Array&lt;string&gt;</code> | (Optional) Array of games to filter by |

<a name="getGamesJapan"></a>

## getGamesJapan() ⇒ <code>Promise&lt;Array&lt;GameJP&gt;&gt;</code>
Fetches all games on japanese eShops

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;GameJP&gt;&gt;</code> - Promise containing all the games  
<a name="getGamesEurope"></a>

## getGamesEurope([options]) ⇒ <code>Promise&lt;Array&lt;GameUS&gt;&gt;</code>
Fetches all games on european eShops

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;GameUS&gt;&gt;</code> - Promise containing all the games  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>EURequestOptions</code> | (Optional) Options for the request |

<a name="getPrices"></a>

## getPrices(country, gameIds, [offset], [prices]) ⇒ <code>Promise&lt;PriceResponse&gt;</code>
Get pricing information for the requested games. Paginates every 50 games.

**Kind**: global function  
**Returns**: <code>Promise&lt;PriceResponse&gt;</code> - A promise containing the pricing information.  

| Param | Type | Description |
| --- | --- | --- |
| country | <code>string</code> | A two digit country code. (ISO 3166-1 alpha-2 country code) |
| gameIds | <code>Array&lt;string&gt;</code> \| <code>string</code> | One or more NSUID of the corresponding games. |
| [offset] | <code>number</code> | (Optional) The offset to start at |
| [prices] | <code>Array&lt;TitleData&gt;</code> | (Optional) An array of [TitleData](TitleData) |

<a name="getShopsByCountryCodes"></a>

## getShopsByCountryCodes(countryCodes, gameCode, region) ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code>
Gets all active eShops given a list of countries.

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;EShop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  

| Param | Type | Description |
| --- | --- | --- |
| countryCodes | <code>Array&lt;string&gt;</code> | A list of 2 digit country codes for every country eShop to lookup. (ISO 3166-1 alpha-2 country codes) |
| gameCode | <code>string</code> | A 14 digits game NSUID from the desired region. |
| region | [<code>Region</code>](#Region) | A region id that will be appended in the final shop object for filtering purposes. |

<a name="getShopsAmerica"></a>

## getShopsAmerica() ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code>
Gets all active eShops on American countries.
This method will launch several requests at nintendo web services, so don't abuse it.

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;EShop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getShopsEurope"></a>

## getShopsEurope() ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code>
Gets all active eShops on European countries.
This method will launch several requests at nintendo web services, so don't abuse it.

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;EShop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getShopsAsia"></a>

## getShopsAsia() ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code>
Gets all active eShops on Asian countries
This method will launch several requests at nintendo web services, so don't abuse it.

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;EShop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getActiveShops"></a>

## getActiveShops() ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code>
Gets all active eShops.
This method will launch several requests at nintendo web services, so don't abuse it.

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;EShop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="parseGameCode"></a>

## parseGameCode(game, region) ⇒ <code>string</code> \| <code>null</code>
Parses the game code to extract the cross-region protion.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The 4-digit resulting game code  

| Param | Type | Description |
| --- | --- | --- |
| game | <code>GameUS</code> \| <code>GameEU</code> \| <code>GameJP</code> | The game object returned from one of the other methods. |
| region | [<code>Region</code>](#Region) | Region code |

<a name="parseNSUID"></a>

## parseNSUID(game, region) ⇒ <code>string</code> \| <code>null</code>
Extracts NSUID information from the game object.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The 14-digits NSUID  

| Param | Type | Description |
| --- | --- | --- |
| game | <code>GameUS</code> \| <code>GameEU</code> \| <code>GameJP</code> | The game object returned from one of the other methods. |
| region | [<code>Region</code>](#Region) | Region code |

* * *

This is the documentation for nintendo-switch-eshop. Documentation is generated by [JSDoc](https://github.com/jsdoc3/jsdoc) and [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).

Copyright © `2017` `lmmfranco` [lmmfranco@gmail.com](mailto:lmmfranco@gmail.com)