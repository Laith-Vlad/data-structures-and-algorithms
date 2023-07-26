
'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.results = [];
  }
}

function fizzBuzz(number) {
  let output = '';
  if (number % 3 === 0) {
    output += 'fizz';
  }
  if (number % 5 === 0) {
    output += 'buzz';
  }

  if (output === '') {
    output = number.toString();
  }

  return output;
}

class fizzBuzzTree {
  constructor() {
    this.root = null;
  }

  insert(value, parentValue) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      const parentNode = this.findNode(parentValue, this.root);
      if (parentNode) {
        parentNode.children.push(newNode);
      } else {
        throw new Error("Parent node not found.");
      }
    }
    newNode.results.push(fizzBuzz(value));
  }

  findNode(value, node) {
    if (!node) return null;
    if (node.value === value) return node;

    let result = null;
    for (const child of node.children) {
      result = this.findNode(value, child);
      if (result) break;
    }
    return result;
  }

  traverseDFS(node = this.root) {
    if (!node) return;
    console.log(`Node: ${node.value}, FizzBuzz: ${node.results.join(', ')}`);
    for (const child of node.children) {
      this.traverseDFS(child);
    }
  }
}
module.exports = fizzBuzzTree;
