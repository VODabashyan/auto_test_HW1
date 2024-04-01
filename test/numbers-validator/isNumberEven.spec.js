import { expect } from 'chai';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isNumberEven tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.true;
  });

  it('should return false when provided with an odd number', () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.false;
  });

  it('should throw an error when provided with a string', () => {
    const validationResults = validator.isNumberEven.bind(null, '4');
    expect(validationResults).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});
