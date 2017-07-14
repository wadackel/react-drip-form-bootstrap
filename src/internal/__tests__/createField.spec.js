import React from 'react';
import { shallow } from 'enzyme';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import FormControlWrapper from '../FormControlWrapper';
import createField, { defaultProps } from '../createField';
import { mockFieldProps } from './utils';


const mockField = (componentClass, input = {}, meta = {}, props = {}) => {
  const Field = createField(componentClass);
  const defaults = mockFieldProps(input, meta, {
    ...defaultProps,
    ...props,
  });

  Field.defaultProps = defaults;

  return { Field, props: defaults };
};


describe('Internal#createField()', () => {
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
        <FormControl.Feedback />
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
        <FormControl.Feedback />
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
        <FormControl.Feedback />
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


  test('Should be render HelpBlock', () => {
    const { Field } = mockField('text', {}, {
      error: 'foo',
    });

    const wrapper = shallow(
      <Field
        name="name"
        labelText="LABEL"
        getValidationState={() => 'error'}
      />
    );

    expect(wrapper.containsMatchingElement(
      <HelpBlock>foo</HelpBlock>
    )).toBe(true);
  });
});
