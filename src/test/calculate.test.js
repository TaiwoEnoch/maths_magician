import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should return an empty object for button AC', () => {
    const result = calculate({ total: 10, next: 5, operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should handle zero button correctly', () => {
    const result = calculate({ next: '0', operation: '+', total: '10' }, '0');
    expect(result).toEqual({});
  });

  it('should not update next if it already has a decimal point', () => {
    const result = calculate({ next: '10.5', operation: null }, '.');
    expect(result).toEqual({ next: '10.5', operation: null });
  });

  it('should handle "=" button correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toEqual({ total: '15', next: null, operation: null });
  });

  it('should handle "+/-" button correctly', () => {
    const result = calculate({ next: '5' }, '+/-');
    expect(result).toEqual({ next: '-5' });
  });

  it('should handle operator buttons correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '-');
    expect(result).toEqual({ total: '15', next: null, operation: '-' });
  });

  it('should handle pressing operator after "="', () => {
    const result = calculate({ total: '10', operation: null }, '+');
    expect(result).toEqual({ total: '10', operation: '+' });
  });

  it('should handle pressing operator with an existing operation', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '*');
    expect(result).toEqual({ total: '15', next: null, operation: '*' });
  });

  it('should handle pressing operator with no existing operation', () => {
    const result = calculate({ next: '5' }, '+');
    expect(result).toEqual({ total: '5', next: null, operation: '+' });
  });

  it('should handle all cases correctly when pressing operator after "="', () => {
    const result = calculate({ total: '10', operation: null }, '-');
    expect(result).toEqual({ total: '10', operation: '-' });
  });
});
