## About
**nitendo-switch-eshop** is a npm lib module written to extract Nintendo Switch's eShop game and pricing information.

## Installation
To install it just type the following at your command line
```shell
npm install --save nitendo-switch-eshop
```
And require it in your node module as follows:
```javascript
const SwitchEshop = require('nitendo-switch-eshop');
```


## Functions

<dl>
<dt><a href="#getGamesAmerica">getGamesAmerica()</a> ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code></dt>
<dd><p>Fetches all games on american eshops. Paginates every 200 games.</p>
</dd>
<dt><a href="#getGamesJapan">getGamesJapan()</a> ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code></dt>
<dd><p>Fetches all games on japanese eshop. Paginates every 16 games.</p>
</dd>
<dt><a href="#getGamesEurope">getGamesEurope()</a> ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code></dt>
<dd><p>Fetches all games on european eshop. Paginates every 9999 games.</p>
</dd>
<dt><a href="#getShopsByCountryCodes">getShopsByCountryCodes(countryCodes, gamecode, region)</a> ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code></dt>
<dd><p>Gets all active eshops given a list of countries.</p>
</dd>
<dt><a href="#getShopsAmerica">getShopsAmerica()</a> ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code></dt>
<dd><p>Gets all active eshops on american countries.
This method will launch several requests at nintendo web services, so don&#39;t abuse it.</p>
</dd>
<dt><a href="#getShopsEurope">getShopsEurope()</a> ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code></dt>
<dd><p>Gets all active eshops on european countries.
Please note that South Africa and Oceania countries are included.
This method will launch several requests at nintendo web services, so don&#39;t abuse it.</p>
</dd>
<dt><a href="#getShopsAsia">getShopsAsia()</a> ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code></dt>
<dd><p>Gets all active eshops on asian countries.
This method will launch several requests at nintendo web services, so don&#39;t abuse it.</p>
</dd>
<dt><a href="#getActiveShops">getActiveShops()</a> ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code></dt>
<dd><p>Gets all active eshops.
This method will launch several requests at nintendo web services, so don&#39;t abuse it.</p>
</dd>
<dt><a href="#getPrices">getPrices(country, gameIds)</a> ⇒ <code>Promise&lt;any&gt;</code></dt>
<dd><p>Get pricing information for the requested games. Paginates every 50 games.</p>
</dd>
<dt><a href="#parseGameCode">parseGameCode(game, region)</a> ⇒ <code>string</code></dt>
<dd><p>Parses the game code to extract the cross-region protion.</p>
</dd>
<dt><a href="#parseNSUID">parseNSUID(game, region)</a> ⇒ <code>string</code></dt>
<dd><p>Extracts NSUID information from the game object.</p>
</dd>
</dl>

<a name="Region"></a>

## Region : <code>enum</code>
Region code constant.

**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| AMERICAS | <code>number</code> | <code>1</code> | 
| EUROPE | <code>number</code> | <code>2</code> | 
| ASIA | <code>number</code> | <code>3</code> | 

<a name="getGamesAmerica"></a>

## getGamesAmerica() ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code>
Fetches all games on american eshops. Paginates every 200 games.

**Returns**: <code>Promise&lt;Array&lt;Object&gt;&gt;</code> - Promise containing all the games.  
<a name="getGamesJapan"></a>

## getGamesJapan() ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code>
Fetches all games on japanese eshop. Paginates every 16 games.

**Returns**: <code>Promise&lt;Array&lt;Object&gt;&gt;</code> - Promise containing all the games.  
<a name="getGamesEurope"></a>

## getGamesEurope() ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code>
Fetches all games on european eshop. Paginates every 9999 games.

**Returns**: <code>Promise&lt;Array&lt;Object&gt;&gt;</code> - Promise containing all the games.  
<a name="getShopsByCountryCodes"></a>

## getShopsByCountryCodes(countryCodes, gamecode, region) ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code>
Gets all active eshops given a list of countries.

**Returns**: <code>Promise&lt;Array&lt;Object&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  

| Param | Type | Description |
| --- | --- | --- |
| countryCodes | <code>Array&lt;string&gt;</code> | A list of 2 digit country codes for every country eshop to lookup. (ISO 3166-1 alpha-2 country codes) |
| gamecode | <code>string</code> | A 14 digits game code from the desired region. |
| region | <code>any</code> | A region id that will be appendend in the final shop object for filtering purposes. |

<a name="getShopsAmerica"></a>

## getShopsAmerica() ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code>
Gets all active eshops on american countries.
This method will launch several requests at nintendo web services, so don't abuse it.

**Returns**: <code>Promise&lt;Array&lt;Object&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getShopsEurope"></a>

## getShopsEurope() ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code>
Gets all active eshops on european countries.
Please note that South Africa and Oceania countries are included.
This method will launch several requests at nintendo web services, so don't abuse it.

**Returns**: <code>Promise&lt;Array&lt;Object&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getShopsAsia"></a>

## getShopsAsia() ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code>
Gets all active eshops on asian countries.
This method will launch several requests at nintendo web services, so don't abuse it.

**Returns**: <code>Promise&lt;Array&lt;Object&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getActiveShops"></a>

## getActiveShops() ⇒ <code>Promise&lt;Array&lt;Object&gt;&gt;</code>
Gets all active eshops.
This method will launch several requests at nintendo web services, so don't abuse it.

**Returns**: <code>Promise&lt;Array&lt;Object&gt;&gt;</code> - A list of shop objects with country code, name and default currency.  
<a name="getPrices"></a>

## getPrices(country, gameIds) ⇒ <code>Promise&lt;any&gt;</code>
Get pricing information for the requested games. Paginates every 50 games.

**Returns**: <code>Promise&lt;any&gt;</code> - A promise containing the pricing information.  

| Param | Type | Description |
| --- | --- | --- |
| country | <code>string</code> | A two digit country code. (ISO 3166-1 alpha-2 country code) |
| gameIds | <code>Array&lt;string&gt;</code> \| <code>string</code> | One or more NSUID of the corresponding games. |

<a name="parseGameCode"></a>

## parseGameCode(game, region) ⇒ <code>string</code>
Parses the game code to extract the cross-region protion.

**Returns**: <code>string</code> - The 4-digit resulting game code.  

| Param | Type | Description |
| --- | --- | --- |
| game | <code>Object</code> | The game object returned from one of the other methods. |
| region | <code>number</code> | Region code. (use the Region constant) |

<a name="parseNSUID"></a>

## parseNSUID(game, region) ⇒ <code>string</code>
Extracts NSUID information from the game object.

**Returns**: <code>string</code> - The 14-digit NSUID.  

| Param | Type | Description |
| --- | --- | --- |
| game | <code>Object</code> | The game object returned from one of the other methods. |
| region | <code>number</code> | Region code. (use the Region constant) |

