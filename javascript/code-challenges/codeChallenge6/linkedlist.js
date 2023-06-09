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

  append(newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      return; // Empty list, cannot insert before any node
    }

    if (this.head.value === value) {
      const newNode = new Node(newValue);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        const newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    // No node with the specified value found, raise an exception
    throw new Error(`Node with value ${value} not found.`);
  }

  insertAfter(value, newValue) {
    if (!this.head) {
      return; // Empty list, cannot insert after any node
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        const newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    // No node with the specified value found, raise an exception
    throw new Error(`Node with value ${value} not found.`);
  }

  kthFromEnd(k) {
    if (k < 0) {
      throw new Error("Invalid value for k. k must be a non-negative integer.");
    }

    let length = 0;
    let current = this.head;

    while (current !== null) {
      length++;
      current = current.next;
    }

    if (k >= length) {
      throw new Error("The linked list length is smaller than k.");
    }

    current = this.head;
    let targetPosition = length - k - 1;

    for (let i = 0; i < targetPosition; i++) {
      current = current.next;
    }

    return current.value;
  }
}

module.exports = LinkedList;