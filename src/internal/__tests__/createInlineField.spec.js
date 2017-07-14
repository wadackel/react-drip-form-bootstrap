import React from 'react';
import { shallow } from 'enzyme';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import FormControlWrapper from '../FormControlWrapper';
import createInlineField, { defaultProps } from '../createInlineField';
import { mockFieldProps } from './utils';


const mockField = (componentClass, input = {}, meta = {}, props = {}) => {
  const Field = createInlineField(componentClass);
  const defaults = mockFieldProps(input, meta, {
    ...defaultProps,
    ...props,
  });

  Field.defaultProps = defaults;

  return { Field, props: defaults };
};


describe('Internal#createInlineField()', () => {
  test('Should be render <input />', () => {
    const { Field, props } = mockField('input');

    const wrapper = shallow(
      <Field
        name="name"
      />
    );

    expect(wrapper.equals(
      <FormGroup
        bsSize={undefined}
        controlId={undefined}
        validationState={null}
      >
        <FormControlWrapper
          addonBefore={undefined}
          addonAfter={undefined}
          inputGroupProps={{}}
        >
          <FormControl
            {...props.input}
            name="name"
            id={undefined}
            bsSize={undefined}
            componentClass="input"
          />
        </FormControlWrapper>
      </FormGroup>
    )).toBe(true);
  });


  test('Should be render <select />', () => {
    const { Field, props } = mockField('select');

    const wrapper = shallow(
      <Field name="name">
        <option value="foo">Foo</option>
      </Field>
    );

    expect(wrapper.equals(
      <FormGroup
        bsSize={undefined}
        controlId={undefined}
        validationState={null}
      >
        <FormControlWrapper
          addonBefore={undefined}
          addonAfter={undefined}
          inputGroupProps={{}}
        >
          <FormControl
            {...props.input}
            name="name"
            id={undefined}
            bsSize={undefined}
            componentClass="select"
          >
            <option value="foo">Foo</option>
          </FormControl>
        </FormControlWrapper>
      </FormGroup>
    )).toBe(true);
  });


  test('Should be render <textarea />', () => {
    const { Field, props } = mockField('textarea');

    const wrapper = shallow(
      <Field
        name="name"
      />
    );

    expect(wrapper.equals(
      <FormGroup
        bsSize={undefined}
        controlId={undefined}
        validationState={null}
      >
        <FormControlWrapper
          addonBefore={undefined}
          addonAfter={undefined}
          inputGroupProps={{}}
        >
          <FormControl
            {...props.input}
            name="name"
            id={undefined}
            bsSize={undefined}
            componentClass="textarea"
          />
        </FormControlWrapper>
      </FormGroup>
    )).toBe(true);
  });


  test('Should be render <ControlLabel />', () => {
    const { Field } = mockField('text');

    const wrapper = shallow(
      <Field
        name="name"
        labelText="LABEL"
      />
    );

    expect(wrapper.containsMatchingElement(
      <ControlLabel>LABEL</ControlLabel>
    )).toBe(true);
  });
});
