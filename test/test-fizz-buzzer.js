
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

 it('should only return buzz when you git it a number divisible by just 5' , ()=>{
   const numbers = [5, 10, 25];
   numbers.forEach((number) =>{
     const result = fizzBuzzer(number);
     expect(result).to.equal('buzz');
   });
 });

 it('should only return fizz-buzz when you git it a number divisible by 5 and 3' , ()=>{
   const numbers = [15,  30];
   numbers.forEach((number) =>{
     const result = fizzBuzzer(number);
     expect(result).to.equal('fizz-buzz');
   });
 });



});
