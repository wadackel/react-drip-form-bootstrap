import React from 'react';
import { FieldPropTypes } from 'react-drip-form';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import FormControlWrapper from './FormControlWrapper';
import defaultGetValidationState from './getValidationState';


const createField = (componentClass) => {
  const Field = (props) => {
    const {
      input,
      meta,
      id,
      bsSize,
      labelText,
      groupProps,
      labelProps,
      inputGroupProps,
      addonBefore,
      addonAfter,
      getValidationState,
      ...rest
    } = props;

    const validationState = getValidationState(props);
    const wrapperProps = {
      addonBefore,
      addonAfter,
      inputGroupProps,
    };

    return (
      <FormGroup
        bsSize={bsSize}
        controlId={id}
        {...groupProps}
        validationState={validationState}
      >
        {labelText &&
          <ControlLabel
            bsSize={bsSize}
            htmlFor={id}
            {...labelProps}
          >
            {labelText}
          </ControlLabel>
        }

        <FormControlWrapper {...wrapperProps}>
          <FormControl
            {...rest}
            {...input}
            id={id}
            bsSize={bsSize}
            componentClass={componentClass}
          />
        </FormControlWrapper>
        <FormControl.Feedback />

        {validationState === 'error' &&
          <HelpBlock>{meta.error}</HelpBlock>
        }
      </FormGroup>
    );
  };

  Field.displayName = `Field(${componentClass})`;
  Field.propTypes = FieldPropTypes;

  return Field;
};


export const defaultProps = {
  getValidationState: defaultGetValidationState,
  groupProps: {},
  labelProps: {},
  inputGroupProps: {},
};


export default createField;
