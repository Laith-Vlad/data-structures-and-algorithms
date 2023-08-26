'use strict';

function validateBrackets(str) {
  const stack = [];
  const openingBrackets = ['{', '(', '['];
  const closingBrackets = ['}', ')', ']'];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const relativeBracket = openingBrackets[closingBrackets.indexOf(char)];
      if (stack.length === 0 || stack.pop() !== relativeBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}



describe('validateBrackets', () => {
  test('should return true for balanced brackets', () => {
    expect(validateBrackets('')).toBe(true);
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('()')).toBe(true);
    expect(validateBrackets('[]')).toBe(true);
    expect(validateBrackets('{()}')).toBe(true);
    expect(validateBrackets('[{()}]')).toBe(true);
    expect(validateBrackets('[{()}([])]')).toBe(true);
  });

  test('should return false for unbalanced brackets', () => {
    expect(validateBrackets('{')).toBe(false);
    expect(validateBrackets('}')).toBe(false);
    expect(validateBrackets('({}')).toBe(false);
    expect(validateBrackets('({)}')).toBe(false);
    expect(validateBrackets('([{]}')).toBe(false);
    expect(validateBrackets('({}])')).toBe(false);
  });
});
