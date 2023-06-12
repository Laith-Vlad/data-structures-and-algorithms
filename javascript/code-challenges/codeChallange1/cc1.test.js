

function reverseArray(array) {
  let reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
describe('teverse arrray test', () => {
  it('reverse arr', () => {
    const array = [1, 2, 3, 4];
    let newArr = reverseArray(array);
    expect(newArr).toEqual([4,3,2,1]);
  });
});
