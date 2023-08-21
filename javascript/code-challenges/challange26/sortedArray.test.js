function insert(sorted, value) {
  let i = 0;
  while (value > sorted[i]) {
    i++;
  }

  while (i < sorted.length) {
    const temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }

  sorted.push(value);
}

function insertSort(input) {
  const sorted = [input[0]];

  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }

  return sorted;
}
// Replace with the correct path to your file

describe('Insert and insertSort', () => {
  it('Inserts a value into a sorted array', () => {
    const sortedArray = [1, 3, 5, 7, 9];
    insert(sortedArray, 4);
    expect(sortedArray).toEqual([1, 3, 4, 5, 7, 9]);
  });

  it('Sorts an array using insertSort', () => {
    const unsortedArray = [9, 1, 5, 3, 7];
    const sortedArray = insertSort(unsortedArray);
    expect(sortedArray).toEqual([1, 3, 5, 7, 9]);
  });
});
