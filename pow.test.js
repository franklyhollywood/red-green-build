const exp = require('./pow.test.js');

describe('exp', () => {
  it('should return the exponent answer', () => {
    const answer = exp(3, 3);
    expect(answer).toEqual(27);
    console.log(answer);
  });
});
