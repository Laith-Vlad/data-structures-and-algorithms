"use strict";

const LinkedList = require("./Linkedlist");

class Hashmab {
  constructor(size) {
    this.size = size; // size as an input as i test
    this.map = new Array(size); // new array taking the inputed size
  }

  hash(key) {
    return (
      (key.split("").reduce((p, n) => {
        return p + n.charCodeAt(0);
      }, 0) *
        599) %
      this.size
    );
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.map[index]) {
      this.map[index] = new LinkedList();
    }
    const entry = { [key]: value };
    console.log(entry);
    this.map[index].add(entry);
  }
  get(key) {
    // let name = key
    const index = this.hash(key);
    let list = this.map[index];

    console.log("dodododdo", list.getValue(key));
    return list.getValue(key);

    // return value.index;
  }
  has(key) {
    let index = this.hash(key);
    if (!this.map[index]) {
      return false;
    }
    return this.map[index].find((entry) => entry[0] === key) !== undefined;
  }
  keys() {
    let keysArray = [];
    for (let i = 0; i < this.size; i++) {
      if (this.map[i]) {
        let current = this.map[i].head;
        while (current) {
          keysArray.push(Object.keys(current.value).pop());

          current = current.next;
        }
      }
    }
    return keysArray;
  }
}
module.exports = Hashmab;
// const HashTable = new Hashmab(19);

// console.log(HashTable.hash("Rama")); // Rama saved --> index 12

// HashTable.set("Basha", "Student");
// HashTable.set("Saleh", "Student");
// HashTable.set("Anas", "Student");
// HashTable.set("Farah", "Student");
// HashTable.set("Rama", "Student");
// HashTable.set("Waleed", "Instructor");
// // HashTable.get("Saleh")
// const allKeys = HashTable.keys();
// console.log("hello", allKeys);
// console.log(HashTable.get("Saleh"));
// console.log(HashTable.has("Saleh"));
// // console.log(HashTable.has("soso"));
// HashTable.map.forEach((data, i) => {
//   console.log(i, data && data.values());
// });
