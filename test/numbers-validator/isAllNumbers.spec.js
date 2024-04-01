/* eslint-disable import/no-extraneous-dependencies */
import { expect, use } from 'chai';
import assertArrays from 'chai-arrays';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isAllNumbers tests', () => {
  use(assertArrays);
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should throw an error if no array is provided', () => {
    const randomVariable = 'I am a string';
    const validationResults = validator.isAllNumbers.bind(this, randomVariable);
    expect(validationResults).to.throw(`[${randomVariable}] is not an array`);
  });

  it('should return true when provided with an array of numbers', () => {
    const arrayOfNumbers = [1, 2, 3, 4, 5];
    const validationResults = validator.isAllNumbers(arrayOfNumbers);
    expect(validationResults).to.be.true;
  });

  it('should return false when provided with an array containing elements other than numbers', () => {
    const arrayOfNumbers = [1, 2, 3, 4, '5'];
    const validationResults = validator.isAllNumbers(arrayOfNumbers);
    expect(validationResults).to.be.false;
  });

  it('should return true if no array is provided', () => {
    const randomVariable = 'I am a string';
    const validationResults = validator.isAllNumbers.bind(this, randomVariable);
    expect(validationResults).not.to.be.array();
  });
});
