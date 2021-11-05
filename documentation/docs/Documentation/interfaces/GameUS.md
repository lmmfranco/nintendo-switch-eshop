---
id: "GameUS"
title: "Interface: GameUS"
sidebar_label: "GameUS"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### availability

• **availability**: `string`[]

Identifiers about the availability of this game.

#### Defined in

[lib/utils/interfaces.ts:228](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L228)

___

### boxart

• **boxart**: `string`

The boxart of this title, if this is an eShop game then it is the homescreen icon

#### Defined in

[lib/utils/interfaces.ts:188](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L188)

___

### description

• **description**: `string`

A longer description about this title

#### Defined in

[lib/utils/interfaces.ts:179](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L179)

___

### developers

• **developers**: `string`[]

The studios that developed this gamme

#### Defined in

[lib/utils/interfaces.ts:212](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L212)

___

### esrbDescriptors

• **esrbDescriptors**: `string`[]

An array of ESRB descriptions such as `"Alcohol Reference"` and `"Violence"`

#### Defined in

[lib/utils/interfaces.ts:204](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L204)

___

### esrbRating

• **esrbRating**: `string`

The [ESRB](https://www.esrb.org) rating this game was given

#### Defined in

[lib/utils/interfaces.ts:196](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L196)

___

### featured

• **featured**: `boolean`

Whether this game is featured on [https://nintendo.com](https://nintendo.com)'s homepage

#### Defined in

[lib/utils/interfaces.ts:200](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L200)

___

### franchises

• **franchises**: `string`[]

The franches this game is part of

#### Defined in

[lib/utils/interfaces.ts:206](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L206)

___

### freeToStart

• **freeToStart**: `boolean`

Whether this game is free to start and only needs payment later

#### Defined in

[lib/utils/interfaces.ts:202](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L202)

___

### generalFilters

• **generalFilters**: `string`[]

Qualifiers that could be used to find this game when applying filters on [https://nintendo.com](https://nintendo.com)

#### Defined in

[lib/utils/interfaces.ts:214](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L214)

___

### genres

• **genres**: `string`[]

The genres this this game is part of

#### Defined in

[lib/utils/interfaces.ts:208](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L208)

___

### horizontalHeaderImage

• **horizontalHeaderImage**: `string`

A larger header image

#### Defined in

[lib/utils/interfaces.ts:190](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L190)

___

### howToShop

• **howToShop**: `string`[]

A list of ways this game can be purchased

#### Defined in

[lib/utils/interfaces.ts:216](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L216)

___

### lastModified

• **lastModified**: `number`

Unix timestamp when this entry was last edited on the API

#### Defined in

[lib/utils/interfaces.ts:175](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L175)

___

### lowestPrice

• **lowestPrice**: `number`

The lowest price this game was ever available for.

#### Defined in

[lib/utils/interfaces.ts:226](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L226)

___

### msrp

• **msrp**: `number`

The [Manufacturer's Suggested Retail Price](https://en.wikipedia.org/wiki/List_price) for this game (in United States Dollars).

#### Defined in

[lib/utils/interfaces.ts:222](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L222)

___

### nsuid

• **nsuid**: `string`

14-digit game unique identifier

#### Defined in

[lib/utils/interfaces.ts:184](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L184)

___

### numOfPlayers

• **numOfPlayers**: `string`

The amount of players this game supports. This is a string because Nintendo is more verbose than just a number.

#### Defined in

[lib/utils/interfaces.ts:198](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L198)

___

### objectID

• **objectID**: `string`

The internal ID that Nintendo has assigned to this game in their API. This doesn't really serve any use.

#### Defined in

[lib/utils/interfaces.ts:230](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L230)

___

### platform

• **platform**: `string`

The platform on which this game was released

#### Defined in

[lib/utils/interfaces.ts:192](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L192)

___

### playerFilters

• **playerFilters**: `string`[]

Qualifiers that could be used to find this game when applying player filters on [https://nintendo.com](https://nintendo.com)

#### Defined in

[lib/utils/interfaces.ts:218](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L218)

___

### priceRange

• **priceRange**: `string`

The predefined price range in which this game falls, can be used when applying filters on [https://nintendo.com](https://nintendo.com)

#### Defined in

[lib/utils/interfaces.ts:220](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L220)

___

### publishers

• **publishers**: `string`[]

The studios that published this game

#### Defined in

[lib/utils/interfaces.ts:210](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L210)

___

### releaseDateDisplay

• **releaseDateDisplay**: `string`

The date this game was released in the [ISO 8601 Extended Format](https://en.wikipedia.org/wiki/ISO_8601)

#### Defined in

[lib/utils/interfaces.ts:194](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L194)

___

### salePrice

• **salePrice**: ``null`` \| `number`

The price for this game when it is on sale. This is `null` when the game is _not_ on sale.

#### Defined in

[lib/utils/interfaces.ts:224](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L224)

___

### slug

• **slug**: `string`

Game URL name

#### Defined in

[lib/utils/interfaces.ts:186](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L186)

___

### title

• **title**: `string`

The title of the game

#### Defined in

[lib/utils/interfaces.ts:177](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L177)

___

### url

• **url**: `string`

The URL to the game on [https://nintendo.com](https://nintendo.com). Prepend `https://nintend.com` to this URL to get a fully qualified URL to the game.

#### Defined in

[lib/utils/interfaces.ts:181](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L181)
