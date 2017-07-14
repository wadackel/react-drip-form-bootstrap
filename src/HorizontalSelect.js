import { dripFormField } from 'react-drip-form';
import createHorizontalField, { defaultProps } from './internal/createHorizontalField';

export const HorizontalSelect = createHorizontalField('select');

export default dripFormField('select', {
  defaultProps,
})(HorizontalSelect);
