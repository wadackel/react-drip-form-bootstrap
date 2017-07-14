import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';

const FormControlWrapper = (props) => {
  const {
    children,
    addonBefore,
    addonAfter,
    inputGroupProps,
  } = props;

  const hasAddon = !!(addonBefore || addonAfter);
  const Wrapper = hasAddon ? InputGroup : 'span';
  const wrapperProps = hasAddon ? inputGroupProps : {};

  return (
    <Wrapper {...wrapperProps}>
      {addonBefore}
      {children}
      {addonAfter}
    </Wrapper>
  );
};

FormControlWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  addonBefore: PropTypes.node,
  addonAfter: PropTypes.node,
  inputGroupProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

FormControlWrapper.defaultProps = {
  addonBefore: null,
  addonAfter: null,
  inputGroupProps: {},
};

export default FormControlWrapper;
