function reverseArray(array) {
  let reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

describe('reverseArray', () => {
  it('should reverse the array of numbers', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [5, 4, 3, 2, 1];
    const output = reverseArray(input);
    expect(output).toEqual(expected);
  });

  it('should reverse the array of strings', () => {
    const input = ['a', 'b', 'c'];
    const expected = ['c', 'b', 'a'];
    const output = reverseArray(input);
    expect(output).toEqual(expected);
  });

  it('should return an empty array for an empty input array', () => {
    const input = [];
    const expected = [];
    const output = reverseArray(input);
    expect(output).toEqual(expected);
  });

  it('should return the same array for an array with a single element', () => {
    const input = [6];
    const expected = [6];
    const output = reverseArray(input);
    expect(output).toEqual(expected);
  });

  it('should reverse the array if it is already sorted', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [5, 4, 3, 2, 1];
    const output = reverseArray(input);
    expect(output).toEqual(expected);
  });

 
  it('should reverse the array of negative numbers', () => {
    const input = [-1, -2, -3, -4, -5];
    const expected = [-5, -4, -3, -2, -1];
    const output = reverseArray(input);
    expect(output).toEqual(expected);
  });

  it('should return the same array for an array with a single zero', () => {
    const input = [0];
    const expected = [0];
    const output = reverseArray(input);
    expect(output).toEqual(expected);
  });
});