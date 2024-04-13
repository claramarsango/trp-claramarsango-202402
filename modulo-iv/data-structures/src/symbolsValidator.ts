const validateInputContent = (input: string): string | undefined => {
  const validInputRegex = /^[()\[\]{}]*$/;

  if (typeof input !== 'string') return 'input must be a string';

  if (!validInputRegex.test(input)) {
    return `input should either contain any of the following symbols: "(), [], {}" or be empty`;
  }
};

export const validateSymbolCombination = (
  symbolCombination: string,
): boolean | string | undefined => {
  if (validateInputContent(symbolCombination)) {
    return validateInputContent(symbolCombination);
  }

  return true;
};
