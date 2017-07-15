import React from 'react';
import { shallow } from 'enzyme';
import {
  Checkbox as BSCheckbox,
  Radio as BSRadio,
  HelpBlock,
} from 'react-bootstrap';
import createSwitchField, { defaultProps } from '../createSwitchField';
import { mockFieldProps } from './utils';


const mockField = (WrappedComponent, input = {}, meta = {}, props = {}) => {
  const Field = createSwitchField(WrappedComponent);
  const defaults = mockFieldProps(input, meta, {
    ...defaultProps,
    ...props,
  });

  Field.defaultProps = defaults;

  return { Field, props: defaults };
};

const mockCheckbox = (input = {}, meta = {}, props = {}) => (
  mockField(BSCheckbox, input, meta, props)
);

const mockRadio = (input = {}, meta = {}, props = {}) => (
  mockField(BSRadio, input, meta, props)
);


describe('Internal#createSwitchField()', () => {
  test('Should be render checkbox', () => {
    const { Field, props } = mockCheckbox();

    const wrapper = shallow(
      <Field
        name="name"
      >
        Foo
      </Field>
    );

    expect(wrapper.equals(
      <BSCheckbox
        {...props.input}
        name="name"
        validationState={null}
      >
        Foo
      </BSCheckbox>
    )).toBe(true);
  });


  test('Should be render radio', () => {
    const { Field, props } = mockRadio();

    const wrapper = shallow(
      <Field
        name="name"
      >
        Foo
      </Field>
    );

    expect(wrapper.equals(
      <BSRadio
        {...props.input}
        name="name"
        validationState={null}
      >
        Foo
      </BSRadio>
    )).toBe(true);
  });


  test('Should be render error message', () => {
    const { Field, props } = mockCheckbox({}, {
      error: 'Error',
    });

    const wrapper = shallow(
      <Field
        name="name"
        getValidationState={() => 'error'}
      >
        Foo
      </Field>
    );

    expect(wrapper.equals(
      <span className="has-error">
        <BSCheckbox
          {...props.input}
          name="name"
          validationState="error"
        >
          Foo
        </BSCheckbox>
        <HelpBlock>Error</HelpBlock>
      </span>
    )).toBe(true);
  });


  test('Should not be render error message if inline mode', () => {
    const { Field, props } = mockCheckbox({}, {
      error: 'Error',
    });

    const wrapper = shallow(
      <Field
        inline
        name="name"
        getValidationState={() => 'error'}
      >
        Foo
      </Field>
    );

    expect(wrapper.equals(
      <BSCheckbox
        {...props.input}
        inline
        name="name"
      >
        Foo
      </BSCheckbox>
    )).toBe(true);
  });
});
