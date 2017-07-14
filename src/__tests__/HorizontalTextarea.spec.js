import { HorizontalTextarea } from '../HorizontalTextarea';


describe('<HorizontalTextarea />', () => {
  test('Should be create field', () => {
    expect(HorizontalTextarea.displayName).toBe('HorizontalField(textarea)');
  });
});
