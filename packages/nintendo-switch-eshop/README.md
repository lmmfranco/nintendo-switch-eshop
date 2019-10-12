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

Copyright © `2017` `lmmfranco`

## API

<a name="readmemd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd)

# nintendo-switch-eshop

## Index

### Enumerations

* [Region](#enumsregionmd)

### Classes

* [EshopError](#classeseshoperrormd)

### Interfaces

* [AlgoliaResponse](#interfacesalgoliaresponsemd)
* [AlgoliaResults](#interfacesalgoliaresultsmd)
* [Category](#interfacescategorymd)
* [EShop](#interfaceseshopmd)
* [GameEU](#interfacesgameeumd)
* [GameJP](#interfacesgamejpmd)
* [GameUS](#interfacesgameusmd)
* [PriceData](#interfacespricedatamd)
* [PriceError](#interfacespriceerrormd)
* [PriceResponse](#interfacespriceresponsemd)
* [RequestOptions](#interfacesrequestoptionsmd)
* [TitleData](#interfacestitledatamd)

### Type aliases

* [EURequestOptions](#eurequestoptions)
* [USRequestOptions](#usrequestoptions)

### Variables

* [EU_DEFAULT_LOCALE](#const-eu_default_locale)
* [EU_GAME_CHECK_CODE](#const-eu_game_check_code)
* [EU_GAME_CODE_REGEX](#const-eu_game_code_regex)
* [EU_GAME_LIST_LIMIT](#const-eu_game_list_limit)
* [EU_GET_GAMES_URL](#const-eu_get_games_url)
* [JP_GAME_CHECK_CODE](#const-jp_game_check_code)
* [JP_GAME_CODE_REGEX](#const-jp_game_code_regex)
* [JP_GET_GAMES_COMING](#const-jp_get_games_coming)
* [JP_GET_GAMES_CURRENT](#const-jp_get_games_current)
* [JP_NSUID_REGEX](#const-jp_nsuid_regex)
* [PRICE_GET_URL](#const-price_get_url)
* [PRICE_LIST_LIMIT](#const-price_list_limit)
* [US_ALGOLIA_ID](#const-us_algolia_id)
* [US_ALGOLIA_KEY](#const-us_algolia_key)
* [US_GAME_CHECK_CODE](#const-us_game_check_code)
* [US_GAME_CODE_REGEX](#const-us_game_code_regex)
* [US_GAME_LIST_LIMIT](#const-us_game_list_limit)
* [US_GET_GAMES_URL](#const-us_get_games_url)
* [US_PRICE_RANGES](#const-us_price_ranges)

### Functions

* [getActiveShops](#const-getactiveshops)
* [getGamesAmerica](#const-getgamesamerica)
* [getGamesEurope](#const-getgameseurope)
* [getGamesJapan](#const-getgamesjapan)
* [getPrices](#const-getprices)
* [getShopsAmerica](#const-getshopsamerica)
* [getShopsAsia](#const-getshopsasia)
* [getShopsByCountryCodes](#const-getshopsbycountrycodes)
* [getShopsEurope](#const-getshopseurope)
* [parseGameCode](#const-parsegamecode)
* [parseNSUID](#const-parsensuid)

### Object literals

* [EU_GET_GAMES_OPTIONS](#const-eu_get_games_options)
* [PRICE_GET_OPTIONS](#const-price_get_options)
* [US_GET_GAMES_OPTIONS](#const-us_get_games_options)

## Type aliases

###  EURequestOptions

Ƭ **EURequestOptions**: *object & [RequestOptions](#interfacesrequestoptionsmd)*

*Defined in [interfaces.ts:183](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L183)*

___

###  USRequestOptions

Ƭ **USRequestOptions**: *object & [RequestOptions](#interfacesrequestoptionsmd)*

*Defined in [interfaces.ts:175](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L175)*

## Variables

### `Const` EU_DEFAULT_LOCALE

• **EU_DEFAULT_LOCALE**: *"en"* = "en"

*Defined in [constants.ts:53](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L53)*

Default locale when getting EU games - defaults to `en`

___

### `Const` EU_GAME_CHECK_CODE

• **EU_GAME_CHECK_CODE**: *"70010000000184"* = "70010000000184"

*Defined in [constants.ts:47](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L47)*

Sample game code for EU store

___

### `Const` EU_GAME_CODE_REGEX

• **EU_GAME_CODE_REGEX**: *RegExp* =  /HAC\w(\w{4})/

*Defined in [constants.ts:50](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L50)*

Regex for EU game codes

___

### `Const` EU_GAME_LIST_LIMIT

• **EU_GAME_LIST_LIMIT**: *9999* = 9999

*Defined in [constants.ts:56](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L56)*

Default limit used when getting EU games - defaults to `9999`

___

### `Const` EU_GET_GAMES_URL

• **EU_GET_GAMES_URL**: *"http://search.nintendo-europe.com/{locale}/select"* = "http://search.nintendo-europe.com/{locale}/select"

*Defined in [constants.ts:44](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L44)*

URL for getting EU Games

___

### `Const` JP_GAME_CHECK_CODE

• **JP_GAME_CHECK_CODE**: *"70010000000039"* = "70010000000039"

*Defined in [constants.ts:65](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L65)*

Sample game code for JP store

___

### `Const` JP_GAME_CODE_REGEX

• **JP_GAME_CODE_REGEX**: *RegExp* =  /\/HAC(\w{4})/

*Defined in [constants.ts:68](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L68)*

Regex for JP game codes

___

### `Const` JP_GET_GAMES_COMING

• **JP_GET_GAMES_COMING**: *"https://www.nintendo.co.jp/data/software/xml-system/switch-coming.xml"* = "https://www.nintendo.co.jp/data/software/xml-system/switch-coming.xml"

*Defined in [constants.ts:62](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L62)*

URL for getting upcoming JP Games

___

### `Const` JP_GET_GAMES_CURRENT

• **JP_GET_GAMES_CURRENT**: *"https://www.nintendo.co.jp/data/software/xml-system/switch-onsale.xml"* = "https://www.nintendo.co.jp/data/software/xml-system/switch-onsale.xml"

*Defined in [constants.ts:59](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L59)*

URL for getting currently released JP Games

___

### `Const` JP_NSUID_REGEX

• **JP_NSUID_REGEX**: *RegExp* =  /\d{14}/

*Defined in [constants.ts:71](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L71)*

Regex for JP NSUID

___

### `Const` PRICE_GET_URL

• **PRICE_GET_URL**: *"https://api.ec.nintendo.com/v1/price"* = "https://api.ec.nintendo.com/v1/price"

*Defined in [constants.ts:74](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L74)*

URL for getting game prices

___

### `Const` PRICE_LIST_LIMIT

• **PRICE_LIST_LIMIT**: *50* = 50

*Defined in [constants.ts:80](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L80)*

Default limit used when getting price data - defaults to `50`

___

### `Const` US_ALGOLIA_ID

• **US_ALGOLIA_ID**: *"U3B6GR4UA3"* = "U3B6GR4UA3"

*Defined in [constants.ts:7](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L7)*

Algolia ID for getting US games

___

### `Const` US_ALGOLIA_KEY

• **US_ALGOLIA_KEY**: *"9a20c93440cf63cf1a7008d75f7438bf"* = "9a20c93440cf63cf1a7008d75f7438bf"

*Defined in [constants.ts:10](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L10)*

Algolia Key for getting US games

___

### `Const` US_GAME_CHECK_CODE

• **US_GAME_CHECK_CODE**: *"70010000000185"* = "70010000000185"

*Defined in [constants.ts:16](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L16)*

Sample game code for US store

___

### `Const` US_GAME_CODE_REGEX

• **US_GAME_CODE_REGEX**: *RegExp* =  /HAC\w(\w{4})/

*Defined in [constants.ts:19](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L19)*

Regex for US game codes

___

### `Const` US_GAME_LIST_LIMIT

• **US_GAME_LIST_LIMIT**: *200* = 200

*Defined in [constants.ts:22](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L22)*

Default limit for getting US games - Defaults to 200

___

### `Const` US_GET_GAMES_URL

• **US_GET_GAMES_URL**: *string* =  `https://${US_ALGOLIA_ID}-dsn.algolia.net/1/indexes/*/queries`

*Defined in [constants.ts:13](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L13)*

URL for getting US Games

___

### `Const` US_PRICE_RANGES

• **US_PRICE_RANGES**: *string[]* =  [
  'Free to start',
  '$0 - $4.99',
  '$5 - $9.99',
  '$10 - $19.99',
  '$20 - $39.99',
  '$40+'
]

*Defined in [constants.ts:25](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L25)*

Price ranges for US games

## Functions

### `Const` getActiveShops

▸ **getActiveShops**(): *Promise‹[EShop](#interfaceseshopmd)[]›*

*Defined in [nintendo-switch-eshop.ts:465](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/nintendo-switch-eshop.ts#L465)*

Gets all active eShops.

**Returns:** *Promise‹[EShop](#interfaceseshopmd)[]›*

A list of shop objects with country code, name and default currency.

___

### `Const` getGamesAmerica

▸ **getGamesAmerica**(`options`: [USRequestOptions](#usrequestoptions), `offset`: number, `games`: [GameUS](#interfacesgameusmd)[]): *Promise‹[GameUS](#interfacesgameusmd)[]›*

*Defined in [nintendo-switch-eshop.ts:91](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/nintendo-switch-eshop.ts#L91)*

Fetches all games on american eshops

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [USRequestOptions](#usrequestoptions) |  {} | _(Optional)_ Options for the request |
`offset` | number | 0 | _(Optional)_ Offset to start searching at |
`games` | [GameUS](#interfacesgameusmd)[] |  [] | _(Optional)_ Array of games to filter by |

**Returns:** *Promise‹[GameUS](#interfacesgameusmd)[]›*

Promise containing all the games

___

### `Const` getGamesEurope

▸ **getGamesEurope**(`options`: [EURequestOptions](#eurequestoptions)): *Promise‹[GameEU](#interfacesgameeumd)[]›*

*Defined in [nintendo-switch-eshop.ts:295](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/nintendo-switch-eshop.ts#L295)*

Fetches all games on the European, Australian or New Zealand eShops

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [EURequestOptions](#eurequestoptions) |  { limit: EU_GAME_LIST_LIMIT, locale: EU_DEFAULT_LOCALE } | Request options to pass to the eShop request {@link EURequestOptions | See EURequestOptions for details} |

**Returns:** *Promise‹[GameEU](#interfacesgameeumd)[]›*

Promise containing all requested EU/PAL games

___

### `Const` getGamesJapan

▸ **getGamesJapan**(): *Promise‹[GameJP](#interfacesgamejpmd)[]›*

*Defined in [nintendo-switch-eshop.ts:266](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/nintendo-switch-eshop.ts#L266)*

Fetches all games on japanese eShops

**Returns:** *Promise‹[GameJP](#interfacesgamejpmd)[]›*

Promise containing all the games

___

### `Const` getPrices

▸ **getPrices**(`country`: string, `gameIds`: string[] | string, `offset`: number, `prices`: [TitleData](#interfacestitledatamd)[]): *Promise‹[PriceResponse](#interfacespriceresponsemd)›*

*Defined in [nintendo-switch-eshop.ts:325](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/nintendo-switch-eshop.ts#L325)*

Gets pricing information for the requested ames. Paginates every 50 games.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`country` | string | - | A two digit country code. (ISO 3166-1 alpha-2 country code) |
`gameIds` | string[] &#124; string | - | One or more NSUID of the corresponding games. |
`offset` | number | 0 | _(Optional)_ The offset to start at |
`prices` | [TitleData](#interfacestitledatamd)[] |  [] | _(Optional)_ An array of [TitleData](#interfacestitledatamd) |

**Returns:** *Promise‹[PriceResponse](#interfacespriceresponsemd)›*

A promise containing the pricing information.

___

### `Const` getShopsAmerica

▸ **getShopsAmerica**(): *Promise‹[EShop](#interfaceseshopmd)[]›*

*Defined in [nintendo-switch-eshop.ts:408](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/nintendo-switch-eshop.ts#L408)*

Gets all active eShops on American countries.

**Returns:** *Promise‹[EShop](#interfaceseshopmd)[]›*

A list of shop objects with country code, name and default currency.

___

### `Const` getShopsAsia

▸ **getShopsAsia**(): *Promise‹[EShop](#interfaceseshopmd)[]›*

*Defined in [nintendo-switch-eshop.ts:446](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/nintendo-switch-eshop.ts#L446)*

Gets all active eShops on Asian countries

**Returns:** *Promise‹[EShop](#interfaceseshopmd)[]›*

A list of shop objects with country code, name and default currency.

___

### `Const` getShopsByCountryCodes

▸ **getShopsByCountryCodes**(`countryCodes`: string[], `gameCode`: string, `region`: [Region](#enumsregionmd)): *Promise‹[EShop](#interfaceseshopmd)[]›*

*Defined in [nintendo-switch-eshop.ts:365](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/nintendo-switch-eshop.ts#L365)*

Gets all active eShops given a list of countries.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`countryCodes` | string[] | A list of 2 digit country codes for every country eShop to lookup. (ISO 3166-1 alpha-2 country codes) |
`gameCode` | string | A 14 digits game NSUID from the desired region. |
`region` | [Region](#enumsregionmd) | A region id that will be appended in the final shop object for filtering purposes. |

**Returns:** *Promise‹[EShop](#interfaceseshopmd)[]›*

A list of shop objects with country code, name and default currency.

___

### `Const` getShopsEurope

▸ **getShopsEurope**(): *Promise‹[EShop](#interfaceseshopmd)[]›*

*Defined in [nintendo-switch-eshop.ts:426](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/nintendo-switch-eshop.ts#L426)*

Gets all active eShops on European countries.

**Returns:** *Promise‹[EShop](#interfaceseshopmd)[]›*

A list of shop objects with country code, name and default currency.

___

### `Const` parseGameCode

▸ **parseGameCode**(`game`: [GameUS](#interfacesgameusmd) | [GameEU](#interfacesgameeumd) | [GameJP](#interfacesgamejpmd), `region`: [Region](#enumsregionmd)): *string | null*

*Defined in [nintendo-switch-eshop.ts:484](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/nintendo-switch-eshop.ts#L484)*

Parses the game code to extract the cross-region portion.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`game` | [GameUS](#interfacesgameusmd) &#124; [GameEU](#interfacesgameeumd) &#124; [GameJP](#interfacesgamejpmd) | The game object returned from one of the other methods. |
`region` | [Region](#enumsregionmd) | Region code |

**Returns:** *string | null*

The 4-digit resulting game code

___

### `Const` parseNSUID

▸ **parseNSUID**(`game`: [GameUS](#interfacesgameusmd) | [GameEU](#interfacesgameeumd) | [GameJP](#interfacesgamejpmd), `region`: [Region](#enumsregionmd)): *string | null*

*Defined in [nintendo-switch-eshop.ts:510](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/nintendo-switch-eshop.ts#L510)*

Extracts NSUID information from the game object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`game` | [GameUS](#interfacesgameusmd) &#124; [GameEU](#interfacesgameeumd) &#124; [GameJP](#interfacesgamejpmd) | The game object returned from one of the other methods. |
`region` | [Region](#enumsregionmd) | Region code |

**Returns:** *string | null*

The 14-digits NSUID

## Object literals

### `Const` EU_GET_GAMES_OPTIONS

### ▪ **EU_GET_GAMES_OPTIONS**: *object*

*Defined in [constants.ts:35](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L35)*

Options used for getting EU gmaes

###  fq

• **fq**: *string* = "type:GAME AND system_type:nintendoswitch* AND product_code_txt:*"

*Defined in [constants.ts:36](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L36)*

###  q

• **q**: *string* = "*"

*Defined in [constants.ts:37](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L37)*

###  sort

• **sort**: *string* = "sorting_title asc"

*Defined in [constants.ts:38](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L38)*

###  start

• **start**: *string* = "0"

*Defined in [constants.ts:39](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L39)*

###  wt

• **wt**: *string* = "json"

*Defined in [constants.ts:40](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L40)*

___

### `Const` PRICE_GET_OPTIONS

### ▪ **PRICE_GET_OPTIONS**: *object*

*Defined in [constants.ts:77](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L77)*

Options for getting Price data

###  lang

• **lang**: *string* = "en"

*Defined in [constants.ts:77](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L77)*

___

### `Const` US_GET_GAMES_OPTIONS

### ▪ **US_GET_GAMES_OPTIONS**: *object*

*Defined in [constants.ts:4](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L4)*

Options used for getting US gmaes

###  direction

• **direction**: *string* = "asc"

*Defined in [constants.ts:4](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L4)*

###  sort

• **sort**: *string* = "title"

*Defined in [constants.ts:4](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L4)*

###  system

• **system**: *string* = "platform:Nintendo Switch"

*Defined in [constants.ts:4](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L4)*
# Classes


<a name="classeseshoperrormd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [EshopError](#classeseshoperrormd)

# Class: EshopError

Class representing an error in the nintendo-switch-eshop library

## Hierarchy

* Error

  * **EshopError**

## Index

### Constructors

* [constructor](#constructor)

### Properties

* [message](#message)
* [name](#name)
* [stack](#optional-stack)
* [Error](#static-error)

## Constructors

###  constructor

\+ **new EshopError**(`message`: string): *[EshopError](#classeseshoperrormd)*

*Defined in [constants.ts:83](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/constants.ts#L83)*

Create an EshopError

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The message the error should show  |

**Returns:** *[EshopError](#classeseshoperrormd)*

## Properties

###  message

• **message**: *string*

*Inherited from void*

Defined in E:/dev/nintendo-switch-eshop/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from void*

Defined in E:/dev/nintendo-switch-eshop/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from void*

*Overrides void*

Defined in E:/dev/nintendo-switch-eshop/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in E:/dev/nintendo-switch-eshop/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:984
# Enums


<a name="enumsregionmd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [Region](#enumsregionmd)

# Enumeration: Region

Predefined options for the unit system

## Index

### Enumeration members

* [AMERICAS](#americas)
* [ASIA](#asia)
* [EUROPE](#europe)

## Enumeration members

###  AMERICAS

• **AMERICAS**: = 1

*Defined in [interfaces.ts:192](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L192)*

___

###  ASIA

• **ASIA**: = 3

*Defined in [interfaces.ts:194](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L194)*

___

###  EUROPE

• **EUROPE**: = 2

*Defined in [interfaces.ts:193](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L193)*
# Interfaces


<a name="interfacesalgoliaresponsemd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [AlgoliaResponse](#interfacesalgoliaresponsemd)

# Interface: AlgoliaResponse

## Hierarchy

* **AlgoliaResponse**

## Index

### Properties

* [results](#results)

## Properties

###  results

• **results**: *[AlgoliaResults](#interfacesalgoliaresultsmd)[]*

*Defined in [interfaces.ts:111](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L111)*

<a name="interfacesalgoliaresultsmd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [AlgoliaResults](#interfacesalgoliaresultsmd)

# Interface: AlgoliaResults

## Hierarchy

* **AlgoliaResults**

## Index

### Properties

* [exhaustiveFacetsCount](#exhaustivefacetscount)
* [exhaustiveNbHits](#exhaustivenbhits)
* [facetFilters](#facetfilters)
* [facets](#facets)
* [hits](#hits)
* [hitsPerPage](#hitsperpage)
* [index](#index)
* [nbHits](#nbhits)
* [nbPages](#nbpages)
* [page](#page)
* [params](#params)
* [processingTimeMS](#processingtimems)
* [query](#query)

## Properties

###  exhaustiveFacetsCount

• **exhaustiveFacetsCount**: *boolean*

*Defined in [interfaces.ts:103](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L103)*

___

###  exhaustiveNbHits

• **exhaustiveNbHits**: *boolean*

*Defined in [interfaces.ts:104](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L104)*

___

###  facetFilters

• **facetFilters**: *string[][]*

*Defined in [interfaces.ts:102](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L102)*

Filters for the search query

___

###  facets

• **facets**: *object*

*Defined in [interfaces.ts:96](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L96)*

#### Type declaration:

* \[ **key**: *string*\]: object

* \[ **key**: *string*\]: number

___

###  hits

• **hits**: *[GameUS](#interfacesgameusmd)[]*

*Defined in [interfaces.ts:88](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L88)*

The games found

___

###  hitsPerPage

• **hitsPerPage**: *number*

*Defined in [interfaces.ts:94](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L94)*

Number of hits per page

___

###  index

• **index**: *string*

*Defined in [interfaces.ts:107](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L107)*

___

###  nbHits

• **nbHits**: *number*

*Defined in [interfaces.ts:90](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L90)*

Total number of hits with current query

___

###  nbPages

• **nbPages**: *number*

*Defined in [interfaces.ts:92](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L92)*

___

###  page

• **page**: *number*

*Defined in [interfaces.ts:91](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L91)*

___

###  params

• **params**: *string*

*Defined in [interfaces.ts:106](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L106)*

___

###  processingTimeMS

• **processingTimeMS**: *number*

*Defined in [interfaces.ts:95](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L95)*

___

###  query

• **query**: *string*

*Defined in [interfaces.ts:105](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L105)*

<a name="interfacescategorymd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [Category](#interfacescategorymd)

# Interface: Category

## Hierarchy

* **Category**

## Index

### Properties

* [category](#category)

## Properties

###  category

• **category**: *string[]*

*Defined in [interfaces.ts:5](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L5)*

Categories array

<a name="interfaceseshopmd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [EShop](#interfaceseshopmd)

# Interface: EShop

## Hierarchy

* **EShop**

## Index

### Properties

* [code](#code)
* [country](#country)
* [currency](#currency)
* [region](#region)

## Properties

###  code

• **code**: *string*

*Defined in [interfaces.ts:133](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L133)*

___

###  country

• **country**: *string*

*Defined in [interfaces.ts:134](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L134)*

___

###  currency

• **currency**: *string*

*Defined in [interfaces.ts:135](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L135)*

___

###  region

• **region**: *[Region](#enumsregionmd)*

*Defined in [interfaces.ts:136](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L136)*

<a name="interfacesgameeumd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [GameEU](#interfacesgameeumd)

# Interface: GameEU

## Hierarchy

* **GameEU**

## Index

### Properties

* [add_on_content_b](#add_on_content_b)
* [age_rating_sorting_i](#age_rating_sorting_i)
* [age_rating_type](#age_rating_type)
* [age_rating_value](#age_rating_value)
* [change_date](#change_date)
* [club_nintendo](#club_nintendo)
* [compatible_controller](#compatible_controller)
* [copyright_s](#copyright_s)
* [date_from](#date_from)
* [developer](#developer)
* [excerpt](#excerpt)
* [fs_id](#fs_id)
* [game_categories_txt](#game_categories_txt)
* [game_category](#game_category)
* [game_series_t](#game_series_t)
* [gift_finder_carousel_image_url_s](#gift_finder_carousel_image_url_s)
* [gift_finder_description_s](#gift_finder_description_s)
* [gift_finder_detail_page_image_url_s](#gift_finder_detail_page_image_url_s)
* [gift_finder_detail_page_store_link_s](#gift_finder_detail_page_store_link_s)
* [gift_finder_wishlist_image_url_s](#gift_finder_wishlist_image_url_s)
* [image_url](#image_url)
* [image_url_h2x1_s](#image_url_h2x1_s)
* [image_url_sq_s](#image_url_sq_s)
* [image_url_tm_s](#image_url_tm_s)
* [language_availability](#language_availability)
* [near_field_comm_b](#near_field_comm_b)
* [nsuid_txt](#nsuid_txt)
* [originally_for_t](#originally_for_t)
* [physical_version_b](#physical_version_b)
* [play_mode_handheld_mode_b](#play_mode_handheld_mode_b)
* [play_mode_tabletop_mode_b](#play_mode_tabletop_mode_b)
* [play_mode_tv_mode_b](#play_mode_tv_mode_b)
* [playable_on_txt](#playable_on_txt)
* [players_from](#players_from)
* [players_to](#players_to)
* [pretty_agerating_s](#pretty_agerating_s)
* [pretty_date_s](#pretty_date_s)
* [priority](#priority)
* [product_code_txt](#product_code_txt)
* [publisher](#publisher)
* [sorting_title](#sorting_title)
* [system_names_txt](#system_names_txt)
* [system_type](#system_type)
* [title](#title)
* [title_extras_txt](#title_extras_txt)
* [type](#type)
* [url](#url)

## Properties

###  add_on_content_b

• **add_on_content_b**: *boolean*

*Defined in [interfaces.ts:33](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L33)*

___

###  age_rating_sorting_i

• **age_rating_sorting_i**: *number*

*Defined in [interfaces.ts:43](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L43)*

___

###  age_rating_type

• **age_rating_type**: *string*

*Defined in [interfaces.ts:9](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L9)*

___

###  age_rating_value

• **age_rating_value**: *string*

*Defined in [interfaces.ts:10](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L10)*

___

###  change_date

• **change_date**: *Date*

*Defined in [interfaces.ts:40](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L40)*

___

###  club_nintendo

• **club_nintendo**: *boolean*

*Defined in [interfaces.ts:34](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L34)*

___

###  compatible_controller

• **compatible_controller**: *string[]*

*Defined in [interfaces.ts:46](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L46)*

___

###  copyright_s

• **copyright_s**: *string*

*Defined in [interfaces.ts:11](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L11)*

___

###  date_from

• **date_from**: *Date*

*Defined in [interfaces.ts:41](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L41)*

___

###  developer

• **developer**: *string*

*Defined in [interfaces.ts:12](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L12)*

___

###  excerpt

• **excerpt**: *string*

*Defined in [interfaces.ts:13](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L13)*

___

###  fs_id

• **fs_id**: *string*

*Defined in [interfaces.ts:14](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L14)*

___

###  game_categories_txt

• **game_categories_txt**: *string[]*

*Defined in [interfaces.ts:47](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L47)*

___

###  game_category

• **game_category**: *string[]*

*Defined in [interfaces.ts:48](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L48)*

___

###  game_series_t

• **game_series_t**: *string*

*Defined in [interfaces.ts:15](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L15)*

___

###  gift_finder_carousel_image_url_s

• **gift_finder_carousel_image_url_s**: *string*

*Defined in [interfaces.ts:16](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L16)*

___

###  gift_finder_description_s

• **gift_finder_description_s**: *string*

*Defined in [interfaces.ts:17](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L17)*

___

###  gift_finder_detail_page_image_url_s

• **gift_finder_detail_page_image_url_s**: *string*

*Defined in [interfaces.ts:18](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L18)*

___

###  gift_finder_detail_page_store_link_s

• **gift_finder_detail_page_store_link_s**: *string*

*Defined in [interfaces.ts:19](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L19)*

___

###  gift_finder_wishlist_image_url_s

• **gift_finder_wishlist_image_url_s**: *string*

*Defined in [interfaces.ts:20](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L20)*

___

###  image_url

• **image_url**: *string*

*Defined in [interfaces.ts:21](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L21)*

___

###  image_url_h2x1_s

• **image_url_h2x1_s**: *string*

*Defined in [interfaces.ts:22](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L22)*

___

###  image_url_sq_s

• **image_url_sq_s**: *string*

*Defined in [interfaces.ts:23](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L23)*

___

###  image_url_tm_s

• **image_url_tm_s**: *string*

*Defined in [interfaces.ts:24](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L24)*

___

###  language_availability

• **language_availability**: *string[]*

*Defined in [interfaces.ts:49](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L49)*

___

###  near_field_comm_b

• **near_field_comm_b**: *boolean*

*Defined in [interfaces.ts:35](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L35)*

___

###  nsuid_txt

• **nsuid_txt**: *string[]*

*Defined in [interfaces.ts:51](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L51)*

Array containing the 14-digit game unique identifier

___

###  originally_for_t

• **originally_for_t**: *string*

*Defined in [interfaces.ts:25](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L25)*

___

###  physical_version_b

• **physical_version_b**: *boolean*

*Defined in [interfaces.ts:36](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L36)*

___

###  play_mode_handheld_mode_b

• **play_mode_handheld_mode_b**: *boolean*

*Defined in [interfaces.ts:37](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L37)*

___

###  play_mode_tabletop_mode_b

• **play_mode_tabletop_mode_b**: *boolean*

*Defined in [interfaces.ts:38](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L38)*

___

###  play_mode_tv_mode_b

• **play_mode_tv_mode_b**: *boolean*

*Defined in [interfaces.ts:39](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L39)*

___

###  playable_on_txt

• **playable_on_txt**: *string[]*

*Defined in [interfaces.ts:52](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L52)*

___

###  players_from

• **players_from**: *number*

*Defined in [interfaces.ts:44](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L44)*

___

###  players_to

• **players_to**: *number*

*Defined in [interfaces.ts:45](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L45)*

___

###  pretty_agerating_s

• **pretty_agerating_s**: *string*

*Defined in [interfaces.ts:26](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L26)*

___

###  pretty_date_s

• **pretty_date_s**: *string*

*Defined in [interfaces.ts:27](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L27)*

___

###  priority

• **priority**: *Date*

*Defined in [interfaces.ts:42](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L42)*

___

###  product_code_txt

• **product_code_txt**: *string[]*

*Defined in [interfaces.ts:54](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L54)*

Array containing the product code

___

###  publisher

• **publisher**: *string*

*Defined in [interfaces.ts:28](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L28)*

___

###  sorting_title

• **sorting_title**: *string*

*Defined in [interfaces.ts:29](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L29)*

___

###  system_names_txt

• **system_names_txt**: *string[]*

*Defined in [interfaces.ts:55](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L55)*

___

###  system_type

• **system_type**: *string[]*

*Defined in [interfaces.ts:56](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L56)*

___

###  title

• **title**: *string*

*Defined in [interfaces.ts:30](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L30)*

___

###  title_extras_txt

• **title_extras_txt**: *string[]*

*Defined in [interfaces.ts:57](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L57)*

___

###  type

• **type**: *string*

*Defined in [interfaces.ts:31](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L31)*

___

###  url

• **url**: *string*

*Defined in [interfaces.ts:32](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L32)*

<a name="interfacesgamejpmd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [GameJP](#interfacesgamejpmd)

# Interface: GameJP

## Hierarchy

* **GameJP**

## Index

### Properties

* [Hard](#hard)
* [LinkTarget](#linktarget)
* [LinkURL](#linkurl)
* [MakerName](#makername)
* [Memo](#memo)
* [SalesDate](#salesdate)
* [SalesDateStr](#salesdatestr)
* [ScreenshotImgURL](#screenshotimgurl)
* [ScreenshotImgURLComing](#screenshotimgurlcoming)
* [SoftType](#softtype)
* [TitleName](#titlename)
* [TitleNameRuby](#titlenameruby)

## Properties

###  Hard

• **Hard**: *string[]*

*Defined in [interfaces.ts:128](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L128)*

___

###  LinkTarget

• **LinkTarget**: *string[]*

*Defined in [interfaces.ts:117](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L117)*

___

###  LinkURL

• **LinkURL**: *string[]*

*Defined in [interfaces.ts:116](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L116)*

A single item array containing the game url

___

###  MakerName

• **MakerName**: *string[]*

*Defined in [interfaces.ts:127](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L127)*

___

###  Memo

• **Memo**: *string[]*

*Defined in [interfaces.ts:129](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L129)*

___

###  SalesDate

• **SalesDate**: *string[]*

*Defined in [interfaces.ts:125](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L125)*

___

###  SalesDateStr

• **SalesDateStr**: *string[]*

*Defined in [interfaces.ts:126](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L126)*

___

###  ScreenshotImgURL

• **ScreenshotImgURL**: *string[]*

*Defined in [interfaces.ts:119](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L119)*

A single item array containing the game thumbnail url

___

###  ScreenshotImgURLComing

• **ScreenshotImgURLComing**: *string[]*

*Defined in [interfaces.ts:120](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L120)*

___

###  SoftType

• **SoftType**: *string[]*

*Defined in [interfaces.ts:124](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L124)*

___

###  TitleName

• **TitleName**: *string[]*

*Defined in [interfaces.ts:122](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L122)*

A single item array containing the game title

___

###  TitleNameRuby

• **TitleNameRuby**: *string[]*

*Defined in [interfaces.ts:123](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L123)*

<a name="interfacesgameusmd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [GameUS](#interfacesgameusmd)

# Interface: GameUS

## Hierarchy

* **GameUS**

## Index

### Properties

* [buyitnow](#buyitnow)
* [buyonline](#buyonline)
* [ca_price](#ca_price)
* [categories](#categories)
* [digitaldownload](#digitaldownload)
* [eshop_price](#eshop_price)
* [free_to_start](#free_to_start)
* [front_box_art](#front_box_art)
* [game_code](#game_code)
* [id](#id)
* [nsuid](#nsuid)
* [number_of_players](#number_of_players)
* [release_date](#release_date)
* [slug](#slug)
* [system](#system)
* [title](#title)
* [video_link](#video_link)

## Properties

###  buyitnow

• **buyitnow**: *boolean*

*Defined in [interfaces.ts:83](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L83)*

___

###  buyonline

• **buyonline**: *boolean*

*Defined in [interfaces.ts:63](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L63)*

___

###  ca_price

• **ca_price**: *number*

*Defined in [interfaces.ts:72](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L72)*

Canada eShop price (in canadian dollars)

___

###  categories

• **categories**: *[Category](#interfacescategorymd)*

*Defined in [interfaces.ts:80](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L80)*

___

###  digitaldownload

• **digitaldownload**: *boolean*

*Defined in [interfaces.ts:78](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L78)*

___

###  eshop_price

• **eshop_price**: *number*

*Defined in [interfaces.ts:66](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L66)*

USA eShop price (in dollars)

___

###  free_to_start

• **free_to_start**: *boolean*

*Defined in [interfaces.ts:77](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L77)*

___

###  front_box_art

• **front_box_art**: *string*

*Defined in [interfaces.ts:64](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L64)*

___

###  game_code

• **game_code**: *string*

*Defined in [interfaces.ts:62](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L62)*

Product code. Can be parsed for a region wide code.

___

###  id

• **id**: *string*

*Defined in [interfaces.ts:73](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L73)*

___

###  nsuid

• **nsuid**: *string*

*Defined in [interfaces.ts:68](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L68)*

14-digit game unique identifier

___

###  number_of_players

• **number_of_players**: *string*

*Defined in [interfaces.ts:70](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L70)*

___

###  release_date

• **release_date**: *string*

*Defined in [interfaces.ts:79](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L79)*

___

###  slug

• **slug**: *string*

*Defined in [interfaces.ts:82](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L82)*

Game URL name

___

###  system

• **system**: *string*

*Defined in [interfaces.ts:76](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L76)*

Gaming platform

___

###  title

• **title**: *string*

*Defined in [interfaces.ts:74](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L74)*

___

###  video_link

• **video_link**: *string*

*Defined in [interfaces.ts:69](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L69)*

<a name="interfacespricedatamd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [PriceData](#interfacespricedatamd)

# Interface: PriceData

## Hierarchy

* **PriceData**

## Index

### Properties

* [amount](#amount)
* [currency](#currency)
* [end_datetime](#optional-end_datetime)
* [raw_value](#raw_value)
* [start_datetime](#optional-start_datetime)

## Properties

###  amount

• **amount**: *string*

*Defined in [interfaces.ts:159](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L159)*

___

###  currency

• **currency**: *string*

*Defined in [interfaces.ts:160](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L160)*

___

### `Optional` end_datetime

• **end_datetime**? : *undefined | string*

*Defined in [interfaces.ts:163](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L163)*

___

###  raw_value

• **raw_value**: *string*

*Defined in [interfaces.ts:161](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L161)*

___

### `Optional` start_datetime

• **start_datetime**? : *undefined | string*

*Defined in [interfaces.ts:162](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L162)*

<a name="interfacespriceerrormd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [PriceError](#interfacespriceerrormd)

# Interface: PriceError

## Hierarchy

* **PriceError**

## Index

### Properties

* [code](#code)
* [message](#message)

## Properties

###  code

• **code**: *string*

*Defined in [interfaces.ts:154](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L154)*

___

###  message

• **message**: *string*

*Defined in [interfaces.ts:155](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L155)*

<a name="interfacespriceresponsemd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [PriceResponse](#interfacespriceresponsemd)

# Interface: PriceResponse

## Hierarchy

* **PriceResponse**

## Index

### Properties

* [country](#country)
* [error](#error)
* [personalized](#personalized)
* [prices](#prices)

## Properties

###  country

• **country**: *Country*

*Defined in [interfaces.ts:142](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L142)*

___

###  error

• **error**: *[PriceError](#interfacespriceerrormd)*

*Defined in [interfaces.ts:140](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L140)*

___

###  personalized

• **personalized**: *boolean*

*Defined in [interfaces.ts:141](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L141)*

___

###  prices

• **prices**: *[TitleData](#interfacestitledatamd)[]*

*Defined in [interfaces.ts:143](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L143)*

<a name="interfacesrequestoptionsmd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [RequestOptions](#interfacesrequestoptionsmd)

# Interface: RequestOptions

## Hierarchy

* **RequestOptions**

## Index

### Properties

* [limit](#optional-limit)

## Properties

### `Optional` limit

• **limit**? : *undefined | number*

*Defined in [interfaces.ts:172](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L172)*

Game count limit (Can only be lower than default page size).

**`remarks`** 
On the US eshop, the max limit is 1000. Leave empty to get all the games.

<a name="interfacestitledatamd"></a>

**[nintendo-switch-eshop](#readmemd)**

[Globals](#readmemd) › [TitleData](#interfacestitledatamd)

# Interface: TitleData

## Hierarchy

* **TitleData**

## Index

### Properties

* [discount_price](#optional-discount_price)
* [regular_price](#regular_price)
* [sales_status](#sales_status)
* [title_id](#title_id)

## Properties

### `Optional` discount_price

• **discount_price**? : *[PriceData](#interfacespricedatamd)*

*Defined in [interfaces.ts:150](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L150)*

___

###  regular_price

• **regular_price**: *[PriceData](#interfacespricedatamd)*

*Defined in [interfaces.ts:149](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L149)*

___

###  sales_status

• **sales_status**: *string*

*Defined in [interfaces.ts:148](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L148)*

___

###  title_id

• **title_id**: *number*

*Defined in [interfaces.ts:147](https://github.com/lmmfranco/nintendo-switch-eshop/blob/007e160/packages/nintendo-switch-eshop/src/interfaces.ts#L147)*