const PseudoQueue = require('./pusedo');

describe('PseudoQueue', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  test('enqueue and dequeue values', () => {
    pseudoQueue.enqueue(5);
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);

    expect(pseudoQueue.dequeue()).toBe(5);
    expect(pseudoQueue.dequeue()).toBe(10);
    expect(pseudoQueue.dequeue()).toBe(15);
  });

  test('dequeue from an empty queue', () => {
    expect(() => {
      pseudoQueue.dequeue();
    }).toThrow('Pseudo Queue is empty');
  });
});