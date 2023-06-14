# array-insert-shift
In this challange i added a value to the middle of the array either by reblacing old values or adding new values.

## Whiteboard Process
![Example Image](./img/Product%20Roadmaps(2).jpg)

## Approach & Efficiency
### The approach 
i took the array divided it by 2 and set the position i wanted to change then i updated that position with the new value if it is odd and created a new position if it is even.
 ### The big O
   - Calculating the middle position: This operation has a constant time complexity of O(1) since it involves a simple arithmetic calculation using the >> operator.

  -  Replacing the middle value for odd-length arrays: This operation has a constant time complexity of O(1) since it directly updates the value at the middle position.

   - Updating the right side for even-length arrays: This operation involves shifting the elements to the right and inserting the new value. In the worst case scenario, it requires shifting approximately n/2 elements, where n is the length of the array. This gives it a linear time complexity of O(n).



## Solution

 Test case 1: Odd-length array

```javascript

let oddArray = [1, 2, 3, 4, 5];
let newValue1 = 10;
updateArrayValue(oddArray, newValue1);  // [1, 2, 10, 4, 5]

```
Test case 2: Even-length array

```javascript


let evenArray = [1, 2, 3, 4, 5, 6];
let newValue2 = 20;
updateArrayValue(evenArray, newValue2); // [1, 2, 3, 20, 4, 5, 6]
```
Test case 3: Empty array

```javascript
// 
let emptyArray = [];
let newValue3 = 30;
updateArrayValue(emptyArray, newValue3); // Invalid position
```
 Edge case: Array with a single element:

```javascript

let singleArray = [10];
let newValue4 = 40;
updateArrayValue(singleArray, newValue4); // [40]
```
Edge case: Array is with 2 elements

```javascript

let twoArray = [50, 60];
let newValue5 = 70;
updateArrayValue(twoArray, newValue5); // [50, 70, 60]
```
