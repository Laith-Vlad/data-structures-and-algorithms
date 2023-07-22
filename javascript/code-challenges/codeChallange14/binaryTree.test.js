'use strict';

const Node = require('./comp/node');
const BT = require('./comp/binaryTree');
const BST = require('./comp/binarySearch');



describe('Binary Tree and Binary Search Tree Testing', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BT();
    expect(tree.root).toBeNull();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const rootNode = new Node(1);
    const tree = new BT(rootNode);
    expect(tree.root).toEqual(rootNode);
  });

  it('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const tree = new BST();
    tree.add(4);
    tree.add(2);
    tree.add(6);

    expect(tree.root.value).toEqual(4);
    expect(tree.root.left.value).toEqual(2);
    expect(tree.root.right.value).toEqual(6);
  });

  it('Can successfully return a collection from a pre-order traversal', () => {
    const rootNode = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    rootNode.left = two;
    rootNode.right = three;

    const tree = new BT(rootNode);
    const expectedResult = [1, 2, 3];
    expect(tree.preOrder()).toEqual(expectedResult);
  });

  it('Can successfully return a collection from an in-order traversal', () => {
    const rootNode = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    rootNode.left = two;
    rootNode.right = three;

    const tree = new BT(rootNode);
    const expectedResult = [2, 1, 3];
    expect(tree.inOrder()).toEqual(expectedResult);
  });

  it('Can successfully return a collection from a post-order traversal', () => {
    const rootNode = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    rootNode.left = two;
    rootNode.right = three;

    const tree = new BT(rootNode);
    const expectedResult = [2, 3, 1];
    expect(tree.postOrder()).toEqual(expectedResult);
  });

  it('Returns true/false for the contains method, given an existing or non-existing node value', () => {
    const tree = new BST();
    tree.add(4);
    tree.add(2);
    tree.add(6);

    expect(tree.contains(4)).toBeTruthy();
    expect(tree.contains(2)).toBeTruthy();
    expect(tree.contains(6)).toBeTruthy();
    expect(tree.contains(1)).toBeFalsy();
    expect(tree.contains(3)).toBeFalsy();
    expect(tree.contains(5)).toBeFalsy();
  });
  it('Can successfully find the maximum value in a Binary Search Tree', () => {
    const tree = new BST();
    tree.add(4);
    tree.add(2);
    tree.add(6);
    tree.add(10);
    tree.add(5);
    tree.add(8);

    const maxVal = tree.findMaximumValue();
    expect(maxVal).toEqual(10);
  });
});
