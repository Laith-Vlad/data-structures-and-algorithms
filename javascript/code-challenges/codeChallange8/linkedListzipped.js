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
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

function zipedLists(list1, list2) {
  if (list1.head === null) {
    return list2;
  }
  if (list2.head === null) {
    return list1;
  }

  let current1 = list1.head;
  let current2 = list2.head;
  const result = new LinkedList();
  let resultHead = null;

  if (current1 !== null && current2 === null) {
    result.head = current1;
    return result;
  }

  if (current1 === null && current2 !== null) {
    result.head = current2;
    return result;
  }

  while (current1 !== null && current2 !== null) {
    if (resultHead === null) {
      resultHead = current1;
      result.head = resultHead;
    } else {
      resultHead.next = current1;
      resultHead = resultHead.next;
    }
    current1 = current1.next;

    resultHead.next = current2;
    resultHead = resultHead.next;
    current2 = current2.next;
  }

  if (current1 !== null) {
    resultHead.next = current1;
  } else if (current2 !== null) {
    resultHead.next = current2;
  }

  return result;
}


module.exports = {
  LinkedList: LinkedList,
  zipedLists: zipedLists };
