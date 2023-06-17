const LinkedList = require('./linkedList');
describe('Linked List', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });
  it('should instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
  });

  it('should properly insert into the linked list', () => {
    list.insert('c');
    list.insert('b');
    list.insert('a');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });

  it('should properly point the head to the first node', () => {
    list.insert('c');
    list.insert('b');
    list.insert('a');
    expect(list.head.value).toEqual('a');
  });

  it('should properly insert multiple nodes into the linked list', () => {
    list.insert('e');
    list.insert('d');
    list.insert('c');
    list.insert('b');
    list.insert('a');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { e } -> NULL');
  });

  it('should return true when finding a value that exists in the linked list', () => {
    list.insert('c');
    list.insert('b');
    list.insert('a');
    expect(list.includes('b')).toBe(true);
  });

  it('should return false when searching for a value that does not exist in the linked list', () => {
    list.insert('c');
    list.insert('b');
    list.insert('a');
    expect(list.includes('d')).toBe(false);
  });
});
