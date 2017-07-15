/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Button } from 'react-bootstrap';
import Code from './Code';
import BasicForm from './BasicForm';
import InlineForm from './InlineForm';
import InlineWithAddonForm from './InlineWithAddonForm';
import HorizontalForm from './HorizontalForm';


const Divider = () => (
  <div style={{ margin: '6rem 0' }}>
    <hr />
  </div>
);


const handleSubmit = name => (values) => {
  console.group(`[${name}]`);
  console.log(values);
  console.groupEnd();
};


export default () => (
  <div>
    <header
      style={{
        margin: '0 0 6rem',
        padding: '6rem 0',
        borderBottom: '1px solid #f9f9f9',
      }}
    >
      <Grid>
        <h1 style={{ fontSize: '4rem' }}>react drip form</h1>
        <p>React Bootstrap component set for react-drip-form.</p>
        <p>
          <Button bsStyle="link" href="https://github.com/tsuyoshiwada/react-drip-form-bootstrap">GitHub</Button>
          <Button bsStyle="link" href="https://www.npmjs.com/package/react-drip-form-bootstrap">npm</Button>
        </p>
      </Grid>
    </header>

    <Grid>
      {/* Basic */}
      <BasicForm onValidSubmit={handleSubmit('BasicForm')} />
      <Code>{`
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
} from 'react-drip-form-bootstrap';


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
      `}</Code>
      <Divider />

      {/* Inline */}
      <InlineForm onValidSubmit={handleSubmit('Inline Form')} />
      <Code>{`
import React from 'react';
import { dripForm, FormPropTypes } from 'react-drip-form';
import { Form, Button } from 'react-bootstrap';
import { Checkbox, InlineInput, InlineSelect } from 'react-drip-form-bootstrap';


const InlineBasicForm = ({ handlers }) => (
  <Form inline onSubmit={handlers.onSubmit}>
    <h2>Inline Form</h2>

    <InlineInput
      type="text"
      name="text"
      labelText="Text"
      placeholder="Basic text field"
    />

    {' '}

    <InlineSelect
      name="select"
      labelText="Select"
    >
      <option value="">Select option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </InlineSelect>

    {' '}

    <Checkbox
      inline
      name="checkbox"
      label="Checkbox"
      value="yes"
    >
      Checkbox
    </Checkbox>

    {' '}

    <Button onClick={handlers.onSubmit}>Submit</Button>
  </Form>
);

InlineBasicForm.propTypes = FormPropTypes;


export default dripForm({
  validations: {
    text: { required: true },
    select: { required: true },
    checkbox: { required: true, truthy: true },
  },
})(InlineBasicForm);
      `}</Code>
      <Divider />

      <InlineWithAddonForm onValidSubmit={handleSubmit('Inline Form with Addon')} />
      <Code>{`
import React from 'react';
import { dripForm, FormPropTypes } from 'react-drip-form';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { InlineInput, InlineSelect } from 'react-drip-form-bootstrap';


const InlineWithAddonForm = ({ handlers }) => (
  <Form inline onSubmit={handlers.onSubmit}>
    <h2>Inline Form with Addon</h2>

    <InlineInput
      type="text"
      name="text"
      labelText="Text"
      placeholder="Basic text field"
      addonBefore={<InputGroup.Addon>@</InputGroup.Addon>}
      addonAfter={<InputGroup.Button><Button>Button</Button></InputGroup.Button>}
    />

    {' '}

    <InlineSelect
      name="select"
      labelText="Select"
      addonBefore={<InputGroup.Addon>Before</InputGroup.Addon>}
    >
      <option value="">Select option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </InlineSelect>

    {' '}

    <Button onClick={handlers.onSubmit}>Submit</Button>
  </Form>
);

InlineWithAddonForm.propTypes = FormPropTypes;


export default dripForm({
  validations: {
    text: { required: true },
    select: { required: true },
  },
})(InlineWithAddonForm);
      `}</Code>
      <Divider />

      {/* Horizontal */}
      <HorizontalForm onValidSubmit={handleSubmit('Horizontal Form')} />
      <Code>{`
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
      `}</Code>
    </Grid>

    <footer
      style={{
        margin: '10rem 0 0',
        padding: '10rem 0',
        background: '#f9f9f9',
      }}
    >
      <Grid>
        <p>© 2017 tsuyoshiwada.<br />react drip form Release under the MIT.</p>
      </Grid>
    </footer>
  </div>
);
