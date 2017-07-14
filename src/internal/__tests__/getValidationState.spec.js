import getValidationState from '../getValidationState';


describe('Internal#getValidationState()', () => {
  test('Should be return the string "error"', () => {
    expect(getValidationState({
      meta: {
        error: 'error',
        touched: true,
        dirty: true,
      },
    })).toBe('error');
  });


  test('Should be return null', () => {
    expect(getValidationState({
      meta: {
      },
    })).toBe(null);

    expect(getValidationState({
      meta: {
        error: null,
        touched: false,
        dirty: false,
      },
    })).toBe(null);

    expect(getValidationState({
      meta: {
        error: 'error',
        touched: false,
        dirty: false,
      },
    })).toBe(null);

    expect(getValidationState({
      meta: {
        error: 'error',
        touched: true,
        dirty: false,
      },
    })).toBe(null);

    expect(getValidationState({
      meta: {
        error: 'error',
        touched: false,
        dirty: true,
      },
    })).toBe(null);

    expect(getValidationState({
      meta: {
        error: null,
        touched: true,
        dirty: true,
      },
    })).toBe(null);
  });
});
