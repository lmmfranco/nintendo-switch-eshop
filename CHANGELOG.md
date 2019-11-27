# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.2.6](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v2.2.5...v2.2.6) (2019-11-27)


### Bug Fixes

* jp nsuid parsing & tslib dep ([2bf5629](https://github.com/lmmfranco/nintendo-switch-eshop/commit/2bf56291fdd762b1dced28c11be23f3e7e1763aa)), closes [#90](https://github.com/lmmfranco/nintendo-switch-eshop/issues/90) [#91](https://github.com/lmmfranco/nintendo-switch-eshop/issues/91)

### [2.2.5](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v2.2.4...v2.2.5) (2019-11-22)


### Bug Fixes

* fixed getGamesAmerica ([83d8934](https://github.com/lmmfranco/nintendo-switch-eshop/commit/83d89348cdec76483f7839f798289e6780b64c82))

## [2.2.4](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v2.2.3...v2.2.4) (2019-10-30)

**Note:** Version bump only for package nintendo-switch-eshop





## [2.2.3](https://github.com/lmmfranco/nintendo-switch-eshop/compare/v2.2.2...v2.2.3) (2019-09-11)


### Bug Fixes

* typing get games america ([2d756b9](https://github.com/lmmfranco/nintendo-switch-eshop/commit/2d756b9))





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
