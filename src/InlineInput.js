import { dripFormField } from 'react-drip-form';
import createInlineField, { defaultProps } from './internal/createInlineField';

export const InlineInput = createInlineField('input');

export default dripFormField('text', {
  defaultProps,
})(InlineInput);
