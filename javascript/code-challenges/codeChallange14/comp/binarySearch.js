'use strict';
const BinaryTree = require('./binaryTree');

class BinarySearchTree extends BinaryTree {
  constructor(root = null) {
    super(root);
  }


  add(value) {
    const newNode = {
      value: value,
      left: null,
      right: null
    };

    if (this.root === null) {
      this.root = newNode;
    } else {
      const insertNode = (node, newNode) => {
        if (newNode.value < node.value) {
          if (node.left === null) {
            node.left = newNode;
          } else {
            insertNode(node.left, newNode);
          }
        } else {
          if (node.right === null) {
            node.right = newNode;
          } else {
            insertNode(node.right, newNode);
          }
        }
      };

      insertNode(this.root, newNode);
    }
  }


  contains(value) {
    const searchNode = (node, value) => {
      if (node === null) {
        return false;
      }

      if (value === node.value) {
        return true;
      }

      if (value < node.value) {
        return searchNode(node.left, value);
      } else {
        return searchNode(node.right, value);
      }
    };

    return searchNode(this.root, value);
  }
  findMaximumValue() {
    if (!this.root) {
      return null;
    }

    let current = this.root;
    while (current.right) {
      current = current.right;
    }

    return current.value;
  }
}

module.exports = BinarySearchTree;
