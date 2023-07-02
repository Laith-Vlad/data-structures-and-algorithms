const LinkedList = require('./linkedlist');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should successfully add a node to the end of the linked list', () => {
    linkedList.append(1);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next).toBeNull();
  });

  it('should successfully add multiple nodes to the end of a linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
    expect(linkedList.head.next.next.next).toBeNull();
  });

  it('should successfully insert a node before a node located in the middle of a linked list', () => {
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.insertBefore(3, 2);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
    expect(linkedList.head.next.next.next.value).toBe(4);
    expect(linkedList.head.next.next.next.next).toBeNull();
  });

  it('should successfully insert a node before the first node of a linked list', () => {
    linkedList.append(1);
    linkedList.insertBefore(1, 0);
    expect(linkedList.head.value).toBe(0);
    expect(linkedList.head.next.value).toBe(1);
    expect(linkedList.head.next.next).toBeNull();
  });

  it('should successfully insert after a node in the middle of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(4);
    linkedList.insertAfter(2, 3);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
    expect(linkedList.head.next.next.next.value).toBe(4);
    expect(linkedList.head.next.next.next.next).toBeNull();
  });

  it('should successfully insert a node after the last node of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.insertAfter(2, 3);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
    expect(linkedList.head.next.next.next).toBeNull();
  });
  
  describe('kthFromEnd', () => {
    test('throws an error when k is greater than the length of the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
  
      expect(() => linkedList.kthFromEnd(3)).toThrow('The linked list length is smaller than k.');
    });
  
    test('throws an error when k and the length of the list are the same', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
  
      expect(() => linkedList.kthFromEnd(3)).toThrow('The linked list length is smaller than k.');
    });
  
    test('throws an error when k is not a positive integer', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
  
      expect(() => linkedList.kthFromEnd(-1)).toThrow('Invalid value for k. k must be a non-negative integer.');
    });
  
    test('returns the value of the only node when the linked list is of size 1', () => {
      const linkedList = new LinkedList();
      linkedList.append(5);
  
      expect(linkedList.kthFromEnd(0)).toBe(5);
    });
  
    test('returns the correct value when k is in the middle of the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(3);
      linkedList.append(8);
      linkedList.append(2);
      linkedList.append(5);
  
      expect(linkedList.kthFromEnd(2)).toBe(8);
    });
  });
 
});
