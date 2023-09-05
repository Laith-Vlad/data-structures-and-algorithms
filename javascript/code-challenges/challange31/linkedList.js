"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.size++;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = new Node(value);
    this.size++;
    return this.head;
  }

  find(key) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value[key]) return currentNode.value[key];
      currentNode = currentNode.next;
    }

    return null;
  }

  getKeys() {
    let keyArr = [];
    let current = this.head;

    while (current) {
      keyArr.push(...Object.keys(current.value));
      current = current.next;
    }

    return keyArr;
  }
}

module.exports = LinkedList;
