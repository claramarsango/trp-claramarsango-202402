const validateInputContent = (input: string): string | undefined => {
  const validInputRegex = /^[()\[\]{}]*$/;

  if (typeof input !== 'string') return 'input must be a string';

  if (!validInputRegex.test(input)) {
    return `input should either contain any of the following symbols: "(), [], {}" or be empty`;
  }
};

class Stack {
  #elements: string[] = [];

  isEmpty(): boolean {
    return this.#elements.length === 0;
  }
}

export const validateSymbolCombination = (
  symbolCombination: string,
): boolean | string | undefined => {
  if (validateInputContent(symbolCombination)) {
    return validateInputContent(symbolCombination);
  }

  const stack = new Stack();
  const closingSymbols = ')]}';

  if (symbolCombination.length === 1) return false;

  for (const symbol of symbolCombination) {
    if (closingSymbols.includes(symbol)) {
      if (stack.isEmpty()) return false;
    }
  }

  return true;
};
