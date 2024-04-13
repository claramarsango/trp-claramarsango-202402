import { validateSymbolCombination } from './symbolsValidator';

describe('Given a function to validate a correct combination of symbols,', () => {
  test('when the function is called, it should be defined', () => {
    expect(typeof validateSymbolCombination).toBe('function');
  });

  test('when the function receives an argument that is not a string, then it should return an error message', () => {
    const invalidArgument = 1;
    expect(validateSymbolCombination(invalidArgument)).toBe(
      'input must be a string',
    );
  });
});
