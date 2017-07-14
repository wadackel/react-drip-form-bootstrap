import React from 'react';
import { FieldPropTypes } from 'react-drip-form';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import FormControlWrapper from './FormControlWrapper';
import defaultGetValidationState from './getValidationState';


const createInlineField = (componentClass) => {
  const InlineField = (props) => {
    const {
      input,
      meta,
      id,
      bsSize,
      groupProps,
      labelText,
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
          <span>
            <ControlLabel
              bsSize={bsSize}
              htmlFor={id}
              {...labelProps}
            >
              {labelText}
            </ControlLabel>
            {' '}
          </span>
        }

        <FormControlWrapper {...wrapperProps}>
          <FormControl
            {...rest}
            {...input}
            bsSize={bsSize}
            id={id}
            componentClass={componentClass}
          />
        </FormControlWrapper>
      </FormGroup>
    );
  };

  InlineField.displayName = `InlineField(${componentClass})`;
  InlineField.propTypes = FieldPropTypes;

  return InlineField;
};


export const defaultProps = {
  getValidationState: defaultGetValidationState,
  groupProps: {},
  labelProps: {},
  inputGroupProps: {},
};


export default createInlineField;
