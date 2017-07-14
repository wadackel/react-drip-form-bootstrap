import { Textarea } from '../Textarea';


describe('<Textarea />', () => {
  test('Should be create field', () => {
    expect(Textarea.displayName).toBe('Field(textarea)');
  });
});
