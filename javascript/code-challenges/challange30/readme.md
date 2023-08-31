# Hashtables
 

# joint effort between laith and Rama


Hash Tables are a data structure that allows you to create a list of paired values. You can then retrieve a certain value by using the key for that value, which you put into the table beforehand.

## Challenge

Implement a Hashtable Class with the following methods:

### set

- **Arguments:** key, value
- **Returns:** nothing
- This method should hash the key and set the key and value pair in the table, handling collisions as needed.
- Should a given key already exist, replace its value with the value argument given to this method.

### get

- **Arguments:** key
- **Returns:** Value associated with that key in the table

### contains

- **Arguments:** key
- **Returns:** Boolean, indicating if the key exists in the table already.

### keys

- **Returns:** Collection of keys

### hash

- **Arguments:** key
- **Returns:** Index in the collection for that key

## Approach & Efficiency

- **get method:** Retrieving based on a key returns the value stored. Big O time: O(n)
- **contains method:** Returns null for a key that does not exist in the hashtable and true if it exists. Big O time: O(n)
- **keys method:** Returns a list of all unique keys that exist in the hashtable. Big O time: O(n^2)
- **hash method:** Returns the index of the key value object. Big O time: O(n)
- **set method:** Sets the key and value pair in the table. Big O time: O(n)

## API

Used methods (built-in):
- `split`: Used this method to convert the key to an array of characters. Big O time: O(n)
- `charCodeAt`: Used it to calculate the ASCII number for each character. Big O time: O(1)
- `reduce`: Used it to calculate the summation of the characters' ASCII numbers. Big O time: O(n)
- `Object.keys()`: Used it to obtain all keys in my array.
