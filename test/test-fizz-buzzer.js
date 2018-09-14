
const fizzBuzzer = require('../fizzBuzzer.js');

const chai = require('chai');
const expect = chai.expect;

describe('fizzBuzzer', () => {

  it('should only return fizz when given a number divisible by just 3', () => {
    const numbers = [3, 9, 231];
    numbers.forEach((number) => {
      const result = fizzBuzzer(number);
      expect(result).to.equal('fizz');
    });
  });
});