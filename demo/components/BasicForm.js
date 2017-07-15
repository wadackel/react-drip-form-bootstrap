import React from 'react';
import { dripForm, FormPropTypes } from 'react-drip-form';
import { Form, FormGroup, ControlLabel, InputGroup, Button } from 'react-bootstrap';
import {
  Checkbox,
  FieldGroup,
  Radio,
  Input,
  Select,
  Textarea,
} from '../../src/';


const BasicForm = ({ handlers }) => (
  <Form onSubmit={handlers.onSubmit}>
    <h2>Basic Form</h2>

    <Input
      type="text"
      name="text"
      label="Text"
      labelText="Text"
      placeholder="Basic text"
    />

    <Input
      type="text"
      name="textWithAddon"
      label="Text with Addon"
      labelText="Text with Addon"
      placeholder="Basic text with addon"
      addonBefore={<InputGroup.Addon>Before</InputGroup.Addon>}
      addonAfter={<InputGroup.Addon>After</InputGroup.Addon>}
    />

    <Textarea
      name="textarea"
      label="Textarea"
      labelText="Textarea"
      placeholder="Basic textarea"
    />

    <Textarea
      name="textareaWithAddon"
      label="Textarea with Addon"
      labelText="Textarea with Addon"
      placeholder="Basic textarea with addon"
      addonBefore={<InputGroup.Addon>Before</InputGroup.Addon>}
      addonAfter={<InputGroup.Addon>After</InputGroup.Addon>}
    />

    <Select
      name="select"
      label="Select"
      labelText="Select"
    >
      <option value="">Select option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>

    <Select
      name="selectWithAddon"
      label="Select with Addon"
      labelText="Select with Addon"
      addonBefore={<InputGroup.Addon>Before</InputGroup.Addon>}
      addonAfter={<InputGroup.Addon>After</InputGroup.Addon>}
    >
      <option value="">Select option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>

    <Select
      multiple
      name="selectMultiple"
      label="Select Multiple"
      labelText="Select Multiple"
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>

    <FormGroup>
      <ControlLabel>Checkbox (only)</ControlLabel>
      <Checkbox
        name="checkbox"
        label="Checkbox"
        value="yes"
      >
        Checkbox
      </Checkbox>
    </FormGroup>

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

      <div style={{ margin: '0.5em 0' }} />

      <FieldGroup
        multiple
        name="checkboxGroupInline"
        label="Checkbox Group Inline"
      >
        <Checkbox inline value="inline1">Inline 1</Checkbox>
        <Checkbox inline value="inline2">Inline 2</Checkbox>
        <Checkbox inline value="inline3">Inline 3</Checkbox>
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

      <FieldGroup
        name="radioGroupInline"
        label="Radio Group Inline"
      >
        <Radio inline value="inline1">Inline 1</Radio>
        <Radio inline value="inline2">Inline 2</Radio>
        <Radio inline value="inline3">Inline 3</Radio>
      </FieldGroup>
    </FormGroup>

    <FormGroup>
      <Button onClick={handlers.onSubmit}>Submit</Button>
    </FormGroup>
  </Form>
);

BasicForm.propTypes = FormPropTypes;


export default dripForm({
  validations: {
    text: { required: true },
    textWithAddon: { required: true },
    textarea: { required: true },
    textareaWithAddon: { required: true },
    select: { required: true },
    selectWithAddon: { required: true },
    selectMultiple: { required: true },
    checkbox: { required: true },
    checkboxGroup: { required: true },
    checkboxGroupInline: { required: true },
    radioGroup: { required: true },
    radioGroupInline: { required: true },
  },
})(BasicForm);
