import operate from '../logic/operate';

describe('operate function', () => {
  test('test addition of 2 positive numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('test subtraction of 2 positive numbers', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });

  test('add a positive number to zero', () => {
    expect(operate(0, 9, '+')).toBe('9');
  });

  test('add two negative numbers', () => {
    expect(operate(-1, -2, '+')).toBe('-3');
  });

  test('multiply two negative numbers', () => {
    expect(operate(-1, -2, 'x')).toBe('2');
  });

  test('multiply two positive numbers', () => {
    expect(operate(1, 2, 'x')).toBe('2');
  });

  test('multiply a positive number with a negative mumber', () => {
    expect(operate(1, -2, 'x')).toBe('-2');
  });

  test('test division operation', () => {
    expect(operate(10, 5, '÷')).toBe('2');
  });

  test('test module operation', () => {
    expect(operate(20, 3, '%')).toBe('0.6');
  });
});
