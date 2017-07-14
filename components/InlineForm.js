import React from 'react';
import { dripForm, FormPropTypes } from 'react-drip-form';
import { Form, Button } from 'react-bootstrap';
import { Checkbox, InlineInput, InlineSelect } from '../../src/';


const InlineBasicForm = ({ handlers }) => (
  <Form inline onSubmit={handlers.onSubmit}>
    <h2>Inline Form</h2>

    <InlineInput
      type="text"
      name="text"
      labelText="Text"
      placeholder="Basic text field"
      validations={{
        required: true,
      }}
    />

    {' '}

    <InlineSelect
      name="select"
      labelText="Select"
      validations={{
        required: true,
      }}
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
      validations={{
        required: true,
        truthy: true,
      }}
    >
      Checkbox
    </Checkbox>

    {' '}

    <Button onClick={handlers.onSubmit}>Submit</Button>
  </Form>
);

InlineBasicForm.propTypes = FormPropTypes;


export default dripForm({
})(InlineBasicForm);
