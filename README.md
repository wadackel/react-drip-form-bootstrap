# react-drip-form-bootstrap

[![Build Status](http://img.shields.io/travis/tsuyoshiwada/react-drip-form-bootstrap.svg?style=flat-square)](https://travis-ci.org/tsuyoshiwada/react-drip-form-bootstrap)
[![Codecov](https://img.shields.io/codecov/c/github/tsuyoshiwada/react-drip-form-bootstrap.svg?style=flat-square)](https://codecov.io/gh/tsuyoshiwada/react-drip-form-bootstrap)
[![npm version](https://img.shields.io/npm/v/react-drip-form-bootstrap.svg?style=flat-square)](http://badge.fury.io/js/react-drip-form-bootstrap)

> [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) component set for [react-drip-form](https://github.com/tsuyoshiwada/react-drip-form).

https://tsuyoshiwada.github.io/react-drip-form-bootstrap/




## Table Of Contents

<!-- vim-markdown-toc Redcarpet -->
* [DEMO](#demo)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Usage](#usage)
* [API](#api)
  * [getValidationState](#getvalidationstate)
* [Related projects](#related-projects)
* [Contribute](#contribute)
* [License](#license)

<!-- vim-markdown-toc -->




## DEMO

[![Screenshot](https://raw.githubusercontent.com/tsuyoshiwada/react-drip-form-bootstrap/artwork/demo-screenshot.png)](https://tsuyoshiwada.github.io/react-drip-form-bootstrap/)

See [Live Demo](https://tsuyoshiwada.github.io/react-drip-form-bootstrap/).




## Getting Started

### Installation

[react-drip-form](https://github.com/tsuyoshiwada/react-drip-form) must also be installed.

```bash
$ npm install --save react-drip-form
$ npm install --save react-drip-form-bootstrap
```


### Usage

```javascript
import React from 'react';
import { dripForm } from 'react-drip-form';

// todo
```




## API

todo...


### getValidationState

todo...

By default the following code is used.

```javascript
({ meta }) => (meta.error && meta.touched && meta.dirty) ? 'error' : null
```




## Related projects

* [tsuyoshiwada/react-drip-form](https://github.com/tsuyoshiwada/react-drip-form)




## Contribute

1. Fork it!
1. Create your feature branch: git checkout -b my-new-feature
1. Commit your changes: git commit -am 'Add some feature'
1. Push to the branch: git push origin my-new-feature
1. Submit a pull request :D

Bugs, feature requests and comments are more than welcome in the [issues](https://github.com/tsuyoshiwada/react-drip-form-bootstrap/issues).




## License

[MIT © tsuyoshiwada](./LICENSE)

