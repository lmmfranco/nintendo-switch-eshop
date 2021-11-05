---
id: "QueriedGameUS"
title: "Interface: QueriedGameUS"
sidebar_label: "QueriedGameUS"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### \_distinctSeqID

• **\_distinctSeqID**: `number`

Additional information returned by the API, it doesn't really serve any purpose but documenting it anyway because it's there.

#### Defined in

[lib/utils/interfaces.ts:155](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L155)

___

### \_highlightResult

• **\_highlightResult**: [`HighlightResult`](HighlightResult)

Additional information returned by the API, it doesn't really serve any purpose but documenting it anyway because it's there.

#### Defined in

[lib/utils/interfaces.ts:157](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L157)

___

### availability

• **availability**: `string`[]

Whether this game is available or not

#### Defined in

[lib/utils/interfaces.ts:96](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L96)

___

### boxart

• `Optional` **boxart**: `string`

The box art of the game, if any. Generally undefined for games that are yet to release.

#### Defined in

[lib/utils/interfaces.ts:98](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L98)

___

### description

• **description**: `string`

A description about this game

#### Defined in

[lib/utils/interfaces.ts:100](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L100)

___

### developers

• **developers**: `string`[]

A list of companies that developed this game

#### Defined in

[lib/utils/interfaces.ts:102](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L102)

___

### esrbDescriptors

• **esrbDescriptors**: `string`[]

A list of [ESRB descriptors](https://www.esrb.org/ratings-guide/)

#### Defined in

[lib/utils/interfaces.ts:104](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L104)

___

### esrbRating

• **esrbRating**: `string`

The [ESRB Rating](https://www.esrb.org/ratings-guide/)

#### Defined in

[lib/utils/interfaces.ts:106](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L106)

___

### featured

• **featured**: `boolean`

Whether this game is featured on the [nintendo.com](https://www.nintendo.com) homepage

#### Defined in

[lib/utils/interfaces.ts:108](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L108)

___

### franchises

• **franchises**: `string`

The franchises this game is a part of

#### Defined in

[lib/utils/interfaces.ts:110](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L110)

___

### freeToStart

• **freeToStart**: `boolean`

Whether this game is free to start

#### Defined in

[lib/utils/interfaces.ts:112](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L112)

___

### generalFilters

• **generalFilters**: `string`[]

A list of general filters that could potentially be searched on [nintendo.com](https://www.nintendo.com) to find this game with

#### Defined in

[lib/utils/interfaces.ts:114](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L114)

___

### genres

• **genres**: `string`[]

A list of genres this game

#### Defined in

[lib/utils/interfaces.ts:116](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L116)

___

### horizontalHeaderImage

• `Optional` **horizontalHeaderImage**: `string`

A large wide image such as a screenshot or artwork of the game, if any.

#### Defined in

[lib/utils/interfaces.ts:118](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L118)

___

### howToShop

• **howToShop**: `string`[]

A list of methods through which the game can be acquired, such as retail or digital download.

#### Defined in

[lib/utils/interfaces.ts:120](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L120)

___

### lastModified

• **lastModified**: `number`

A Unix timestamp in **milliseconds** indicating when the information on this game was last modified

#### Defined in

[lib/utils/interfaces.ts:122](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L122)

___

### lowestPrice

• **lowestPrice**: `number`

The lowest price at which this game was ever sold

#### Defined in

[lib/utils/interfaces.ts:124](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L124)

___

### msrp

• **msrp**: `number`

The [manufacturer's suggested retail price](https://en.wikipedia.org/wiki/List_price) for this game

#### Defined in

[lib/utils/interfaces.ts:126](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L126)

___

### nsuid

• **nsuid**: `string`

The unique ID for this game.

#### Defined in

[lib/utils/interfaces.ts:128](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L128)

___

### numOfPlayers

• **numOfPlayers**: `string`

The amount of players that can simultaneously play this game

#### Defined in

[lib/utils/interfaces.ts:130](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L130)

___

### objectID

• **objectID**: `string`

A unique [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) that represents this game's entry in the Nintendo API.

#### Defined in

[lib/utils/interfaces.ts:132](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L132)

___

### platform

• **platform**: `string`

The platform this game released on

#### Defined in

[lib/utils/interfaces.ts:134](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L134)

___

### playerFilters

• **playerFilters**: `string`[]

A list of player filters that could potentially be searched on [nintendo.com](https://www.nintendo.com) to find this game with

#### Defined in

[lib/utils/interfaces.ts:136](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L136)

___

### priceRange

• **priceRange**: `string`

A category price range that this game falls under. Can be used on [nintendo.com](https://www.nintendo.com) to find this game with

#### Defined in

[lib/utils/interfaces.ts:138](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L138)

___

### publishers

• **publishers**: `string`[]

A list of companies that published this game

#### Defined in

[lib/utils/interfaces.ts:140](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L140)

___

### releaseDateDisplay

• **releaseDateDisplay**: `string`

A display of the release of this game. Can be either an ISO timestamp or some other representation of date.

**`remark`** Nintendo has a tendency to also have entries such as `Early 2022` or `Late 2021` here. Normally these kinds of dates would not be parsed by JavaScript, but NodeJS does parse these natural input types.

#### Defined in

[lib/utils/interfaces.ts:145](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L145)

___

### salePrice

• **salePrice**: ``null`` \| `number`

The price of this game if and when it is on sale

#### Defined in

[lib/utils/interfaces.ts:147](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L147)

___

### slug

• **slug**: `string`

A unique [slug](https://en.wikipedia.org/wiki/Clean_URL#Slug) for this game

#### Defined in

[lib/utils/interfaces.ts:149](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L149)

___

### title

• **title**: `string`

The title of this game

#### Defined in

[lib/utils/interfaces.ts:151](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L151)

___

### url

• **url**: `string`

A unique to the information about this game. Prefix it with `https://www.nintendo.com` to have a valid URL.

#### Defined in

[lib/utils/interfaces.ts:153](https://github.com/lmmfranco/nintendo-switch-eshop/blob/45a9477/src/lib/utils/interfaces.ts#L153)
