import { expect } from 'chai';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isInteger tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should throw an error when provided with a string', () => {
    const validationResults = validator.isInteger.bind(null, '2');
    expect(validationResults).to.throw('[2] is not a number');
  });

  it('should return true when a whole number is provided', () => {
    const validationResults = validator.isInteger(2);
    expect(validationResults).to.be.true;
  });

  it('should return false when a decimal number is provided', () => {
    const validationResults = validator.isInteger(12.53);
    expect(validationResults).to.be.false;
  });
});
