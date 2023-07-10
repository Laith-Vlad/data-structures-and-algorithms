'use strict';
const Stack = require('../codeChallange10/stacks');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.isEmpty()) {
      throw new Error('Pseudo Queue is empty');
    }
    return this.stack1.pop();
  }
}
module.exports =PseudoQueue;

