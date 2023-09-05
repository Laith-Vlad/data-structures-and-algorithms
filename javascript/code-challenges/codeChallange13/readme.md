# Bracket Authinticator
## Whiteboard Process
![Example Image](./img/Product%20Roadmaps(14).jpg)


## Approach:


the code creates openning and closing of the brackets and joins them togather using there index number and if there is no brackets left at the main stack it means they where all joined and poped out if you found some it means there are lonely brackets.


## Efficiency:

The time complexity of the provided validateBrackets function is O(n), where n is the length of the input string str.

Here's a breakdown of the time complexity analysis:
 The function iterates over each character in the input string using a for loop. Since it visits each character once, the loop has a time complexity of O(n), where n is the length of the string.
 Within the loop, the function performs constant-time operations such as pushing and popping elements from the stack, checking if the stack is empty, and finding the index of an element in the closingBrackets array. These operations have a time complexity of O(1).

Therefore, the overall time complexity of the function is O(n), as the loop dominates the runtime.

Note: The space complexity of the function is O(n) as well, as the stack can grow up to the size of the input string in the worst case, depending on the bracket arrangement.

## Solutions

now you can idintify if the strings contains compelet brackets 

***npm test bracket***
