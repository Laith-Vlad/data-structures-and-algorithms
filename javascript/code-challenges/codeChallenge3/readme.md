# Linked list
 
- [link to code](./linkedList.js)


## Approach & Efficiency
### The approach 
The approach used for the Linked List implementation is as follows:

1. The Linked List class is implemented with a `head` property, which points to the first node of the list.

2. The `insert` method inserts a new node with the given value at the head of the list. This operation has an O(1) time complexity as it only requires updating the head pointer.

3. The `includes` method iterates through the list, starting from the head, and checks if a node with the given value exists in the list. This operation has a time complexity of O(n), where n is the number of nodes in the list.

4. The `toString` method creates a string representation of all the values in the linked list by traversing the list and concatenating the values. This operation also has a time complexity of O(n).

### The big O
The time complexity of the Linked List operations is as follows:

- Insertion (`insert` method): O(1)
- Searching (`includes` method): O(n)
- String representation (`toString` method): O(n)

The space complexity of the Linked List is O(n), where n is the number of nodes in the list. This is because each node requires memory space to store its value and the reference to the next node.

## Solution
The solution consists of a Linked List class that provides the following methods:

- `insert(value)`: Inserts a new node with the given value at the head of the list.
- `includes(value)`: Checks if a node with the given value exists in the list.
- `toString()`: Returns a string representation of all the values in the Linked List.

To use the Linked List class, you can create an instance of the class and call the methods as needed. Here is an example:

```javascript
const list = new LinkedList();
list.insert(5);
list.insert(10);
list.insert(15);
console.log(list.toString()); // Output: "{ 15 } -> { 10 } -> { 5 } -> NULL"
console.log(list.includes(10)); // Output: true
console.log(list.includes(20)); // Output: false
