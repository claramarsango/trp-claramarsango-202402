const validateInputContent = (input: string): string | undefined => {
  const validInputRegex = /^[()\[\]{}]*$/;

  if (!validInputRegex.test(input)) {
    return `input should either contain any of the following symbols: "(), [], {}" or be empty`;
  }
};

export const validateSymbolCombination = (symbolCombination: string) => {
  if (typeof symbolCombination !== 'string') {
    return 'input must be a string';
  }

  if (validateInputContent(symbolCombination))
    return validateInputContent(symbolCombination);
};
