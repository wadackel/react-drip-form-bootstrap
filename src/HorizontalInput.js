import { dripFormField } from 'react-drip-form';
import createHorizontalField, { defaultProps } from './internal/createHorizontalField';

export const HorizontalInput = createHorizontalField('input');

export default dripFormField('text', {
  defaultProps,
})(HorizontalInput);
