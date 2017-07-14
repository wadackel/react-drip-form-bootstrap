import React from 'react';
import { dripFormGroup, GroupPropTypes } from 'react-drip-form';
import { HelpBlock } from 'react-bootstrap';
import defaultGetValidationState from './internal/getValidationState';


export const FieldGroup = (props) => {
  const {
    children,
    meta,
    getValidationState,
    ...rest
  } = props;

  const validationState = getValidationState(props);
  const hasError = validationState === 'error';
  const className = `${rest.className || ''} ${hasError ? 'has-error' : ''}`.trim();

  return (
    <div
      {...rest}
      className={className}
    >
      {children}

      {hasError &&
        <span className="has-error">
          <HelpBlock>{meta.error}</HelpBlock>
        </span>
      }
    </div>
  );
};

FieldGroup.propTypes = GroupPropTypes;


export default dripFormGroup({
  defaultProps: {
    getValidationState: defaultGetValidationState,
  },
})(FieldGroup);
