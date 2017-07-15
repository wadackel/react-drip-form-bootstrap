# react-drip-form-bootstrap

[rdf]:https://github.com/tsuyoshiwada/react-drip-form
[rbs]:https://github.com/react-bootstrap/react-bootstrap
[demo]:https://tsuyoshiwada.github.io/react-drip-form-bootstrap/
[validationstate]:#getvalidationstate

[![Build Status](http://img.shields.io/travis/tsuyoshiwada/react-drip-form-bootstrap.svg?style=flat-square)](https://travis-ci.org/tsuyoshiwada/react-drip-form-bootstrap)
[![Codecov](https://img.shields.io/codecov/c/github/tsuyoshiwada/react-drip-form-bootstrap.svg?style=flat-square)](https://codecov.io/gh/tsuyoshiwada/react-drip-form-bootstrap)
[![npm version](https://img.shields.io/npm/v/react-drip-form-bootstrap.svg?style=flat-square)](http://badge.fury.io/js/react-drip-form-bootstrap)

> [React Bootstrap][rbs] component set for [react-drip-form][rdf].

https://tsuyoshiwada.github.io/react-drip-form-bootstrap/




## Table Of Contents

* [DEMO](#demo)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Usage](#usage)
* [API](#api)
  * [getValidationState](#getvalidationstate)
  * [Checkbox](#checkbox)
  * [FieldGroup](#fieldgroup)
  * [HorizontalInput](#horizontalinput)
  * [HorizontalSelect](#horizontalselect)
  * [HorizontalTextarea](#horizontaltextarea)
  * [InlineInput](#inlineinput)
  * [InlineSelect](#inlineselect)
  * [Input](#input)
  * [Radio](#radio)
  * [Select](#select)
  * [Textarea](#textarea)
* [Related projects](#related-projects)
* [Contribute](#contribute)
* [License](#license)




## DEMO

See [Live Demo][demo].




## Getting Started

### Installation

[react-drip-form][rdf] and [react-bootstrap][rbs] must also be installed.

```bash
$ npm install --save react-bootstrap
$ npm install --save react-drip-form
$ npm install --save react-drip-form-bootstrap
```


### Usage

```javascript
import React from 'react';
import { dripForm } from 'react-drip-form';
import { Form, FormGroup, Button } from 'react-bootstrap';
import {
  Checkbox,
  FieldGroup,
  Input,
  Radio,
  Select,
  Textarea,
} from 'react-drip-form-bootstrap';

const SampleForm = ({ handlers }) => (
  <Form onSubmit={handlers.onSubmit}>
    <Input
      type="text"
      name="text"
      label="Text Field"
      labelText="Text Field"
      placeholder="placeholder..."
      addonBefore={<InputGroup.Addon>Before</InputGroup.Addon>}
    />

    <Textarea
      name="textarea"
      label="Textarea Field"
      labelText="Textarea Field"
      placeholder="placeholder..."
      addonAfter={<InputGroup.Addon>After</InputGroup.Addon>}
    />

    <Select
      name="select"
      label="Select Field"
      labelText="Select Field"
    >
      <option value="">Select option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>

    <FormGroup>
      <ControlLabel>Checkbox Group</ControlLabel>
      <FieldGroup
        multiple
        name="checkboxGroup"
        label="Checkbox Group"
      >
        <Checkbox value="checkbox1">Checkbox 1</Checkbox>
        <Checkbox value="checkbox2">Checkbox 2</Checkbox>
        <Checkbox value="checkbox3">Checkbox 3</Checkbox>
      </FieldGroup>
    </FormGroup>

    <FormGroup>
      <ControlLabel>Radio Group</ControlLabel>
      <FieldGroup
        name="radioGroup"
        label="Radio Group"
      >
        <Radio value="radio1">Radio 1</Radio>
        <Radio value="radio2">Radio 2</Radio>
        <Radio value="radio3">Radio 3</Radio>
      </FieldGroup>
    </FormGroup>

    <FormGroup>
      <Button onClick={handlers.onSubmit}>Submit</Button>
    </FormGroup>
  </Form>
);
```

Inline layout and horizontal layout are also supported. For details, please refer to [Live DEMO][demo].




## API

All other than Props described below are the same as [React Bootstrap][rbs].


### getValidationState

It is a function for determining the validation state. It takes a field Props as an argument and returns `'error'` or `null`.

By default the following code is used.

```javascript
({ meta }) => (meta.error && meta.touched && meta.dirty) ? 'error' : null
```



### Checkbox

It's a Checkbox Component.

| Props                | Default                | Type       | Description                                |
|:---------------------|:-----------------------|:-----------|:-------------------------------------------|
| `getValidationState` | [see][validationstate] | `Function` | ref: [getValidationState][validationstate] |


### FieldGroup

It's a FieldGroup Component.

| Props                | Default                | Type            | Description                                            |
|:---------------------|:-----------------------|:----------------|:-------------------------------------------------------|
| `children`           | `undefined`            | `React$Element` | Specify child elements such as `Checkbox` and `Radio`. |
| `getValidationState` | [see][validationstate] | `Function`      | ref: [getValidationState][validationstate]             |


### HorizontalInput

It's `<Input />` Component of the horizontal layout.

| Props                | Default                | Type            | Description                                                                                      |
|:---------------------|:-----------------------|:----------------|:-------------------------------------------------------------------------------------------------|
| `id`                 | `undefined`            | `string`        | The ID that you specify for `FormGroup.controlId`, `ControlLabel.htmlFor`, and `FormControl.id`. |
| `bsSize`             | `undefined`            | `string`        | The size of the `FormGroup`, `ControlLabel` and `FormControl`.                                   |
| `groupProps`         | `{}`                   | `Object`        | Props passed to `FormGroup`.                                                                     |
| `labelColProps`      | `{}`                   | `Object`        | Props passed to `<Col componentClass={ControlLabel} />`.                                         |
| `labelText`          | `undefined`            | `React$Element` | The label of the field. `ControlLabel` is used for label rendering.                              |
| `controlColProps`    | `{}`                   | `Object`        | Props passed to `Col`.                                                                           |
| `inputGroupProps`    | `{}`                   | `Object`        | Props passed to `InputGroup`. Valid only when `addonBefore` or` addonAfter` is specified.        |
| `addonBefore`        | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `addonAfter`         | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `getValidationState` | [see][validationstate] | `Function`      | ref: [getValidationState][validationstate]                                                       |


### HorizontalSelect

It's `<Select />` Component of the horizontal layout.

| Props                | Default                | Type            | Description                                                                                      |
|:---------------------|:-----------------------|:----------------|:-------------------------------------------------------------------------------------------------|
| `id`                 | `undefined`            | `string`        | The ID that you specify for `FormGroup.controlId`, `ControlLabel.htmlFor`, and `FormControl.id`. |
| `bsSize`             | `undefined`            | `string`        | The size of the `FormGroup`, `ControlLabel` and `FormControl`.                                   |
| `groupProps`         | `{}`                   | `Object`        | Props passed to `FormGroup`.                                                                     |
| `labelColProps`      | `{}`                   | `Object`        | Props passed to `<Col componentClass={ControlLabel} />`.                                         |
| `labelText`          | `undefined`            | `React$Element` | The label of the field. `ControlLabel` is used for label rendering.                              |
| `controlColProps`    | `{}`                   | `Object`        | Props passed to `Col`.                                                                           |
| `inputGroupProps`    | `{}`                   | `Object`        | Props passed to `InputGroup`. Valid only when `addonBefore` or` addonAfter` is specified.        |
| `addonBefore`        | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `addonAfter`         | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `getValidationState` | [see][validationstate] | `Function`      | ref: [getValidationState][validationstate]                                                       |


### HorizontalTextarea

It's `<Textarea />` Component of the horizontal layout.

| Props                | Default                | Type            | Description                                                                                      |
|:---------------------|:-----------------------|:----------------|:-------------------------------------------------------------------------------------------------|
| `id`                 | `undefined`            | `string`        | The ID that you specify for `FormGroup.controlId`, `ControlLabel.htmlFor`, and `FormControl.id`. |
| `bsSize`             | `undefined`            | `string`        | The size of the `FormGroup`, `ControlLabel` and `FormControl`.                                   |
| `groupProps`         | `{}`                   | `Object`        | Props passed to `FormGroup`.                                                                     |
| `labelColProps`      | `{}`                   | `Object`        | Props passed to `<Col componentClass={ControlLabel} />`.                                         |
| `labelText`          | `undefined`            | `React$Element` | The label of the field. `ControlLabel` is used for label rendering.                              |
| `controlColProps`    | `{}`                   | `Object`        | Props passed to `Col`.                                                                           |
| `inputGroupProps`    | `{}`                   | `Object`        | Props passed to `InputGroup`. Valid only when `addonBefore` or` addonAfter` is specified.        |
| `addonBefore`        | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `addonAfter`         | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `getValidationState` | [see][validationstate] | `Function`      | ref: [getValidationState][validationstate]                                                       |


### InlineInput

It's `<Input />` Component of the inline layout.

> Note: For inline layout, no error message is displayed.

| Props                | Default                | Type            | Description                                                                                      |
|:---------------------|:-----------------------|:----------------|:-------------------------------------------------------------------------------------------------|
| `id`                 | `undefined`            | `string`        | The ID that you specify for `FormGroup.controlId`, `ControlLabel.htmlFor`, and `FormControl.id`. |
| `bsSize`             | `undefined`            | `string`        | The size of the `FormGroup`, `ControlLabel` and `FormControl`.                                   |
| `groupProps`         | `{}`                   | `Object`        | Props passed to `FormGroup`.                                                                     |
| `labelProps`         | `{}`                   | `Object`        | Props passed to `ControlLabel`.                                                                  |
| `labelText`          | `undefined`            | `React$Element` | The label of the field. `ControlLabel` is used for label rendering.                              |
| `inputGroupProps`    | `{}`                   | `Object`        | Props passed to `InputGroup`. Valid only when `addonBefore` or` addonAfter` is specified.        |
| `addonBefore`        | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `addonAfter`         | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `getValidationState` | [see][validationstate] | `Function`      | ref: [getValidationState][validationstate]                                                       |


### InlineSelect

It's `<Select />` Component of the inline layout.

> Note: For inline layout, no error message is displayed.

| Props                | Default                | Type            | Description                                                                                      |
|:---------------------|:-----------------------|:----------------|:-------------------------------------------------------------------------------------------------|
| `id`                 | `undefined`            | `string`        | The ID that you specify for `FormGroup.controlId`, `ControlLabel.htmlFor`, and `FormControl.id`. |
| `bsSize`             | `undefined`            | `string`        | The size of the `FormGroup`, `ControlLabel` and `FormControl`.                                   |
| `groupProps`         | `{}`                   | `Object`        | Props passed to `FormGroup`.                                                                     |
| `labelProps`         | `{}`                   | `Object`        | Props passed to `ControlLabel`.                                                                  |
| `labelText`          | `undefined`            | `React$Element` | The label of the field. `ControlLabel` is used for label rendering.                              |
| `inputGroupProps`    | `{}`                   | `Object`        | Props passed to `InputGroup`. Valid only when `addonBefore` or` addonAfter` is specified.        |
| `addonBefore`        | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `addonAfter`         | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `getValidationState` | [see][validationstate] | `Function`      | ref: [getValidationState][validationstate]                                                       |


### Input

It's Input Component.

| Props                | Default                | Type            | Description                                                                                      |
|:---------------------|:-----------------------|:----------------|:-------------------------------------------------------------------------------------------------|
| `id`                 | `undefined`            | `string`        | The ID that you specify for `FormGroup.controlId`, `ControlLabel.htmlFor`, and `FormControl.id`. |
| `bsSize`             | `undefined`            | `string`        | The size of the `FormGroup`, `ControlLabel` and `FormControl`.                                   |
| `groupProps`         | `{}`                   | `Object`        | Props passed to `FormGroup`.                                                                     |
| `labelProps`         | `{}`                   | `Object`        | Props passed to `ControlLabel`.                                                                  |
| `labelText`          | `undefined`            | `React$Element` | The label of the field. `ControlLabel` is used for label rendering.                              |
| `inputGroupProps`    | `{}`                   | `Object`        | Props passed to `InputGroup`. Valid only when `addonBefore` or` addonAfter` is specified.        |
| `addonBefore`        | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `addonAfter`         | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `getValidationState` | [see][validationstate] | `Function`      | ref: [getValidationState][validationstate]                                                       |


### Radio

It's a Radio Component.

| Props                | Default                | Type       | Description                                |
|:---------------------|:-----------------------|:-----------|:-------------------------------------------|
| `getValidationState` | [see][validationstate] | `Function` | ref: [getValidationState][validationstate] |


### Select

It's Select Component.

| Props                | Default                | Type            | Description                                                                                      |
|:---------------------|:-----------------------|:----------------|:-------------------------------------------------------------------------------------------------|
| `id`                 | `undefined`            | `string`        | The ID that you specify for `FormGroup.controlId`, `ControlLabel.htmlFor`, and `FormControl.id`. |
| `bsSize`             | `undefined`            | `string`        | The size of the `FormGroup`, `ControlLabel` and `FormControl`.                                   |
| `groupProps`         | `{}`                   | `Object`        | Props passed to `FormGroup`.                                                                     |
| `labelProps`         | `{}`                   | `Object`        | Props passed to `ControlLabel`.                                                                  |
| `labelText`          | `undefined`            | `React$Element` | The label of the field. `ControlLabel` is used for label rendering.                              |
| `inputGroupProps`    | `{}`                   | `Object`        | Props passed to `InputGroup`. Valid only when `addonBefore` or` addonAfter` is specified.        |
| `addonBefore`        | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `addonAfter`         | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `getValidationState` | [see][validationstate] | `Function`      | ref: [getValidationState][validationstate]                                                       |


### Textarea

It's Textarea Component.

| Props                | Default                | Type            | Description                                                                                      |
|:---------------------|:-----------------------|:----------------|:-------------------------------------------------------------------------------------------------|
| `id`                 | `undefined`            | `string`        | The ID that you specify for `FormGroup.controlId`, `ControlLabel.htmlFor`, and `FormControl.id`. |
| `bsSize`             | `undefined`            | `string`        | The size of the `FormGroup`, `ControlLabel` and `FormControl`.                                   |
| `groupProps`         | `{}`                   | `Object`        | Props passed to `FormGroup`.                                                                     |
| `labelProps`         | `{}`                   | `Object`        | Props passed to `ControlLabel`.                                                                  |
| `labelText`          | `undefined`            | `React$Element` | The label of the field. `ControlLabel` is used for label rendering.                              |
| `inputGroupProps`    | `{}`                   | `Object`        | Props passed to `InputGroup`. Valid only when `addonBefore` or` addonAfter` is specified.        |
| `addonBefore`        | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `addonAfter`         | `undefined`            | `React$Element` | Specify `InputGroup.Addon` component.                                                            |
| `getValidationState` | [see][validationstate] | `Function`      | ref: [getValidationState][validationstate]                                                       |




## Related projects

* [tsuyoshiwada/react-drip-form][rdf]




## Contribute

1. Fork it!
1. Create your feature branch: git checkout -b my-new-feature
1. Commit your changes: git commit -am 'Add some feature'
1. Push to the branch: git push origin my-new-feature
1. Submit a pull request :D

Bugs, feature requests and comments are more than welcome in the [issues](https://github.com/tsuyoshiwada/react-drip-form-bootstrap/issues).




## License

[MIT © tsuyoshiwada](./LICENSE)

