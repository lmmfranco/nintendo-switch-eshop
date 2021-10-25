# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [6.0.2](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v6.0.1...v6.0.2) (2021-10-25)

### Bug Fixes

- rework some internals ([08c5d52](https://github.com/lmmfranco/nintendo-switch-eshop/commit/08c5d52a870306d1b561b9fdc25f18d3f96e4df6))

### [6.0.1](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v6.0.0...v6.0.1) (2021-06-20)

### Bug Fixes

- **getGamesAmerica:** improve requests being made for better api data ([881174d](https://github.com/lmmfranco/nintendo-switch-eshop/commit/881174de2b86b632f44f082aadbc97d9853917b0)), closes [#473](https://github.com/lmmfranco/nintendo-switch-eshop/issues/473)

## [6.0.0](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v5.1.0...v6.0.0) (2021-06-18)

### ⚠ BREAKING CHANGES

- `parseGameCode` has no longer been able to parse
  American games due to API changes. Until now you would get an empty
  string back and a deprecation warning.
  Starting this version you will instead get `null`
  back and the deprecation warning has been removed.

### Features

- update typings for `getGamesAmerica` ([5b162b4](https://github.com/lmmfranco/nintendo-switch-eshop/commit/5b162b4e7e3aaf9a2ab828f0e48ed14917667695))

### Bug Fixes

- **esm:** delete `__esModule` key ([523e2a5](https://github.com/lmmfranco/nintendo-switch-eshop/commit/523e2a5325033e303a2ea774545ba58ce6cd4b2d)), closes [#471](https://github.com/lmmfranco/nintendo-switch-eshop/issues/471)

## [5.1.0](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v5.0.0...v5.1.0) (2021-03-05)

### Features

- bundle ESM compatible exports ([b58a3aa](https://github.com/lmmfranco/nintendo-switch-eshop/commit/b58a3aa61c34a7ba2dbf8ac65379090f8a483cfa))

### Bug Fixes

- **getqueriedgamesamerica:** fixed type exports and TSDoc ([103f028](https://github.com/lmmfranco/nintendo-switch-eshop/commit/103f0283ab69e142238a881b7450c1587fcab39e))

## [5.0.0](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v4.0.0...v5.0.0) (2021-03-05)

### ⚠ BREAKING CHANGES

- **getqueriedgamesamerica:** The return structure has changed. Please refer to updated documentation or
  TypeScript information.

### Bug Fixes

- **getqueriedgamesamerica:** fixed getQueriedGamesAmerica which was broken as per API changes ([5c32023](https://github.com/lmmfranco/nintendo-switch-eshop/commit/5c32023c89db2be01753b2f27c7b9c3e68c9694b)), closes [#374](https://github.com/lmmfranco/nintendo-switch-eshop/issues/374)

## [4.0.0](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v3.0.3...v4.0.0) (2020-10-31)

### ⚠ BREAKING CHANGES

- use getQueriedGamesAmerica to get games based on a given query. For example when
  your users can perform a search (just like on the nintendo.com website) you can use this to severly
  limit the results to go through.
- The repo files have been moved around a lot. This probably won't impact
  you too much, but if you were importing from a specific path (not the root of
  require('nintendo-switch-eshop')) then you'll have to change your imports.
- **api:** getGamesAmerica no longer takes any parameters and
  should always return all games.

Co-authored-by: Jeroen Claassens <support@favware.tech>

### Features

- add getQueriedGamesAmerica ([bfc1830](https://github.com/lmmfranco/nintendo-switch-eshop/commit/bfc18301af2325286810ae8342d708a6771c3132))
- restructure repo ([59ead46](https://github.com/lmmfranco/nintendo-switch-eshop/commit/59ead46ba2c2cbdfe7f3ffcddc53a144dbf7391f))

### Bug Fixes

- **api:** updated getgamesamerica algolia request to retrieve all games ([#281](https://github.com/lmmfranco/nintendo-switch-eshop/issues/281)) ([2ace2cc](https://github.com/lmmfranco/nintendo-switch-eshop/commit/2ace2ccfd6f90894b327861f344aa3217d85a5f7))

### [3.0.3](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v3.0.2...v3.0.3) (2020-09-10)

### [3.0.2](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v3.0.1...v3.0.2) (2020-07-08)

### [3.0.1](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v3.0.0...v3.0.1) (2020-02-04)

## [3.0.0](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v2.2.8...v3.0.0) (2020-02-04)

### ⚠ BREAKING CHANGES

- getGamesAmerica's options no longer takes a "shop" property

- remove the "shop" property from getGamesAmerica ([15a8a3c](https://github.com/lmmfranco/nintendo-switch-eshop/commit/15a8a3c58c94d6e0e3180458da0c8dc526a4bea2)), closes [#124](https://github.com/lmmfranco/nintendo-switch-eshop/issues/124)

### [2.2.8](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v2.2.7...v2.2.8) (2019-12-20)

### [2.2.7](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v2.2.6...v2.2.7) (2019-12-10)

### Bug Fixes

- update getGamesJapan ([#97](https://github.com/lmmfranco/nintendo-switch-eshop/issues/97)) ([c351038](https://github.com/lmmfranco/nintendo-switch-eshop/commit/c3510381e340821842c85bf257a83851f414329e))

### [2.2.6](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v2.2.5...v2.2.6) (2019-11-27)

### Bug Fixes

- jp nsuid parsing & tslib dep ([2bf5629](https://github.com/lmmfranco/nintendo-switch-eshop/commit/2bf56291fdd762b1dced28c11be23f3e7e1763aa)), closes [#90](https://github.com/lmmfranco/nintendo-switch-eshop/issues/90) [#91](https://github.com/lmmfranco/nintendo-switch-eshop/issues/91)

### [2.2.5](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v2.2.4...v2.2.5) (2019-11-22)

### Bug Fixes

- fixed getGamesAmerica ([83d8934](https://github.com/lmmfranco/nintendo-switch-eshop/commit/83d89348cdec76483f7839f798289e6780b64c82))

## [2.2.4](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v2.2.3...v2.2.4) (2019-10-30)

**Note:** Version bump only for package nintendo-switch-eshop

## [2.2.3](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v2.2.2...v2.2.3) (2019-09-11)

### Bug Fixes

- typing get games america ([2d756b9](https://github.com/lmmfranco/nintendo-switch-eshop/commit/2d756b9))

## 2.2.2 (2019-08-24)

**Note:** Version bump only for package nintendo-switch-eshop

## [2.2.1] - 2019-08-05

### Fixes

- Fixed `getShopsByCountryCodes` by building with rollup-plugin-json included

## [2.2.0] - 2019-08-01

### Fixes

- Fixed `getGamesAmerica` to use the new Algolia based API. At last! Many thanks to @endy124 for their work on this!

### Changed

- Restructured project
  - Now produces optimal bundles with Rollup
  - Proper JSDoc generation
  - Keeping a changelog
  - Cleaner editorconfig and thus coding style
  - GitHub issue and pull request and a contributing guide
  - Better CircleCI configuration

## [2.1.1] - 2019-02-26

### Fixes

- Moved `@types/country-data` to devDependencies thinking that would be okay but apparently it is not as it breaks TypeScript builds. So sorry! This should fix these kind of errors that were present in v2.1.0:

## [2.1.0] - 2019-02-26

### Fixes

- Get rid of Gulp for development environment => NPM Scripts suffice just fine
- Move `@types` to devDependencies where they belong => No more installed along with the package
- Change to terser-folder => Better ES6 support
- Fixed looping in `getGamesAmerica` => The lib loops for you again now, sorry for breaking that!
- Fixed looping in `getPrices` => Related to the other looping issue, now fixed again!

### Added

- Expose `GameUS`, `GameEU` and `GameJP` interface for TypeScript users
- Allow for the `getGamesAmerica` `shop` property to be `'unfiltered'`. This will remove the property from the API request and return everything possible

### Changed

- We now also test that looping of `getGamesAmerica` works properly

## [2.0.1] - 2019-01-19

### Changed

- BREAKING: Completely rewritten from the ground up!! Not compatible with v1.x!
- Reworked in TypeScript
- Now uses async/await rather than promises
- Minified production builds
- Importing syntax changed

## [1.1.2] - 2018-07-20

### Fixed

- Fixed critical issue on getGamesAmerica request

## [1.1.1] - 2018-07-13

### Added

- Optional shop request params

## [1.1.0] - 2018-02-23

### Added

- Request options

## [1.0.7] - 2017-08-01

### Changed

- getGamesJP to comply with new API

## [1.0.6] - 2017-06-23

### Changed

- Further improvements to overall system stability and other minor adjustments have been made to enhance the user experience

## [1.0.3] - 2017-06-05

### Added

- Lib files

[2.2.1]: https://github.com/lmmfranco/nintendo-switch-eshop/compare/2.2.0...2.2.1
[2.2.0]: https://github.com/lmmfranco/nintendo-switch-eshop/compare/2.1.1...2.2.0
[2.1.1]: https://github.com/lmmfranco/nintendo-switch-eshop/compare/2.1.0...2.1.1
[2.1.0]: https://github.com/lmmfranco/nintendo-switch-eshop/compare/2.0.1...2.1.0
[2.0.1]: https://github.com/lmmfranco/nintendo-switch-eshop/compare/1.1.2...2.0.1
[1.1.2]: https://github.com/lmmfranco/nintendo-switch-eshop/compare/1.1.1...1.1.2
[1.1.1]: https://github.com/lmmfranco/nintendo-switch-eshop/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/lmmfranco/nintendo-switch-eshop/compare/1.0.7...1.1.0
[1.0.7]: https://github.com/lmmfranco/nintendo-switch-eshop/compare/1.0.6...1.0.7
[1.0.6]: https://github.com/lmmfranco/nintendo-switch-eshop/compare/1.0.3...1.0.6
[1.0.3]: https://github.com/lmmfranco/nintendo-switch-eshop/releases/tag/1.0.3
