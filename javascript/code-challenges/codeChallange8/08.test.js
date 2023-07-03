
const { Node, LinkedList, zipedLists } = require('./linkedListzipped');


describe('LinkedList', () => {
  describe('append', () => {
    test('should append nodes to the linked list', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.head.value).toBe(1);
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);
      expect(list.head.next.next.next).toBeNull();
    });
  });
});

describe('zipedLists', () => {
  test('should zip two linked lists correctly', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    const mergedList = zipedLists(list1, list2);

    expect(mergedList.head.value).toBe(1);
    expect(mergedList.head.next.value).toBe(5);
    expect(mergedList.head.next.next.value).toBe(3);
    expect(mergedList.head.next.next.next.value).toBe(9);
    expect(mergedList.head.next.next.next.next.value).toBe(2);
    expect(mergedList.head.next.next.next.next.next.value).toBe(4);
    expect(mergedList.head.next.next.next.next.next.next).toBeNull();
  });

  test('should handle empty lists correctly', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    const list2 = new LinkedList();

    const mergedList = zipedLists(list1, list2);

    expect(mergedList.head).toBe(list1.head);
    expect(mergedList.head.next).toBe(list1.head.next);
    expect(mergedList.head.next.next).toBe(list1.head.next.next);
    expect(mergedList.head.next.next.next).toBeNull();
  });

  test('should handle lists with different lengths', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);

    const mergedList = zipedLists(list1, list2);

    expect(mergedList.head.value).toBe(1);
    expect(mergedList.head.next.value).toBe(5);
    expect(mergedList.head.next.next.value).toBe(3);
    expect(mergedList.head.next.next.next.value).toBe(9);
    expect(mergedList.head.next.next.next.next.value).toBe(2);
    expect(mergedList.head.next.next.next.next.next).toBeNull();
  });
});
