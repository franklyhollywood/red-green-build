const pow = require('./pow.js');

describe('pow', () => {
  it('should return the exponent answer', () => {
    const base = '5';
    const exponent = '7';
    expect(pow(base, exponent)).toEqual(78125);
  });
});
