/* eslint-disable import/prefer-default-export */
export const mockFieldProps = (input = {}, meta = {}, props = {}) => ({
  input: {
    value: '',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    ...input,
  },
  meta: {
    error: undefined,
    errors: undefined,
    valid: false,
    invalid: false,
    touched: false,
    untouched: false,
    dirty: false,
    pristine: false,
    validating: false,
    ...meta,
  },
  ...props,
});
