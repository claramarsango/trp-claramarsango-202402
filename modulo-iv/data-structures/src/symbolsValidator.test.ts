import { validateSymbolCombination } from './symbolsValidator';

describe('Given a function to validate a correct combination of symbols,', () => {
  test('when the function is called, it should be defined', () => {
    expect(typeof validateSymbolCombination).toBe('function');
  });
});
