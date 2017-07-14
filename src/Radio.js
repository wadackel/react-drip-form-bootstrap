import { dripFormField } from 'react-drip-form';
import { Radio as BSRadio } from 'react-bootstrap';
import createSwitchField, { defaultProps } from './internal/createSwitchField';

export const Radio = createSwitchField(BSRadio);

export default dripFormField('radio', {
  defaultProps,
})(Radio);
