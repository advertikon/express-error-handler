# [2.9.0](https://github.com/advertikon/express-error-handler/compare/v2.8.0...v2.9.0) (2023-10-29)


### Features

* add CreateErrorByCode method ([9f7249f](https://github.com/advertikon/express-error-handler/commit/9f7249f86d46ed047c0fd3890ccce11859d2c925))

# [2.8.0](https://github.com/advertikon/express-error-handler/compare/v2.7.2...v2.8.0) (2023-10-19)


### Features

* export HTTP_ERROR enum ([a0bc81c](https://github.com/advertikon/express-error-handler/commit/a0bc81ccc66e654baed30553d555ed5b42a35d9b))

## [2.7.2](https://github.com/advertikon/express-error-handler/compare/v2.7.1...v2.7.2) (2023-10-18)


### Bug Fixes

* change how Zod error is formatted ([aadf1af](https://github.com/advertikon/express-error-handler/commit/aadf1af413f92abb5465d5e437f5cb75511ec52f))

## [2.7.1](https://github.com/advertikon/express-error-handler/compare/v2.7.0...v2.7.1) (2023-09-02)


### Bug Fixes

* add cause when create validaton error ([e48ece5](https://github.com/advertikon/express-error-handler/commit/e48ece5a6d8fe05aad0271163fb9f5d97d33ae7a))

# [2.7.0](https://github.com/advertikon/express-error-handler/compare/v2.6.0...v2.7.0) (2023-09-02)


### Features

* add option to suppress error message ([1e06101](https://github.com/advertikon/express-error-handler/commit/1e061015efcdf1af4d3ce9a245082fdd6b9747fb))

# [2.6.0](https://github.com/advertikon/express-error-handler/compare/v2.5.0...v2.6.0) (2023-09-02)


### Features

* make list of unlogable errors configurable ([da1434e](https://github.com/advertikon/express-error-handler/commit/da1434e0b0a650875884ccc85192fc841fcc66b0))

# [2.5.0](https://github.com/advertikon/express-error-handler/compare/v2.4.0...v2.5.0) (2023-07-16)


### Features

* add support for 5xx error codes ([6924bca](https://github.com/advertikon/express-error-handler/commit/6924bcaf7144dc54848bfca81d72713663e3a723))

# [2.4.0](https://github.com/advertikon/express-error-handler/compare/v2.3.0...v2.4.0) (2023-07-09)


### Features

* take request ID from reaquest object ([ac0ac09](https://github.com/advertikon/express-error-handler/commit/ac0ac091ffeeb470dfce90c75b642058645002f4))

# [2.3.0](https://github.com/advertikon/express-error-handler/compare/v2.2.0...v2.3.0) (2023-07-09)


### Features

* use request ID as error tracking code ([eb4b01d](https://github.com/advertikon/express-error-handler/commit/eb4b01d3980a0828a1365470431448958d1ba3b0))

# [2.2.0](https://github.com/advertikon/express-error-handler/compare/v2.1.1...v2.2.0) (2023-02-05)


### Features

* FetchError can fetch validation message ([d38c417](https://github.com/advertikon/express-error-handler/commit/d38c417bdcda930a57bdd6ccf427aa154a4f3559))

## [2.1.1](https://github.com/advertikon/express-error-handler/compare/v2.1.0...v2.1.1) (2022-10-09)


### Bug Fixes

* fix logable state bug ([7ccc393](https://github.com/advertikon/express-error-handler/commit/7ccc3935aa7377ac79e376c36ec2ea94dca4f9b8))

# [2.1.0](https://github.com/advertikon/express-error-handler/compare/v2.0.1...v2.1.0) (2022-10-08)


### Features

* add yup validation error support ([c597fca](https://github.com/advertikon/express-error-handler/commit/c597fca1298d0dad699f8994f6494b1108becac7))
* yup error fix, do not log validation and auth errors ([e1fa3c2](https://github.com/advertikon/express-error-handler/commit/e1fa3c27fcefa5c9844e9ebaab1bf54981ce40b5))

## [2.0.1](https://github.com/advertikon/express-error-handler/compare/v2.0.0...v2.0.1) (2022-10-08)


### Bug Fixes

* reformat ZodError message, switch to esnext module ([8ed3cdb](https://github.com/advertikon/express-error-handler/commit/8ed3cdbd60f3778f29a4288f240d7c49996c2945))

# [2.0.0](https://github.com/advertikon/express-error-handler/compare/v1.1.1...v2.0.0) (2022-10-07)


### Performance Improvements

* new release ([1588a24](https://github.com/advertikon/express-error-handler/commit/1588a2450b874493bd3d81f0be43b034a12a0aa3))


### BREAKING CHANGES

* Custom errors removed

## [1.1.1](https://github.com/advertikon/express-error-handler/compare/v1.1.0...v1.1.1) (2022-10-07)


### Performance Improvements

* Switch to VError ([083759a](https://github.com/advertikon/express-error-handler/commit/083759a2bb29fcb46ddb06eab5c0c27945bfd933))

# [1.1.0](https://github.com/advertikon/express-error-handler/compare/v1.0.1...v1.1.0) (2022-10-07)


### Features

* new release ([7020c19](https://github.com/advertikon/express-error-handler/commit/7020c196bad67e5b43c8658d9af040a732d2cd80))

## [1.0.1](https://github.com/advertikon/express-error-handler/compare/v1.0.0...v1.0.1) (2022-10-07)


### Performance Improvements

* New version ([3c29daf](https://github.com/advertikon/express-error-handler/commit/3c29daf00b93866d795be5d4f7bdbc5df1ef35a0))

# 1.0.0 (2022-10-07)


### Bug Fixes

* add semantic release ([cfce57e](https://github.com/advertikon/express-error-handler/commit/cfce57e640b40d842cc3138036cbdf11040ec344))
* change validation error status text ([118051d](https://github.com/advertikon/express-error-handler/commit/118051df07b79f31c930a233aa7b526ea975a29f))
* fix "loger" typo ([d6d547e](https://github.com/advertikon/express-error-handler/commit/d6d547e58980cc04f136b0d45216909c60924f1e))
* fix BaseException handling ([e43e3e0](https://github.com/advertikon/express-error-handler/commit/e43e3e0ad949e58ca9e6b999a62f55904399f3fa))
* preserve BadRequest Exception message ([763e63a](https://github.com/advertikon/express-error-handler/commit/763e63acf0d153bba275452bdc2b64665ba97cec))


### Features

* add Sentry support ([5027121](https://github.com/advertikon/express-error-handler/commit/5027121aa1b5bf71b5463126ec552415c400227e))
* add Tea Pot exception ([90c1f10](https://github.com/advertikon/express-error-handler/commit/90c1f10223c3a3b311623c3265c76618a04b614f))
* add Zod support ([1e45cd3](https://github.com/advertikon/express-error-handler/commit/1e45cd310eaf21c61222ddfc6b0cfb518d02f375))
* bach to CommonJs ([e493125](https://github.com/advertikon/express-error-handler/commit/e493125f123183867ccc673bdf53b12c9bd56139))
* migrate to ts esnext ([1f5fd73](https://github.com/advertikon/express-error-handler/commit/1f5fd73f13fb669d0615ecc722731df5ca0a7332))
