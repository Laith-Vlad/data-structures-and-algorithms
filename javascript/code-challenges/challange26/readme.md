# Tracing Insertion Sort

This document provides a step-by-step tracing of the input array [8, 4, 23, 42, 16, 15] as it goes through the Insert and InsertionSort functions.

## Initial Input

Input Array: [8, 4, 23, 42, 16, 15]

## Insertion Sort Process

### Initial State

**sorted** Array: [8]

### Iteration 1

Inserting 4 into **sorted**:

- i is 0, value is 4.
- 4 is less than 8, so no need to shift.
- **sorted** remains [8].

**sorted** Array: [4, 8]

### Iteration 2

Inserting 23 into **sorted**:

- i is 0, value is 23.
- 23 is greater than 4, incrementing i.
- i is 1, 23 is greater than 8, incrementing i.
- i is 2, 23 is greater than 8, incrementing i.
- i is 3, 23 is greater than 8, incrementing i.
- i is 4, 23 is less than 42, insertion point found.
- Shifting elements from index 4 onwards.
- Inserting 23 at index 4.

**sorted** Array: [4, 8, 23]

### Iteration 3

Inserting 42 into **sorted**:

- i is 0, value is 42.
- 42 is greater than 4, incrementing i.
- i is 1, 42 is greater than 8, incrementing i.
- i is 2, 42 is greater than 23, incrementing i.
- i is 3, 42 is greater than 23, incrementing i.
- i is 4, 42 is greater than 23, incrementing i.
- i is 5, 42 is greater than 23, insertion point found.
- Shifting elements from index 5 onwards.
- Inserting 42 at index 5.

**sorted** Array: [4, 8, 23, 42]

### Iteration 4

Inserting 16 into **sorted**:

- i is 0, value is 16.
- 16 is greater than 4, incrementing i.
- i is 1, 16 is greater than 8, incrementing i.
- i is 2, 16 is greater than 23, insertion point found.
- Shifting elements from index 2 onwards.
- Inserting 16 at index 2.

**sorted** Array: [4, 8, 16, 23, 42]

### Iteration 5

Inserting 15 into **sorted**:

- i is 0, value is 15.
- 15 is greater than 4, incrementing i.
- i is 1, 15 is greater than 8, incrementing i.
- i is 2, 15 is greater than 16, insertion point found.
- Shifting elements from index 2 onwards.
- Inserting 15 at index 2.

**sorted** Array: [4, 8, 15, 16, 23, 42]

## Final Sorted Array

**sorted** Array: [4, 8, 15, 16, 23, 42]
![Example Image](./WhatsApp%20Image%202023-08-21%20at%2021.54.06.jpeg)