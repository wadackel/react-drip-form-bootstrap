import { dripFormField } from 'react-drip-form';
import createField, { defaultProps } from './internal/createField';

export const Select = createField('select');

export default dripFormField('select', {
  defaultProps,
})(Select);
