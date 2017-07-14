import React from 'react';
import { FieldPropTypes } from 'react-drip-form';
import { Col, ControlLabel, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import FormControlWrapper from './FormControlWrapper';
import defaultGetValidationState from './getValidationState';


const createHorizontalField = (componentClass) => {
  const HorizontalField = (props) => {
    const {
      input,
      meta,
      id,
      bsSize,
      groupProps,
      labelColProps,
      labelText,
      controlColProps,
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
          <Col
            htmlFor={id}
            componentClass={ControlLabel}
            {...labelColProps}
          >
            {labelText}
          </Col>
        }

        <Col {...controlColProps}>
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
        </Col>
      </FormGroup>
    );
  };

  HorizontalField.displayName = `HorizontalField(${componentClass})`;
  HorizontalField.propTypes = FieldPropTypes;

  return HorizontalField;
};


export const defaultProps = {
  getValidationState: defaultGetValidationState,
  groupProps: {},
  labelColProps: {},
  controlColProps: {},
  inputGroupProps: {},
};


export default createHorizontalField;
