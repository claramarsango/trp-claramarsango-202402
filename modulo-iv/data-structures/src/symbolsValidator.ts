export const validateSymbolCombination = (symbolCombination: string) => {
  if (typeof symbolCombination !== 'string') {
    return 'input must be a string';
  }
};
