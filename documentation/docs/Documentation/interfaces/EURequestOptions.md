---
id: "EURequestOptions"
title: "Interface: EURequestOptions"
sidebar_label: "EURequestOptions"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `RequestOptions`

  ↳ **`EURequestOptions`**

## Properties

### limit

• `Optional` **limit**: `number`

Game count limit (Can only be lower than default page size).

**`remarks`**
On the US eshop, the max limit is 100. Leave empty to get all the games.

#### Inherited from

RequestOptions.limit

#### Defined in

[lib/utils/interfaces.ts:335](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L335)

___

### locale

• `Optional` **locale**: `string`

Game information locale. (EU Only)

#### Defined in

[lib/utils/interfaces.ts:340](https://github.com/lmmfranco/nintendo-switch-eshop/blob/4384436/src/lib/utils/interfaces.ts#L340)
