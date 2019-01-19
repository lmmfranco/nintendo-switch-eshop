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
// TypeScript / Babel: import { getGamesAmerica, getGamesEurope, getGamesJapan } from 'nintendo-switch-eshop';
```

For calling functions with the correct parameters and syntax please refer to the documentation below:

* * *

## Classes

<dl>
<dt><a href="#EshopError">EshopError</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#getGamesAmerica">getGamesAmerica([options], [offset], [games])</a> ⇒ <code>Promise&lt;Array&lt;GameUS&gt;&gt;</code></dt>
<dd><p>Fetches all games on american eshops</p>
<p>Paginates every 200 games, <em>(maximum item count per request)</em></p></dd>
<dt><a href="#getGamesJapan">getGamesJapan()</a> ⇒ <code>Promise&lt;Array&lt;GameJP&gt;&gt;</code></dt>
<dd><p>Fetches all games on japanese eShops</p></dd>
<dt><a href="#getGamesEurope">getGamesEurope([options])</a> ⇒ <code>Promise&lt;Array&lt;GameUS&gt;&gt;</code></dt>
<dd><p>Fetches all games on european eShops</p></dd>
<dt><a href="#getPrices">getPrices(country, gameIds, [offset], [prices])</a> ⇒ <code><a href="#PriceResponse">Promise&lt;PriceResponse&gt;</a></code></dt>
<dd><p>Get pricing information for the requested games. Paginates every 50 games.</p></dd>
<dt><a href="#getShopsByCountryCodes">getShopsByCountryCodes(countryCodes, gameCode, region)</a> ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code></dt>
<dd><p>Gets all active eShops given a list of countries.</p></dd>
<dt><a href="#getShopsAmerica">getShopsAmerica()</a> ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code></dt>
<dd><p>Gets all active eShops on American countries.
This method will launch several requests at nintendo web services, so don&#39;t abuse it.</p></dd>
<dt><a href="#getShopsEurope">getShopsEurope()</a> ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code></dt>
<dd><p>Gets all active eShops on European countries.
This method will launch several requests at nintendo web services, so don&#39;t abuse it.</p></dd>
<dt><a href="#getShopsAsia">getShopsAsia()</a> ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code></dt>
<dd><p>Gets all active eShops on Asian countries
This method will launch several requests at nintendo web services, so don&#39;t abuse it.</p></dd>
<dt><a href="#getActiveShops">getActiveShops()</a> ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code></dt>
<dd><p>Gets all active eShops.
This method will launch several requests at nintendo web services, so don&#39;t abuse it.</p></dd>
<dt><a href="#parseGameCode">parseGameCode(game, region)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Parses the game code to extract the cross-region protion.</p></dd>
<dt><a href="#parseNSUID">parseNSUID(game, region)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Extracts NSUID information from the game object.</p></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Category">Category</a> : <code><a href="#Category">Category</a></code></dt>
<dd></dd>
<dt><a href="#GameEU">GameEU</a> : <code><a href="#GameEU">GameEU</a></code></dt>
<dd></dd>
<dt><a href="#GameUS">GameUS</a> : <code><a href="#GameUS">GameUS</a></code></dt>
<dd></dd>
<dt><a href="#GameJP">GameJP</a> : <code><a href="#GameJP">GameJP</a></code></dt>
<dd></dd>
<dt><a href="#EShop">EShop</a> : <code><a href="#EShop">EShop</a></code></dt>
<dd></dd>
<dt><a href="#PriceResponse">PriceResponse</a> : <code><a href="#PriceResponse">PriceResponse</a></code></dt>
<dd></dd>
<dt><a href="#TitleData">TitleData</a> : <code><a href="#TitleData">TitleData</a></code></dt>
<dd></dd>
<dt><a href="#PriceError">PriceError</a> : <code><a href="#PriceError">PriceError</a></code></dt>
<dd></dd>
<dt><a href="#PriceData">PriceData</a> : <code><a href="#PriceData">PriceData</a></code></dt>
<dd></dd>
<dt><a href="#RequestOptions">RequestOptions</a> : <code><a href="#RequestOptions">RequestOptions</a></code></dt>
<dd></dd>
<dt><a href="#USRequestOptions">USRequestOptions</a> : <code><a href="#USRequestOptions">USRequestOptions</a></code></dt>
<dd></dd>
<dt><a href="#EURequestOptions">EURequestOptions</a> : <code><a href="#EURequestOptions">EURequestOptions</a></code></dt>
<dd></dd>
</dl>

<a name="EshopError"></a>

## EshopError
**Kind**: global class  
<a name="new_EshopError_new"></a>

### new EshopError(message)
<p>Create an EshopError</p>


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | <p>The message the error should show</p> |

<a name="Region"></a>

## Region : <code>enum</code>
<p>Predefined options for the unit system</p>

**Kind**: global enum  
**Properties**

| Name | Type |
| --- | --- |
| 1 | <code>Region.AMERICAS</code> | 
| 2 | <code>Region.EUROPE</code> | 
| 3 | <code>Region.ASIA</code> | 

<a name="getGamesAmerica"></a>

## getGamesAmerica([options], [offset], [games]) ⇒ <code>Promise&lt;Array&lt;GameUS&gt;&gt;</code>
<p>Fetches all games on american eshops</p>
<p>Paginates every 200 games, <em>(maximum item count per request)</em></p>

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;GameUS&gt;&gt;</code> - Promise containing all the games  

| Param | Type | Description |
| --- | --- | --- |
| [options] | [<code>USRequestOptions</code>](#USRequestOptions) | <p>(Optional) Options for the request</p> |
| [offset] | <code>number</code> | <p>(Optional) Offset to start searching at</p> |
| [games] | <code>Array&lt;string&gt;</code> | <p>(Optional) Array of games to filter by</p> |

<a name="getGamesJapan"></a>

## getGamesJapan() ⇒ <code>Promise&lt;Array&lt;GameJP&gt;&gt;</code>
<p>Fetches all games on japanese eShops</p>

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;GameJP&gt;&gt;</code> - Promise containing all the games  
<a name="getGamesEurope"></a>

## getGamesEurope([options]) ⇒ <code>Promise&lt;Array&lt;GameUS&gt;&gt;</code>
<p>Fetches all games on european eShops</p>

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;GameUS&gt;&gt;</code> - Promise containing all the games  

| Param | Type | Description |
| --- | --- | --- |
| [options] | [<code>EURequestOptions</code>](#EURequestOptions) | <p>(Optional) Options for the request</p> |

<a name="getPrices"></a>

## getPrices(country, gameIds, [offset], [prices]) ⇒ [<code>Promise&lt;PriceResponse&gt;</code>](#PriceResponse)
<p>Get pricing information for the requested games. Paginates every 50 games.</p>

**Kind**: global function  
**Returns**: [<code>Promise&lt;PriceResponse&gt;</code>](#PriceResponse) - A promise containing the pricing information.  

| Param | Type | Description |
| --- | --- | --- |
| country | <code>string</code> | <p>A two digit country code. (ISO 3166-1 alpha-2 country code)</p> |
| gameIds | <code>Array&lt;string&gt;</code> \| <code>string</code> | <p>One or more NSUID of the corresponding games.</p> |
| [offset] | <code>number</code> | <p>(Optional) The offset to start at</p> |
| [prices] | [<code>Array&lt;TitleData&gt;</code>](#TitleData) | <p>(Optional) An array of [TitleData](#TitleData)</p> |

<a name="getShopsByCountryCodes"></a>

## getShopsByCountryCodes(countryCodes, gameCode, region) ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code>
<p>Gets all active eShops given a list of countries.</p>

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;EShop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  

| Param | Type | Description |
| --- | --- | --- |
| countryCodes | <code>Array&lt;string&gt;</code> | <p>A list of 2 digit country codes for every country eShop to lookup. (ISO 3166-1 alpha-2 country codes)</p> |
| gameCode | <code>string</code> | <p>A 14 digits game NSUID from the desired region.</p> |
| region | [<code>Region</code>](#Region) | <p>A region id that will be appended in the final shop object for filtering purposes.</p> |

<a name="getShopsAmerica"></a>

## getShopsAmerica() ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code>
<p>Gets all active eShops on American countries.
This method will launch several requests at nintendo web services, so don't abuse it.</p>

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;EShop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getShopsEurope"></a>

## getShopsEurope() ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code>
<p>Gets all active eShops on European countries.
This method will launch several requests at nintendo web services, so don't abuse it.</p>

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;EShop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getShopsAsia"></a>

## getShopsAsia() ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code>
<p>Gets all active eShops on Asian countries
This method will launch several requests at nintendo web services, so don't abuse it.</p>

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;EShop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getActiveShops"></a>

## getActiveShops() ⇒ <code>Promise&lt;Array&lt;EShop&gt;&gt;</code>
<p>Gets all active eShops.
This method will launch several requests at nintendo web services, so don't abuse it.</p>

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;EShop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="parseGameCode"></a>

## parseGameCode(game, region) ⇒ <code>string</code> \| <code>null</code>
<p>Parses the game code to extract the cross-region protion.</p>

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The 4-digit resulting game code  

| Param | Type | Description |
| --- | --- | --- |
| game | [<code>GameUS</code>](#GameUS) \| [<code>GameEU</code>](#GameEU) \| [<code>GameJP</code>](#GameJP) | <p>The game object returned from one of the other methods.</p> |
| region | [<code>Region</code>](#Region) | <p>Region code</p> |

<a name="parseNSUID"></a>

## parseNSUID(game, region) ⇒ <code>string</code> \| <code>null</code>
<p>Extracts NSUID information from the game object.</p>

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The 14-digits NSUID  

| Param | Type | Description |
| --- | --- | --- |
| game | [<code>GameUS</code>](#GameUS) \| [<code>GameEU</code>](#GameEU) \| [<code>GameJP</code>](#GameJP) | <p>The game object returned from one of the other methods.</p> |
| region | [<code>Region</code>](#Region) | <p>Region code</p> |

<a name="Category"></a>

## Category : [<code>Category</code>](#Category)
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| category | <code>Array&lt;string&gt;</code> | 

<a name="GameEU"></a>

## GameEU : [<code>GameEU</code>](#GameEU)
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| age_rating_type | <code>string</code> |  |
| age_rating_value | <code>string</code> |  |
| copyright_s | <code>string</code> |  |
| developer | <code>string</code> |  |
| excerpt | <code>string</code> |  |
| fs_id | <code>string</code> |  |
| game_series_t | <code>string</code> |  |
| gift_finder_carousel_image_url_s | <code>string</code> |  |
| gift_finder_description_s | <code>string</code> |  |
| gift_finder_detail_page_image_url_s | <code>string</code> |  |
| gift_finder_detail_page_store_link_s | <code>string</code> |  |
| gift_finder_wishlist_image_url_s | <code>string</code> |  |
| image_url | <code>string</code> |  |
| image_url_sq_s | <code>string</code> |  |
| image_url_tm_s | <code>string</code> |  |
| originally_for_t | <code>string</code> |  |
| pretty_agerating_s | <code>string</code> |  |
| pretty_date_s | <code>string</code> |  |
| publisher | <code>string</code> |  |
| sorting_title | <code>string</code> |  |
| title | <code>string</code> |  |
| type | <code>string</code> |  |
| url | <code>string</code> |  |
| add_on_content_b | <code>boolean</code> |  |
| club_nintendo | <code>boolean</code> |  |
| near_field_comm_b | <code>boolean</code> |  |
| physical_version_b | <code>boolean</code> |  |
| play_mode_handheld_mode_b | <code>boolean</code> |  |
| play_mode_tabletop_mode_b | <code>boolean</code> |  |
| play_mode_tv_mode_b | <code>boolean</code> |  |
| change_date | <code>Date</code> |  |
| date_from | <code>Date</code> |  |
| priority | <code>Date</code> |  |
| age_rating_sorting_i | <code>number</code> |  |
| players_from | <code>number</code> |  |
| players_to | <code>number</code> |  |
| compatible_controller | <code>Array&lt;string&gt;</code> |  |
| game_categories_txt | <code>Array&lt;string&gt;</code> |  |
| game_category | <code>Array&lt;string&gt;</code> |  |
| language_availability | <code>Array&lt;string&gt;</code> |  |
| nsuid_txt | <code>Array&lt;string&gt;</code> | <p>Array containing the 14-digit game unique identifier</p> |
| playable_on_txt | <code>Array&lt;string&gt;</code> |  |
| product_code_txt | <code>Array&lt;string&gt;</code> | <p>Array containing the product code</p> |
| system_names_txt | <code>Array&lt;string&gt;</code> |  |
| system_type | <code>Array&lt;string&gt;</code> |  |
| title_extras_txt | <code>Array&lt;string&gt;</code> |  |

<a name="GameUS"></a>

## GameUS : [<code>GameUS</code>](#GameUS)
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| game_code | <code>string</code> | <p>Product code. Can be parsed for a region wide code.</p> |
| buyonline | <code>boolean</code> |  |
| front_box_art | <code>string</code> |  |
| eshop_price | <code>number</code> | <p>USA eShop price (in dollars)</p> |
| nsuid | <code>string</code> | <p>14-digit game unique identifier</p> |
| video_link | <code>string</code> |  |
| number_of_players | <code>string</code> |  |
| ca_price | <code>number</code> | <p>Canada eShop price (in canadian dollars)</p> |
| id | <code>string</code> |  |
| title | <code>string</code> |  |
| system | <code>string</code> | <p>Gaming platform</p> |
| free_to_start | <code>boolean</code> |  |
| digitaldownload | <code>boolean</code> |  |
| release_date | <code>string</code> |  |
| categories | [<code>Category</code>](#Category) |  |
| slug | <code>string</code> | <p>Game URL name</p> |
| buyitnow | <code>boolean</code> |  |

<a name="GameJP"></a>

## GameJP : [<code>GameJP</code>](#GameJP)
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| LinkURL | <code>Array&lt;string&gt;</code> | <p>A single item array containing the game url</p> |
| LinkTarget | <code>Array&lt;string&gt;</code> |  |
| ScreenshotImgURL | <code>Array&lt;string&gt;</code> | <p>A single item array containing the game thumbnail url</p> |
| ScreenshotImgURLComing | <code>Array&lt;string&gt;</code> |  |
| TitleName | <code>Array&lt;string&gt;</code> | <p>A single item array containing the game title</p> |
| TitleNameRuby | <code>Array&lt;string&gt;</code> |  |
| SoftType | <code>Array&lt;string&gt;</code> |  |
| SalesDate | <code>Array&lt;string&gt;</code> |  |
| SalesDateStr | <code>Array&lt;string&gt;</code> |  |
| MakerName | <code>Array&lt;string&gt;</code> |  |
| Hard | <code>Array&lt;string&gt;</code> |  |
| Memo | <code>Array&lt;string&gt;</code> |  |

<a name="EShop"></a>

## EShop : [<code>EShop</code>](#EShop)
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| code | <code>string</code> | 
| country | <code>string</code> | 
| currency | <code>string</code> | 
| region | [<code>Region</code>](#Region) | 

<a name="PriceResponse"></a>

## PriceResponse : [<code>PriceResponse</code>](#PriceResponse)
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| error | [<code>PriceError</code>](#PriceError) | 
| personalized | <code>boolean</code> | 
| country | <code>string</code> | 
| prices | [<code>Array&lt;TitleData&gt;</code>](#TitleData) | 

<a name="TitleData"></a>

## TitleData : [<code>TitleData</code>](#TitleData)
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| title_id | <code>number</code> | 
| sales_status | <code>string</code> | 
| regular_price | [<code>PriceData</code>](#PriceData) | 
| [discount_price] | [<code>PriceData</code>](#PriceData) | 

<a name="PriceError"></a>

## PriceError : [<code>PriceError</code>](#PriceError)
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| code | <code>string</code> | 
| message | <code>string</code> | 

<a name="PriceData"></a>

## PriceData : [<code>PriceData</code>](#PriceData)
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| amount | <code>string</code> | 
| currency | <code>string</code> | 
| raw_value | <code>string</code> | 
| [start_datetime] | <code>string</code> | 
| [end_datetime] | <code>string</code> | 

<a name="RequestOptions"></a>

## RequestOptions : [<code>RequestOptions</code>](#RequestOptions)
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| limit | <code>number</code> | <p>Game count limit (Can only be lower than default page size)</p> |

<a name="USRequestOptions"></a>

## USRequestOptions : [<code>USRequestOptions</code>](#USRequestOptions)
**Kind**: global typedef  
**Extends**: [<code>RequestOptions</code>](#RequestOptions)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| shop | <code>&#x27;retail&#x27;</code> \| <code>&#x27;ncom&#x27;</code> \| <code>&#x27;all&#x27;</code> | <p>Either <code>'retail' / 'ncom' / 'all'</code>. Defaults to <code>'ncom'</code>.</p> |

<a name="EURequestOptions"></a>

## EURequestOptions : [<code>EURequestOptions</code>](#EURequestOptions)
**Kind**: global typedef  
**Extends**: [<code>RequestOptions</code>](#RequestOptions)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| locale | <code>string</code> | <p>Game information locale. (EU Only)</p> |


* * *

This is the documentation for nintendo-switch-eshop. Documentation is generated by [JSDoc](https://github.com/jsdoc3/jsdoc) and [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).

Copyright © `2017` `lmmfranco` [lmmfranco@gmail.com](mailto:lmmfranco@gmail.com)