import { dripFormField } from 'react-drip-form';
import createInlineField, { defaultProps } from './internal/createInlineField';

export const InlineSelect = createInlineField('select');

export default dripFormField('select', {
  defaultProps,
})(InlineSelect);
