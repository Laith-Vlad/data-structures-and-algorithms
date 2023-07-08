# linked list zip chall 08
## Whiteboard Process
![Example Image](./img/Product%20Roadmaps(11).jpg)
## visualize
![Example Image](./img/sss.png)
![Example Image](./img/Queue-Data-Structures.png)
## Approach:
### stacks

  used classes to create a node which i then exported to the queue and stacks code files. in the stack files i created the 4 operations push pop peek and isemtpy statring with is empty, i made sure with an if statement that the stack is empty or not and added the new value as a top right away but if it is not empty i set the next of the current top to the newnode and then set the top to the new node. on the pop i throw an error if is emty is true and used a tem file to put the poped value in i set the top to next node and then set the next of the temp to null to sever the conection. 
  the peak i just returened the this.top
### queue
i pretty much did the same thing but here the first in is the first out because it is like a water pipe the is empty first. i then checked if it is empty in the enqueue if yes this.rear and this.front are both the new node else i picked to use the rear so this.rear.next = newnode  and then we set the rear to the new node. 
## Efficiency:

The time and space complexity of queues and stacks can vary depending on the specific implementation and the operations performed. Here's a general overview:

For Stacks:

    Time Complexity:
        Push operation: O(1) - Constant time complexity, as it only involves inserting an element at the top of the stack.
        Pop operation: O(1) - Constant time complexity, as it only involves removing the top element from the stack.
        Peek operation: O(1) - Constant time complexity, as it only involves accessing the top element of the stack.
    Space Complexity:
        The space complexity of a stack depends on the number of elements stored in it. If there are 'n' elements, the space complexity would be O(n) since the stack needs to store each element individually.

For Queues:

    Time Complexity:
        Enqueue operation: O(1) - Constant time complexity, as it only involves inserting an element at the rear of the queue.
        Dequeue operation: O(1) - Constant time complexity, as it only involves removing the front element from the queue.
        Peek operation: O(1) - Constant time complexity, as it only involves accessing the front element of the queue.
    Space Complexity:
        The space complexity of a queue also depends on the number of elements stored in it. If there are 'n' elements, the space complexity would be O(n) since the queue needs to store each element individually.
        so it depend on what we are doing 
## Solutions 
it soveles the problem of using a stack and queue and clarifys what it is.


***npm test 10***

Jest will execute the test cases defined in 10 and provide the test results.
npm test 10  will work as expected