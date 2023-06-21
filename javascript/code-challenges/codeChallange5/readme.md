# Febonatcci Sequance 
in this chellange i created an array accoridign to the febonatci sequence while my aquantance interviewed me.
## intreviewer notes
[Notes](https://docs.google.com/spreadsheets/d/1WCn_CbCcXd35TL355QmrHB2xvn7-zXY7FENOosVTDcE/edit?usp=sharing)
## Whiteboard Process
![Example Image](./img/Product%20Roadmaps(2).jpg)

## Approach & Efficiency
### The approach 
    The function starts with a for loop that iterates from i = 1 to i < 30. This loop generates 29 Fibonacci numbers (indices 1 to 29) and appends them to the array.

    Inside the loop, there is an if statement that checks if the previous element (arr[i - 1]) is equal to 0. If it is, the code enters the if block.

    In the if block, the code appends the number 1 to the array using the push method (arr.push(1)). This corresponds to the second Fibonacci number in the sequence.

    If the if condition is not met, the code executes the else block.

    In the else block, the code calculates the current Fibonacci number by summing the previous two numbers: arr[i - 1] and arr[i]. The result is then appended to the array using the push method (arr.push(arr[i - 1] + arr[i])).

    After the loop completes, the array arr will contain the Fibonacci sequence with 30 numbers (indices 0 to 29), with the first two numbers being 0 and 1.

It's worth noting that the code assumes that the input array arr is initialized with at least one element (e.g., [0]) before calling the febSeq function. The generated Fibonacci numbers are appended to the input array, extending its length.
 ### The big O

Big O
The space complexity 
of the febSeq algorithm is O(n), meaning it uses constant space.

The time complexity
 of the febseq algorithm is
O(n)

## Solution


javascript

let sequence = [0];
febSeq(sequence);
console.log(sequence);
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040]

let sequence2 = [0, 1];
febSeq(sequence2);
console.log(sequence2);
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040]

let sequence3 = [];
febSeq(sequence3);
console.log(sequence3);
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229]

let sequence4 = [0, 1, 1, 2];
febSeq(sequence4);
console.log(sequence4);
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229]

let sequence5 = [0, 1, 2];
febSeq(sequence5);
console.log(sequence5);
// Output: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040]
