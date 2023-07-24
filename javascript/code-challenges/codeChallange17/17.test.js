const breadthFirst = require('./breadthfirstTree');
const Node = require('./node.js');
describe('breadthFirst', () => {
    test('should return an empty array for an empty tree', () => {
      expect(breadthFirst(null)).toEqual([]);
    });
  
    test('should return the values of the nodes in breadth-first order', () => {
      
      const root = new Node(3);
      root.left = new Node(8);
      root.right = new Node(5);
      root.left.left = new Node(2);
      root.left.right = new Node(6);
      root.right.right = new Node(9);
      root.left.right.left = new Node(5);
      root.left.right.right = new Node(11);
      root.right.right.left = new Node(4);
  
      expect(breadthFirst(root)).toEqual([3, 8, 5, 2, 6, 9, 5, 11, 4]);
    });
  });