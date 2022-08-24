import formatCurrency from '../formatCurrency';

describe('formatCurrency()', () => {
  it('returns correct value', () => {
    expect(formatCurrency(30600)).toBe('30 600,00 kr');
  });
});
