# Code Challenge: Class 06 
Extend a Linked List to allow various insertion methods.

## Approach & Efficiency
append(newValue):

    Approach: In the append method, we traverse the linked list to find the last node and then add a new node at the end.
    Time Complexity: O(n) - Since we traverse the linked list to find the last node, the time complexity is linearly proportional to the number of nodes in the linked list.
    Space Complexity: O(1) - The space complexity is constant because we only allocate memory for the new node being appended.

insertBefore(value, newValue):

    Approach: In the insertBefore method, we traverse the linked list to find the node with the specified value. Once found, we insert a new node with the given new value before the found node.
    Time Complexity: O(n) - In the worst case, we may need to traverse the entire linked list to find the specified node, resulting in a linear time complexity.
    Space Complexity: O(1) - The space complexity is constant since we only allocate memory for the new node being inserted.

insertAfter(value, newValue):

    Approach: In the insertAfter method, we traverse the linked list to find the node with the specified value. Once found, we insert a new node with the given new value after the found node.
    Time Complexity: O(n) - In the worst case, we may need to traverse the entire linked list to find the specified node, resulting in a linear time complexity.
    Space Complexity: O(1) - The space complexity is constant since we only allocate memory for the new node being inserted.

Overall, the time and space complexities for the methods in the Linked List class are both O(n) in the worst case, where n is the number of nodes in the linked list.

## Solution

there are tests in the test suite that explain how it works

To run the code, save the linked-list.js file and the linked-list.test.js file in the same directory. Install Jest using npm or yarn if you haven't already.

Then, in the terminal, navigate to the directory containing the files and run the following command:

***npx jest linkedlist.test.js***

Jest will execute the test cases defined in linkedlist.test.js and provide the test results.