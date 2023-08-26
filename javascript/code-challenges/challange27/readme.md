

# Merge Sort Walkthrough

## Initial Array: [8, 4, 23, 42, 16, 15]

1. **Initial Call**: Calling `mergeSort([8, 4, 23, 42, 16, 15])`.

2. **Divide Phase**:
   - Array length is greater than 1, so we split the array into two halves:
     - `left`: [8, 4, 23]
     - `right`: [42, 16, 15]

3. **Recursion on `left` Sub-array**:
   - Calling `mergeSort([8, 4, 23])`.
   - Divide `left` further into [8] and [4, 23].

4. **Recursion on `[8]`**:
   - Base case reached as `[8]` has only one element.

5. **Recursion on `[4, 23]`**:
   - Divide `left` further into [4] and [23].

6. **Merging `[4]` and `[23]`**:
   - Result: [4, 23].

7. **Merging `[8]` and `[4, 23]`**:
   - Result: [4, 8, 23].

8. **Recursion on `right` Sub-array**:
   - Calling `mergeSort([42, 16, 15])`.
   - Divide `right` further into [42] and [16, 15].

9. **Recursion on `[42]`**:
   - Base case reached as `[42]` has only one element.

10. **Recursion on `[16, 15]`**:
    - Divide `right` further into [16] and [15].

11. **Merging `[16]` and `[15]`**:
    - Result: [15, 16].

12. **Merging `[42]` and `[15, 16]`**:
    - Result: [15, 16, 42].

13. **Merging `left` and `right` Sub-arrays**:
    - Merging [4, 8, 23] and [15, 16, 42].

## Final Sorted Array: [4, 8, 15, 16, 23, 42]

The sorted array is [4, 8, 15, 16, 23, 42].

This walkthrough illustrates the step-by-step process of how the Merge Sort algorithm sorts the input array [8, 4, 23, 42, 16, 15]. It involves the division of the array into smaller sub-arrays, the sorting of those sub-arrays, and the final merging of the sorted sub-arrays to achieve a fully sorted array.
![Example Image](./handyman(2).jpg)