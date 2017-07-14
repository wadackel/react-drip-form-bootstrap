import { Input } from '../Input';


describe('<Input />', () => {
  test('Should be create field', () => {
    expect(Input.displayName).toBe('Field(input)');
  });
});
