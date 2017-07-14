const getValidationState = ({ meta }) => (
  (meta.error && meta.touched && meta.dirty) ? 'error' : null
);

export default getValidationState;
