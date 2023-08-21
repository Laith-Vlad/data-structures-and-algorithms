const  Node = require('./node'); // Update the path to the directory.js file
const Tree = require('./binarycombare');

describe('Node and Tree Directory Structure Tests', () => {
  // Test case for counting files in a directory structure
  test('Counting files in a directory', () => {
    const root = new Node('folder');
    const file1 = new Node('file');
    const folder1 = new Node('folder');
    folder1.addChildNode(new Node('file'));
    
    root.addChildNode(file1);
    root.addChildNode(folder1);

    // Tree object to represent the directory structure
    const tree = new Tree(root);

    // Expecting 2 files in the directory structure (file1 and the one inside folder1)
    expect(tree.root.countFiles()).toBe(2);
  });

  // Test case for comparing two directory structures
  test('Comparing two directory structures with the same number of files', () => {
    const dirStructure1 = new Node('folder');
    const file1 = new Node('file');
    const folder1 = new Node('folder');
    folder1.addChildNode(new Node('file'));
    
    dirStructure1.addChildNode(file1);
    dirStructure1.addChildNode(folder1);

    const dirStructure2 = new Node('folder');
    const file2 = new Node('file');
    const folder2 = new Node('folder');
    folder2.addChildNode(new Node('file'));
    
    dirStructure2.addChildNode(file2);
    dirStructure2.addChildNode(folder2);

    const tree1 = new Tree(dirStructure1);
    const tree2 = new Tree(dirStructure2);

    expect(tree1.compareDirectories(tree2)).toBe(true);
  });

  test('Comparing two directory structures with different numbers of files', () => {
    const dirStructure1 = new Node('folder');
    const file1 = new Node('file');
    
    dirStructure1.addChildNode(file1);

    const dirStructure2 = new Node('folder');
    const folder2 = new Node('folder');
    folder2.addChildNode(new Node('file'));
    folder2.addChildNode(new Node('file')); // Add an extra file to make it different from dirStructure1
    
    dirStructure2.addChildNode(folder2);

    const tree1 = new Tree(dirStructure1);
    const tree2 = new Tree(dirStructure2);

    expect(tree1.compareDirectories(tree2)).toBe(false); // This should now return false
  });
});
