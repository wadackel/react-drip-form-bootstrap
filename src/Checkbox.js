import { dripFormField } from 'react-drip-form';
import { Checkbox as BSCheckbox } from 'react-bootstrap';
import createSwitchField, { defaultProps } from './internal/createSwitchField';

export const Checkbox = createSwitchField(BSCheckbox);

export default dripFormField('checkbox', {
  defaultProps,
})(Checkbox);
