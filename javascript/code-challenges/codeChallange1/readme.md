# Challenge Title
In this challange i reversed reversed an array.

## Whiteboard Process
![Example Image](./img/Product%20Roadmaps(1).jpg)

## Approach & Efficiency
### The approach 
 taking the array from the back and pushing it in a new array then returnning it.
 ### The big O
 it has only one for loop so O(n)
 The time complexity of the given algorithm is O(n), where n is the length of the input array.

The algorithm iterates through each element of the input array exactly once, starting from the last element and moving towards the first element. Therefore, the time complexity is directly proportional to the size of the input array.

As a result, the time complexity of the algorithm can be considered linear or O(n), indicating that the time taken to reverse the array grows linearly with the size of the input array.
### recursion 
tried it but the code is much longer and more complex and the big O is the same 
```javascript
function reverseArray(array) {
  if (array.length <= 1) {
    return array;
  }

  const firstElement = array[0];
  const remainingArray = [];
  for (let i = 1; i < array.length; i++) {
    remainingArray.push(array[i]);
  }
  const reversedArray = reverseArray(remainingArray);

  reversedArray.push(firstElement);
  return reversedArray;
}
```

## Solution

  Standard input and output:

```javascript

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
```
Standard input with a different output:

```javascript

console.log(reverseArray(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']
```
Edge case: Empty array:

```javascript

console.log(reverseArray([])); // Output: []
```
 Edge case: Array with a single element:

```javascript

console.log(reverseArray([6])); // Output: [6]
```
Edge case: Array is already sorted:

```javascript

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
```
Edge case: Null input:

```javascript

console.log(reverseArray(null)); // Output: []
```
Edge case: Negative numbers:

```javascript

console.log(reverseArray([-1, -2, -3, -4, -5])); // Output: [-5, -4, -3, -2, -1]
```
Edge case: Zero:

```javascript

console.log(reverseArray([0])); // Output: [0]
```