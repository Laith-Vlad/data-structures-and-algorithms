# Binary Search
In this challange i will look for the value i want inside an array using the binary search method.

## Whiteboard Process
![Example Image](./img/Product%20Roadmaps(2).jpg)

## Approach & Efficiency
### The approach 
setting the end and the start and taking the middle value of it given the array is increasing it means we have to go to the right side for higher values and left for lower values. after that we set the start again and repeat the operation until we find something or the start is more than the end in this case we break and return -1.
 ### The big O
The space complexity of the binary search algorithm you provided is O(1), meaning it uses constant space. This is because the space used by the algorithm does not depend on the size of the input array. It only requires a few variables to store the indices and the key.

The time complexity of the binary search algorithm is O(log n), where n is the size of the input array. In each iteration of the while loop, the search range is divided in half, narrowing down the search area. This logarithmic behavior leads to efficient search times, even for large arrays. The algorithm repeatedly divides the search space by 2 until the key is found or the search range is empty.

Overall, the binary search algorithm has a space complexity of O(1) and a time complexity of O(log n), making it an efficient approach for searching in sorted arrays.

## Solution

Test Case 1:
const arr1 = [4, 8, 15, 16, 23, 42];
const key1 = 15;
console.log(binarySearch(arr1, key1));
// Expected Output: Element 15 found at index 2

Test Case 2:
const arr2 = [-131, -82, 0, 27, 42, 68, 179];
const key2 = 42;
console.log(binarySearch(arr2, key2));
// Expected Output: Element 42 found at index 4

Test Case 3:
const arr3 = [11, 22, 33, 44, 55, 66, 77];
const key3 = 90;
console.log(binarySearch(arr3, key3));
// Expected Output: -1 (Element 90 not found in the array)

Test Case 4:
const arr4 = [1, 2, 3, 5, 6, 7];
const key4 = 4;
console.log(binarySearch(arr4, key4));
// Expected Output: -1 (Element 4 not found in the array)