import React from 'react';
import { shallow } from 'enzyme';
import { InputGroup } from 'react-bootstrap';
import FormControlWrapper from '../FormControlWrapper';


describe('Internal#<FormControlWrapper />', () => {
  test('Should be render children', () => {
    const wrapper = shallow(
      <FormControlWrapper>
        <div id="foo">Foo</div>
      </FormControlWrapper>
    );

    expect(wrapper.equals(
      <span>
        <div id="foo">Foo</div>
      </span>
    )).toBe(true);
  });


  test('Should be render <InputGroup />', () => {
    const wrapper = shallow(
      <FormControlWrapper
        addonBefore={<div>before</div>}
        addonAfter={<div>after</div>}
      >
        <div id="foo">Foo</div>
      </FormControlWrapper>
    );

    expect(wrapper.equals(
      <InputGroup>
        <div>before</div>
        <div id="foo">Foo</div>
        <div>after</div>
      </InputGroup>
    )).toBe(true);
  });


  test('Should be render <InputGroup /> if only pass addonBefore', () => {
    const wrapper = shallow(
      <FormControlWrapper
        addonBefore={<div>before</div>}
      >
        <div id="bar">Bar</div>
      </FormControlWrapper>
    );

    expect(wrapper.equals(
      <InputGroup>
        <div>before</div>
        <div id="bar">Bar</div>
      </InputGroup>
    )).toBe(true);
  });


  test('Should be render <InputGroup /> if only pass addonAfter', () => {
    const wrapper = shallow(
      <FormControlWrapper
        addonAfter={<div>after</div>}
      >
        <div id="bar">Bar</div>
      </FormControlWrapper>
    );

    expect(wrapper.equals(
      <InputGroup>
        <div id="bar">Bar</div>
        <div>after</div>
      </InputGroup>
    )).toBe(true);
  });


  test('Should be pass props to <InputGroup />', () => {
    const wrapper = shallow(
      <FormControlWrapper
        addonBefore={<div>before</div>}
        inputGroupProps={{
          className: 'foo',
          'data-test': 'input-group',
        }}
      >
        <div id="bar">Bar</div>
      </FormControlWrapper>
    );

    const group = wrapper.find(InputGroup);

    expect(group.prop('className')).toBe('foo');
    expect(group.prop('data-test')).toBe('input-group');
  });
});
