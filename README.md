<p>
    <a href="https://www.npmjs.com/package/nintendo-switch-eshop"><img src="https://img.shields.io/npm/v/nintendo-switch-eshop.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/nintendo-switch-eshop"><img src="https://img.shields.io/npm/dt/nintendo-switch-eshop.svg?maxAge=3600" alt="NPM downloads" /></a>
</p>

## About
**nintendo-switch-eshop** is a npm lib module written to extract Nintendo Switch's eShop game and pricing information.

## Installation
To install it just type the following at your command line
```shell
npm install --save nintendo-switch-eshop
```
And require it in your node module as follows:
```javascript
const SwitchEshop = require('nintendo-switch-eshop');
```

## Functions

<dl>
<dt><a href="#getGamesAmerica">getGamesAmerica([options])</a> ⇒ <code>Promise&lt;Array&lt;GameUS&gt;&gt;</code></dt>
<dd><p>Fetches all games on american eshops. Paginates every 200 games.</p>
</dd>
<dt><a href="#getGamesJapan">getGamesJapan()</a> ⇒ <code>Promise&lt;Array&lt;GameJP&gt;&gt;</code></dt>
<dd><p>Fetches all games on japanese eshop.</p>
</dd>
<dt><a href="#getGamesEurope">getGamesEurope([options])</a> ⇒ <code>Promise&lt;Array&lt;GameEU&gt;&gt;</code></dt>
<dd><p>Fetches all games on european eshop. Paginates every 9999 games.</p>
</dd>
<dt><a href="#getShopsByCountryCodes">getShopsByCountryCodes(countryCodes, gamecode, region)</a> ⇒ <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code></dt>
<dd><p>Gets all active eshops given a list of countries.</p>
</dd>
<dt><a href="#getShopsAmerica">getShopsAmerica()</a> ⇒ <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code></dt>
<dd><p>Gets all active eshops on american countries.
This method will launch several requests at nintendo web services, so don&#39;t abuse it.</p>
</dd>
<dt><a href="#getShopsEurope">getShopsEurope()</a> ⇒ <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code></dt>
<dd><p>Gets all active eshops on european countries.
Please note that South Africa and Oceania countries are included.
This method will launch several requests at nintendo web services, so don&#39;t abuse it.</p>
</dd>
<dt><a href="#getShopsAsia">getShopsAsia()</a> ⇒ <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code></dt>
<dd><p>Gets all active eshops on asian countries.
This method will launch several requests at nintendo web services, so don&#39;t abuse it.</p>
</dd>
<dt><a href="#getActiveShops">getActiveShops()</a> ⇒ <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code></dt>
<dd><p>Gets all active eshops.
This method will launch several requests at nintendo web services, so don&#39;t abuse it.</p>
</dd>
<dt><a href="#getPrices">getPrices(country, gameIds)</a> ⇒ <code><a href="#PriceResponse">Promise&lt;PriceResponse&gt;</a></code></dt>
<dd><p>Get pricing information for the requested games. Paginates every 50 games.</p>
</dd>
<dt><a href="#parseGameCode">parseGameCode(game, region)</a> ⇒ <code>string</code></dt>
<dd><p>Parses the game code to extract the cross-region protion.</p>
</dd>
<dt><a href="#parseNSUID">parseNSUID(game, region)</a> ⇒ <code>string</code></dt>
<dd><p>Extracts NSUID information from the game object.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Categories">Categories</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#GameUS">GameUS</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#GameEU">GameEU</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#GameJP">GameJP</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#EShop">EShop</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#PriceResponse">PriceResponse</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TitleData">TitleData</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#PriceError">PriceError</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#PriceData">PriceData</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#RequestOptions">RequestOptions</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="Region"></a>

## Region : <code>enum</code>
Region code constant.

**Kind**: global enum  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| AMERICAS | <code>number</code> | <code>1</code> | 
| EUROPE | <code>number</code> | <code>2</code> | 
| ASIA | <code>number</code> | <code>3</code> | 

<a name="getGamesAmerica"></a>

## getGamesAmerica([options]) ⇒ <code>Promise.&lt;Array.&lt;GameUS&gt;&gt;</code>
Fetches all games on american eshops. Paginates every 200 games.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;GameUS&gt;&gt;</code> - Promise containing all the games.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | [<code>RequestOptions</code>](#RequestOptions) | Request options (Optional) |

<a name="getGamesJapan"></a>

## getGamesJapan() ⇒ <code>Promise.&lt;Array.&lt;GameJP&gt;&gt;</code>
Fetches all games on japanese eshop.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;GameJP&gt;&gt;</code> - Promise containing all the games.  
<a name="getGamesEurope"></a>

## getGamesEurope([options]) ⇒ <code>Promise.&lt;Array.&lt;GameEU&gt;&gt;</code>
Fetches all games on european eshop. Paginates every 9999 games.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;GameEU&gt;&gt;</code> - Promise containing all the games.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | [<code>RequestOptions</code>](#RequestOptions) | Request options (Optional) |

<a name="getShopsByCountryCodes"></a>

## getShopsByCountryCodes(countryCodes, gamecode, region) ⇒ <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code>
Gets all active eshops given a list of countries.

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  

| Param | Type | Description |
| --- | --- | --- |
| countryCodes | <code>Array&lt;string&gt;</code> | A list of 2 digit country codes for every country eshop to lookup. (ISO 3166-1 alpha-2 country codes) |
| gamecode | <code>string</code> | A 14 digits game NSUID from the desired region. |
| region | <code>number</code> | A region id that will be appendend in the final shop object for filtering purposes. |

<a name="getShopsAmerica"></a>

## getShopsAmerica() ⇒ <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code>
Gets all active eshops on american countries.
This method will launch several requests at nintendo web services, so don't abuse it.

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getShopsEurope"></a>

## getShopsEurope() ⇒ <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code>
Gets all active eshops on european countries.
Please note that South Africa and Oceania countries are included.
This method will launch several requests at nintendo web services, so don't abuse it.

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getShopsAsia"></a>

## getShopsAsia() ⇒ <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code>
Gets all active eshops on asian countries.
This method will launch several requests at nintendo web services, so don't abuse it.

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getActiveShops"></a>

## getActiveShops() ⇒ <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code>
Gets all active eshops.
This method will launch several requests at nintendo web services, so don't abuse it.

**Kind**: global function  
**Returns**: <code>Promise&lt;Array&lt;Eshop&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getPrices"></a>

## getPrices(country, gameIds) ⇒ [<code>Promise&lt;PriceResponse&gt;</code>](#PriceResponse)
Get pricing information for the requested games. Paginates every 50 games.

**Kind**: global function  
**Returns**: [<code>Promise&lt;PriceResponse&gt;</code>](#PriceResponse) - A promise containing the pricing information.  

| Param | Type | Description |
| --- | --- | --- |
| country | <code>string</code> | A two digit country code. (ISO 3166-1 alpha-2 country code) |
| gameIds | <code>Array&lt;string&gt;</code> \| <code>string</code> | One or more NSUID of the corresponding games. |

<a name="parseGameCode"></a>

## parseGameCode(game, region) ⇒ <code>string</code>
Parses the game code to extract the cross-region protion.

**Kind**: global function  
**Returns**: <code>string</code> - The 4-digit resulting game code.  

| Param | Type | Description |
| --- | --- | --- |
| game | [<code>GameUS</code>](#GameUS) \| [<code>GameEU</code>](#GameEU) \| [<code>GameJP</code>](#GameJP) | The game object returned from one of the other methods. |
| region | <code>number</code> | Region code. (use the Region constant) |

<a name="parseNSUID"></a>

## parseNSUID(game, region) ⇒ <code>string</code>
Extracts NSUID information from the game object.

**Kind**: global function  
**Returns**: <code>string</code> - The 14-digit NSUID.  

| Param | Type | Description |
| --- | --- | --- |
| game | [<code>GameUS</code>](#GameUS) \| [<code>GameEU</code>](#GameEU) \| [<code>GameJP</code>](#GameJP) | The game object returned from one of the other methods. |
| region | <code>number</code> | Region code. (use the Region constant) |

<a name="Categories"></a>

## Categories : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| category | <code>Array&lt;string&gt;</code> | 

<a name="GameUS"></a>

## GameUS : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| game_code | <code>string</code> | Product code. Can be parsed for a region wide code. |
| buyonline | <code>boolean</code> |  |
| front_box_art | <code>string</code> |  |
| eshop_price | <code>number</code> | USA eShop price (in dollars) |
| nsuid | <code>string</code> | 14-digit game unique identifier |
| video_link | <code>string</code> |  |
| number_of_players | <code>string</code> |  |
| ca_price | <code>number</code> | Canada eShop price (in canadian dollars) |
| id | <code>string</code> |  |
| title | <code>string</code> |  |
| system | <code>string</code> | Gaming platform |
| free_to_start | <code>boolean</code> |  |
| digitaldownload | <code>boolean</code> |  |
| release_date | <code>string</code> |  |
| categories | [<code>Categories</code>](#Categories) |  |
| slug | <code>string</code> | Game URL name |
| buyitnow | <code>boolean</code> |  |

<a name="GameEU"></a>

## GameEU : <code>Object</code>
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
| nsuid_txt | <code>Array&lt;string&gt;</code> | Array containing the 14-digit game unique identifier |
| playable_on_txt | <code>Array&lt;string&gt;</code> |  |
| product_code_txt | <code>Array&lt;string&gt;</code> | Array containing the product code |
| system_names_txt | <code>Array&lt;string&gt;</code> |  |
| system_type | <code>Array&lt;string&gt;</code> |  |
| title_extras_txt | <code>Array&lt;string&gt;</code> |  |

<a name="GameJP"></a>

## GameJP : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| LinkURL | <code>Array&lt;string&gt;</code> | A single item array containing the game url |
| LinkTarget | <code>Array&lt;string&gt;</code> |  |
| ScreenshotImgURL | <code>Array&lt;string&gt;</code> | A single item array containing the game thumbnail url |
| ScreenshotImgURLComing | <code>Array&lt;string&gt;</code> |  |
| TitleName | <code>Array&lt;string&gt;</code> | A single item array containing the game title |
| TitleNameRuby | <code>Array&lt;string&gt;</code> |  |
| SoftType | <code>Array&lt;string&gt;</code> |  |
| SalesDate | <code>Array&lt;string&gt;</code> |  |
| SalesDateStr | <code>Array&lt;string&gt;</code> |  |
| MakerName | <code>Array&lt;string&gt;</code> |  |
| Hard | <code>Array&lt;string&gt;</code> |  |
| Memo | <code>Array&lt;string&gt;</code> |  |

<a name="EShop"></a>

## EShop : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| code | <code>string</code> | 
| country | <code>string</code> | 
| currency | <code>string</code> | 
| region | [<code>Region</code>](#Region) | 

<a name="PriceResponse"></a>

## PriceResponse : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| error | [<code>PriceError</code>](#PriceError) | 
| personalized | <code>boolean</code> | 
| country | <code>string</code> | 
| prices | [<code>Array&lt;TitleData&gt;</code>](#TitleData) | 

<a name="TitleData"></a>

## TitleData : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| title_id | <code>number</code> | 
| sales_status | <code>string</code> | 
| regular_price | [<code>Array&lt;PriceData&gt;</code>](#PriceData) | 

<a name="PriceError"></a>

## PriceError : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| code | <code>string</code> | 
| message | <code>string</code> | 

<a name="PriceData"></a>

## PriceData : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| amount | <code>string</code> | 
| currency | <code>string</code> | 
| raw_value | <code>string</code> | 

<a name="RequestOptions"></a>

## RequestOptions : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| locale | <code>string</code> | Game information locale. (EU Only) |
| limit | <code>number</code> | Game count limit |

