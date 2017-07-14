import { dripFormField } from 'react-drip-form';
import createField, { defaultProps } from './internal/createField';

export const Input = createField('input');

export default dripFormField('text', {
  defaultProps,
})(Input);
