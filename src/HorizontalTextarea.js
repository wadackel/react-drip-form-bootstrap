import { dripFormField } from 'react-drip-form';
import createHorizontalField, { defaultProps } from './internal/createHorizontalField';

export const HorizontalTextarea = createHorizontalField('textarea');

export default dripFormField('text', {
  defaultProps,
})(HorizontalTextarea);
