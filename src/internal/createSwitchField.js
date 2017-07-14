import React from 'react';
import { FieldPropTypes } from 'react-drip-form';
import { HelpBlock } from 'react-bootstrap';
import defaultGetValidationState from './getValidationState';


const createSwitchControl = (WrappedComponent) => {
  const Control = (props) => {
    const {
      input,
      meta,
      children,
      inline,
      getValidationState,
      ...rest
    } = props;

    const validationState = getValidationState(props);
    const hasError = validationState === 'error';
    const controlProps = {
      ...rest,
      ...input,
    };

    if (inline) {
      controlProps.inline = true;
    } else {
      controlProps.validationState = validationState;
    }

    const element = (
      <WrappedComponent {...controlProps}>
        {children}
      </WrappedComponent>
    );

    if (inline || !hasError) {
      return element;
    }

    return (
      <span className="has-error">
        {element}
        <HelpBlock>{meta.error}</HelpBlock>
      </span>
    );
  };

  Control.propTypes = FieldPropTypes;

  return Control;
};


export const defaultProps = {
  getValidationState: defaultGetValidationState,
};


export default createSwitchControl;
