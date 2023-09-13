"use strict";

const Hashmab = require("../code-challenges/challange30/Hashmab");

const hashmapLeftJoin = require("./hashmapjoing");

let hashMapA = new Hashmab(1000);
hashMapA.set("fond", "enamored");
hashMapA.set("wrath", "anger");
hashMapA.set("diligent", "employed");
hashMapA.set("outfil", "garb");
hashMapA.set("guide", "usher");

let hashMapB = new Hashmab(1000);
hashMapB.set("fond", "averse");
hashMapB.set("wrath", "delight");
hashMapB.set("diligent", "idle");
hashMapB.set("guide", "follow");
hashMapB.set("flow", "jam");

describe("hashmap-left-join", () => {
  it("all the values in the first hashmap are returned, and if values exist in the right hashmap ", () => {
    expect(hashmapLeftJoin(hashMapA, hashMapB)).toStrictEqual([
      ["guide", "usher", "follow"],
      ["fond", "enamored", "averse"],
      ["wrath", "anger", "delight"],
      ["outfil", "garb", null],
      ["diligent", "employed", "idle"],
    ]);
  });
});
