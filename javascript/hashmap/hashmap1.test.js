"use strict";

const Hashmab = require("../code-challenges/challange30/Hashmab");

const hashmapLeftJoin = require("./hashmapjoing");

let hashMapA = new Hashmab(1000);

hashMapA.set("apple", "red");
hashMapA.set("banana", "yellow");
hashMapA.set("cherry", "red");
hashMapA.set("date", "brown");
hashMapA.set("elderberry", "purple");

let hashMapB = new Hashmab(1000);

hashMapB.set("apple", "fruit");
hashMapB.set("banana", "fruit");
hashMapB.set("cherry", "fruit");
hashMapB.set("date", "fruit");
hashMapB.set("fig", "fruit");

describe("Testing the hashmapLeftJoin function with different data", () => {
  it("should return an array of arrays with values from the first hashmap and matching values from the second hashmap", () => {
    expect(hashmapLeftJoin(hashMapA, hashMapB)).toEqual(
      expect.arrayContaining([
        ["apple", "red", "fruit"],
        ["banana", "yellow", "fruit"],
        ["cherry", "red", "fruit"],
        ["date", "brown", "fruit"],
        ["elderberry", "purple", null],
      ])
    );
  });
});
