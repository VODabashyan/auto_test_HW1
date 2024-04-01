import { expect } from 'chai';
import NumbersValidator from '../../app/numbers_validator.js';

describe('getEvenNumbersFromArray tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return an array of even numbers', () => {
    const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const validationResults = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(validationResults).to.have.all.members([2, 4, 6, 8, 10]);
  });

  it('should throw an error if the array contains elements other than numbers', () => {
    const arrayOfNumbers = ['1', 2, 3, 4, 5];
    const validationResults = validator.getEvenNumbersFromArray.bind(this, arrayOfNumbers);
    expect(validationResults).to.throw(`[${arrayOfNumbers}] is not an array of "Numbers"`);
  });
});
