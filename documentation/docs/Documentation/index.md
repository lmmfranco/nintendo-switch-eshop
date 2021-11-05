---
id: "index"
title: "nintendo-switch-eshop"
slug: "/Documentation/"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [Region](enums/Region)

## Classes

- [EshopError](classes/EshopError)

## Interfaces

- [EShop](interfaces/EShop)
- [EURequestOptions](interfaces/EURequestOptions)
- [GameEU](interfaces/GameEU)
- [GameJP](interfaces/GameJP)
- [GameUS](interfaces/GameUS)
- [HighlightResult](interfaces/HighlightResult)
- [Nsuid](interfaces/Nsuid)
- [PriceResponse](interfaces/PriceResponse)
- [QueriedGameResult](interfaces/QueriedGameResult)
- [QueriedGameUS](interfaces/QueriedGameUS)
- [QueriedGamesAmericaOptions](interfaces/QueriedGamesAmericaOptions)
- [TitleData](interfaces/TitleData)

## References

### getGamesAmerica

Renames and re-exports [default](#default)

## Variables

### EU\_GET\_GAMES\_URL

• **EU\_GET\_GAMES\_URL**: ``"http://search.nintendo-europe.com/{locale}/select"``

URL for getting EU Games

#### Defined in

[lib/utils/constants.ts:48](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/utils/constants.ts#L48)

___

### JP\_GET\_GAMES\_URL

• **JP\_GET\_GAMES\_URL**: ``"https://www.nintendo.co.jp/data/software/xml/switch.xml"``

URL for getting JP Games

#### Defined in

[lib/utils/constants.ts:75](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/utils/constants.ts#L75)

___

### PRICE\_GET\_URL

• **PRICE\_GET\_URL**: ``"https://api.ec.nintendo.com/v1/price"``

URL for getting game prices

#### Defined in

[lib/utils/constants.ts:96](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/utils/constants.ts#L96)

___

### QUERIED\_US\_ALGOLIA\_KEY

• **QUERIED\_US\_ALGOLIA\_KEY**: ``"6efbfb0f8f80defc44895018caf77504"``

Algolia key for getting US games with a query

#### Defined in

[lib/utils/constants.ts:8](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/utils/constants.ts#L8)

___

### QUERIED\_US\_GET\_GAMES\_URL

• **QUERIED\_US\_GET\_GAMES\_URL**: `string`

URL for getting Queried US Games

#### Defined in

[lib/utils/constants.ts:14](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/utils/constants.ts#L14)

___

### US\_ALGOLIA\_HEADERS

• **US\_ALGOLIA\_HEADERS**: `Object`

**`internal`** Request headers for US games

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Content-Type` | `string` |
| `X-Algolia-API-Key` | `string` |
| `X-Algolia-Application-Id` | `string` |

#### Defined in

[lib/utils/constants.ts:29](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/utils/constants.ts#L29)

___

### US\_ALGOLIA\_ID

• **US\_ALGOLIA\_ID**: ``"U3B6GR4UA3"``

Algolia ID for getting US games

#### Defined in

[lib/utils/constants.ts:2](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/utils/constants.ts#L2)

___

### US\_ALGOLIA\_KEY

• **US\_ALGOLIA\_KEY**: ``"c4da8be7fd29f0f5bfa42920b0a99dc7"``

Algolia Key for getting US games

#### Defined in

[lib/utils/constants.ts:5](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/utils/constants.ts#L5)

___

### US\_GET\_GAMES\_URL

• **US\_GET\_GAMES\_URL**: `string`

URL for getting US Games

#### Defined in

[lib/utils/constants.ts:11](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/utils/constants.ts#L11)

## Functions

### default

▸ `Const` **default**(): `Promise`<[`GameUS`](interfaces/GameUS)[]\>

Fetches all games on american e-shops

**`remarks`**
Currently ONLY returns all games in the e-shop

#### Returns

`Promise`<[`GameUS`](interfaces/GameUS)[]\>

Promise containing all the games

#### Defined in

[lib/getGames/getGamesAmerica.ts:15](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/getGames/getGamesAmerica.ts#L15)

___

### getActiveShops

▸ `Const` **getActiveShops**(): `Promise`<[`EShop`](interfaces/EShop)[]\>

Gets all active eShops.

**`remarks`**
This method will launch several requests at nintendo web services, so don't abuse it.

#### Returns

`Promise`<[`EShop`](interfaces/EShop)[]\>

A list of shop objects with country code, name and default currency.

#### Defined in

[lib/getShops/getActiveShops.ts:14](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/getShops/getActiveShops.ts#L14)

___

### getGamesEurope

▸ `Const` **getGamesEurope**(`options?`): `Promise`<[`GameEU`](interfaces/GameEU)[]\>

Fetches all games on the European, Australian or New Zealand eShops

**`remarks`**
Games from Australia / New Zealand can be limited. They are included only as much as that Nintendo assigns them properly to the PAL region

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`EURequestOptions`](interfaces/EURequestOptions) | Request options to pass to the eShop request [See EURequestOptions for details](interfaces/EURequestOptions) |

#### Returns

`Promise`<[`GameEU`](interfaces/GameEU)[]\>

Promise containing all requested EU/PAL games

#### Defined in

[lib/getGames/getGamesEurope.ts:16](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/getGames/getGamesEurope.ts#L16)

___

### getGamesJapan

▸ `Const` **getGamesJapan**(): `Promise`<[`GameJP`](interfaces/GameJP)[]\>

Fetches all games on japanese eShops

#### Returns

`Promise`<[`GameJP`](interfaces/GameJP)[]\>

Promise containing all the games

#### Defined in

[lib/getGames/getGamesJapan.ts:12](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/getGames/getGamesJapan.ts#L12)

___

### getPrices

▸ `Const` **getPrices**(`country`, `gameIds`, `offset?`, `prices?`): `Promise`<[`PriceResponse`](interfaces/PriceResponse)\>

Gets pricing information for the requested games. Paginates every 50 games.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `country` | `string` | `undefined` | A two digit country code. (ISO 3166-1 alpha-2 country code) |
| `gameIds` | `string` \| `string`[] | `undefined` | One or more NSUID of the corresponding games. |
| `offset` | `number` | `0` | _(Optional)_ The offset to start at |
| `prices` | [`TitleData`](interfaces/TitleData)[] | `[]` | _(Optional)_ An array of [TitleData](interfaces/TitleData) |

#### Returns

`Promise`<[`PriceResponse`](interfaces/PriceResponse)\>

A promise containing the pricing information.

#### Defined in

[lib/other/getPrices.ts:16](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/other/getPrices.ts#L16)

___

### getQueriedGamesAmerica

▸ `Const` **getQueriedGamesAmerica**(`query`, `__namedParameters?`): `Promise`<[`QueriedGameUS`](interfaces/QueriedGameUS)[]\>

Fetches a subset of games from the American e-shops as based on a given query

**`license`** Apache-2.0 Favna & Antonio Román

**`copyright`** 2019

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The query to search for |
| `__namedParameters` | [`QueriedGamesAmericaOptions`](interfaces/QueriedGamesAmericaOptions) | Additional options for the [getQueriedGamesAmerica](#getqueriedgamesamerica) call. Defaults to `{ hitsPerPage: 200, page: 0 }` |

#### Returns

`Promise`<[`QueriedGameUS`](interfaces/QueriedGameUS)[]\>

Promise containing the first `hitsPerPage` games that match your query

#### Defined in

[lib/getGames/getQueriedGamesAmerica.ts:15](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/getGames/getQueriedGamesAmerica.ts#L15)

___

### getShopsAmerica

▸ `Const` **getShopsAmerica**(): `Promise`<[`EShop`](interfaces/EShop)[]\>

Gets all active eShops on American countries.

**`remarks`**
This method will launch several requests at nintendo web services, so don't abuse it.

#### Returns

`Promise`<[`EShop`](interfaces/EShop)[]\>

A list of shop objects with country code, name and default currency.

#### Defined in

[lib/getShops/getShopsAmerica.ts:14](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/getShops/getShopsAmerica.ts#L14)

___

### getShopsAsia

▸ `Const` **getShopsAsia**(): `Promise`<[`EShop`](interfaces/EShop)[]\>

Gets all active eShops on Asian countries

**`remarks`**
This method will launch several requests at nintendo web services, so don't abuse it.

#### Returns

`Promise`<[`EShop`](interfaces/EShop)[]\>

A list of shop objects with country code, name and default currency.

#### Defined in

[lib/getShops/getShopsAsia.ts:14](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/getShops/getShopsAsia.ts#L14)

___

### getShopsByCountryCodes

▸ `Const` **getShopsByCountryCodes**(`countryCodes`, `gameCode`, `region`): `Promise`<[`EShop`](interfaces/EShop)[]\>

Gets all active eShops given a list of countries.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `countryCodes` | `string`[] | A list of 2 digit country codes for every country eShop to lookup. (ISO 3166-1 alpha-2 country codes) |
| `gameCode` | `string` | A 14 digits game NSUID from the desired region. |
| `region` | [`Region`](enums/Region) | A region id that will be appended in the final shop object for filtering purposes. |

#### Returns

`Promise`<[`EShop`](interfaces/EShop)[]\>

A list of shop objects with country code, name and default currency.

#### Defined in

[lib/other/getShopByCountryCode.ts:14](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/other/getShopByCountryCode.ts#L14)

___

### getShopsEurope

▸ `Const` **getShopsEurope**(): `Promise`<[`EShop`](interfaces/EShop)[]\>

Gets all active eShops on European countries.

**`remarks`**
This method will launch several requests at nintendo web services, so don't abuse it.

#### Returns

`Promise`<[`EShop`](interfaces/EShop)[]\>

A list of shop objects with country code, name and default currency.

#### Defined in

[lib/getShops/getShopsEurope.ts:14](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/getShops/getShopsEurope.ts#L14)

___

### parseGameCode

▸ `Const` **parseGameCode**(`game`, `region`): ``null`` \| `string`

Parses the game code to extract the cross-region portion.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `game` | [`GameUS`](interfaces/GameUS) \| [`GameEU`](interfaces/GameEU) \| [`GameJP`](interfaces/GameJP) | The game object returned from one of the other methods. |
| `region` | [`Region`](enums/Region) | Region code |

#### Returns

``null`` \| `string`

The 4-digit resulting game code

#### Defined in

[lib/other/parseGameCode.ts:11](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/other/parseGameCode.ts#L11)

___

### parseNSUID

▸ `Const` **parseNSUID**(`game`, `region`): ``null`` \| `string`

Extracts NSUID information from the game object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `game` | [`GameUS`](interfaces/GameUS) \| [`GameEU`](interfaces/GameEU) \| [`GameJP`](interfaces/GameJP) | The game object returned from one of the other methods. |
| `region` | [`Region`](enums/Region) | Region code |

#### Returns

``null`` \| `string`

The 14-digits NSUID

#### Defined in

[lib/other/parseNSUID.ts:11](https://github.com/lmmfranco/nintendo-switch-eshop/blob/ea8f3cb/src/lib/other/parseNSUID.ts#L11)
