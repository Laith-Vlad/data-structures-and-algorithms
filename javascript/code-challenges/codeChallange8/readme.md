# linked list zip chall 08
## Whiteboard Process
![Example Image](./image/Product%20Roadmaps(2).jpg)
## Approach:

    The code defines a Node class that represents a node in the linked list, with a value and a reference to the next node.
    The code also defines a LinkedList class that represents a linked list, with a head pointer and methods to append nodes.
    The zipedLists function takes two linked lists as input and performs the zip operation, creating a new linked list as the result.
    It handles cases where one or both of the input lists are empty, and it iterates through the lists to zip their nodes together.

## Efficiency:

    The time complexity of appending a node to the end of a linked list is O(n), where n is the number of nodes in the list. This is because it requires iterating through the list to find the last node.
    The zipedLists function has a time complexity of O(m + n), where m and n are the lengths of the input lists. It iterates through both lists simultaneously, performing constant time operations for each node.

    The space complexity of the zipedLists function is O(1), as it only uses a constant amount of additional space to store the new linked list.

## Solutions 
The provided code offers a solution to the problem of zipping two linked lists together. The zipedLists function takes two linked lists (list1 and list2) as input and returns a new linked list that contains the nodes from both input lists, alternating between them.

For example, if list1 contains nodes with values 1, 3, and 5, and list2 contains nodes with values 2, 4, and 6, the resulting linked list would have nodes with values 1, 2, 3, 4, 5, and 6, in that order.


***npm test 08.test.js***

Jest will execute the test cases defined in 08.test.js and provide the test results.