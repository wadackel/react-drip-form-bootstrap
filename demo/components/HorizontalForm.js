import React from 'react';
import { dripForm, FormPropTypes } from 'react-drip-form';
import { Form, FormGroup, ControlLabel, InputGroup, Button, Col } from 'react-bootstrap';
import {
  Checkbox,
  FieldGroup,
  Radio,
  HorizontalInput,
  HorizontalSelect,
  HorizontalTextarea,
} from '../../src/';


const HorizontalForm = ({ handlers }) => (
  <Form horizontal onSubmit={handlers.onSubmit}>
    <h2>Horizontal Form</h2>

    <HorizontalInput
      name="text"
      label="Text"
      labelText="Text"
      labelColProps={{ sm: 2 }}
      controlColProps={{ sm: 10 }}
    />

    <HorizontalInput
      name="textWithAddon"
      label="Text with Addon"
      labelText="Text with Addon"
      labelColProps={{ sm: 2 }}
      controlColProps={{ sm: 10 }}
      addonBefore={<InputGroup.Addon>Before</InputGroup.Addon>}
      addonAfter={<InputGroup.Addon>After</InputGroup.Addon>}
    />

    <HorizontalSelect
      name="select"
      label="Select"
      labelText="Select"
      labelColProps={{ sm: 2 }}
      controlColProps={{ sm: 10 }}
    >
      <option value="">Select option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </HorizontalSelect>

    <HorizontalSelect
      name="selectWithAddon"
      label="Select with Addon"
      labelText="Select with Addon"
      labelColProps={{ sm: 2 }}
      controlColProps={{ sm: 10 }}
      addonBefore={<InputGroup.Addon>Before</InputGroup.Addon>}
      addonAfter={<InputGroup.Button><Button>After</Button></InputGroup.Button>}
    >
      <option value="">Select option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </HorizontalSelect>

    <HorizontalSelect
      multiple
      name="selectMultiple"
      label="Select (multiple)"
      labelText="Select (multiple)"
      labelColProps={{ sm: 2 }}
      controlColProps={{ sm: 10 }}
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </HorizontalSelect>

    <HorizontalTextarea
      name="textarea"
      label="Textarea"
      labelText="Textarea"
      labelColProps={{ sm: 2 }}
      controlColProps={{ sm: 10 }}
    />

    <HorizontalTextarea
      name="textareaWithAddon"
      label="Textarea with Addon"
      labelText="Textarea with Addon"
      labelColProps={{ sm: 2 }}
      controlColProps={{ sm: 10 }}
      addonBefore={<InputGroup.Addon>Before</InputGroup.Addon>}
      addonAfter={<InputGroup.Addon>After</InputGroup.Addon>}
    />

    <FormGroup>
      <Col sm={2} componentClass={ControlLabel}>
        Checkbox (only)
      </Col>
      <Col sm={10}>
        <Checkbox
          name="checkbox"
          label="Checkbox"
          value="yes"
        >
          Checkbox
        </Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col sm={2} componentClass={ControlLabel}>
        Checkbox Group
      </Col>
      <Col sm={10}>
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
      </Col>
    </FormGroup>

    <FormGroup>
      <Col sm={2} componentClass={ControlLabel}>
        Radio Group
      </Col>
      <Col sm={10}>
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
          <Radio inline value="radio1">Radio 1</Radio>
          <Radio inline value="radio2">Radio 2</Radio>
          <Radio inline value="radio3">Radio 3</Radio>
        </FieldGroup>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button onClick={handlers.onSubmit}>Submit</Button>
      </Col>
    </FormGroup>
  </Form>
);

HorizontalForm.propTypes = FormPropTypes;


export default dripForm({
  validations: {
    text: { required: true },
    textWithAddon: { required: true },
    select: { required: true },
    selectWithAddon: { required: true },
    selectMultiple: { required: true },
    textarea: { required: true },
    textareaWithAddon: { required: true },
    checkbox: { required: true },
    checkboxGroup: { required: true },
    checkboxGroupInline: { required: true },
    radioGroup: { required: true },
    radioGroupInline: { required: true },
  },
})(HorizontalForm);
