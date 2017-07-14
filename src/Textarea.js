import { dripFormField } from 'react-drip-form';
import createField, { defaultProps } from './internal/createField';

export const Textarea = createField('textarea');

export default dripFormField('text', {
  defaultProps,
})(Textarea);
