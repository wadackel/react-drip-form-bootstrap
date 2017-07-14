import { InlineInput } from '../InlineInput';


describe('<InlineInput />', () => {
  test('Should be create field', () => {
    expect(InlineInput.displayName).toBe('InlineField(input)');
  });
});
