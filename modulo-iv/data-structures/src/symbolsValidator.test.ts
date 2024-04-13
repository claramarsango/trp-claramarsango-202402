import { validateSymbolCombination } from './symbolsValidator';

describe('Given a function to validate a correct combination of symbols,', () => {
  test('when the function is called, it should be defined', () => {
    expect(typeof validateSymbolCombination).toBe('function');
  });

  test('when the function receives an argument that is not a string, then it should return an error message', () => {
    const invalidArgument = 1 as unknown as string;
    expect(validateSymbolCombination(invalidArgument)).toBe(
      'input must be a string',
    );
  });

  test('when the function receives an invalid string, then it should return an error message', () => {
    const invalidString = 'invalid';
    expect(validateSymbolCombination(invalidString)).toBe(
      `input should either contain any of the following symbols: "(), [], {}" or be empty`,
    );
  });

  describe('when the function receives a valid string,', () => {
    test('if the string is empty, then it should return true', () => {
      const emptyString = '';
      expect(validateSymbolCombination(emptyString)).toBe(true);
    });
  });
});
