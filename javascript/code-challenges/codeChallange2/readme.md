# array-insert-shift
In this challange i added a value to the middle of the array  by  adding new values to the right of the middle.

## Whiteboard Process
![Example Image](./img/Product%20Roadmaps(2).jpg)

## Approach & Efficiency
### The approach 
i took the array divided it by 2 and set the position i wanted to change then i updated that position with the new value if it is odd and created a new position if it is even.
 ### The big O
The time complexity (Big O) of the updateArrayValue function is O(n), where n is the length of the array.

The for loop in the algorithm iterates from the end of the array (length - 1) to the middle position (position). In the worst case, the loop will iterate through half of the array, resulting in n/2 iterations. However, since we consider the asymptotic time complexity, the constant factor of 1/2 is dropped, resulting in O(n).

Overall, the time complexity of the function is linear, meaning the time taken by the function grows linearly with the size of the input array.



## Solution

 Test case 1: Odd-length array

```javascript

let oddArray = [1, 2, 3, 4, 5];
let newValue1 = 10;
updateArrayValue(oddArray, newValue1);  // [1, 2,3, 10, 4, 5]

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
updateArrayValue(singleArray, newValue4); // [40,10]
```
Edge case: Array is with 2 elements

```javascript

let twoArray = [50, 60];
let newValue5 = 70;
updateArrayValue(twoArray, newValue5); // [50, 70, 60]
```
