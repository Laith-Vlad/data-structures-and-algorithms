# Tree code 14 and 16 challange
## Whiteboard Process
![14](./img/Product%20Roadmaps(15).jpg)
![16](./img/Product%20Roadmaps(17).jpg)


## Approach:


Binary Tree

    Create a Binary Tree class
        Define a method for each of the depth first traversals:
            pre order
            in order
            post order
        Each depth first traversal method should return an array of values, ordered appropriately.

Binary Search Tree

    Create a Binary Search Tree class
        This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
        Add
            Arguments: value
            Return: nothing
            Adds a new node with that value in the correct location in the binary search tree.
        Contains
            Argument: value
            Returns: boolean indicating whether or not the value is in the tree at least once.
            find max vauleue function
            it keeps going right till it finds the last right value and returns it.



## Efficiency:

the time and space complexcity is O(n) in the worst case scanario
## Solutions 

creates and adds and seaarched for values in a binary tree data struckre


***npm test binaryTest.test.js***