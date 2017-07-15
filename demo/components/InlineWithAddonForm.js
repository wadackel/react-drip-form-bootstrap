import React from 'react';
import { dripForm, FormPropTypes } from 'react-drip-form';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { InlineInput, InlineSelect } from '../../src/';


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
