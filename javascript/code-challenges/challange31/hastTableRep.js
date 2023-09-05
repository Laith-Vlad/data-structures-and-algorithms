"use strict";
const Hash = require("../challange30/Hashmab");
// const LinkedList = require('../code-challenge-30-hashtables/linkedlist')

function repeatedWord(string) {
  let words = string.match(/\b\w+\b/g);
  let table = new Hash(words.length);
  for (const word of words) {
    console.log();
    let keys = table.keys();
    console.log(keys);
    if (keys.includes(word.toLowerCase())) return word;
    else table.set(word.toLowerCase());
    console.log(table);
  }
}

console.log(
  repeatedWord(
    "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
  )
);
module.exports = repeatedWord;
