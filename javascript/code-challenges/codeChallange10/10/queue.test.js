'use strict';

const Queue = require('../queue');


describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should enqueue a value into the queue', () => {
    queue.enqueue(5);
    expect(queue.front.value).toBe(5);
    expect(queue.rear.value).toBe(5);
    expect(queue.length).toBe(1);
  });

  it('should enqueue multiple values into the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toBe(1);
    expect(queue.rear.value).toBe(3);
    expect(queue.length).toBe(3);
  });

  it('should dequeue the expected value from the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    const dequeuedValue = queue.dequeue();
    expect(dequeuedValue).toBe(1);
    expect(queue.front.value).toBe(2);
    expect(queue.length).toBe(2);
  });

  it('should peek into the queue and see the expected value', () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
    expect(queue.length).toBe(1);
  });

  it('should empty the queue after multiple dequeues', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length).toBe(0);
  });

  it('should instantiate an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length).toBe(0);
  });

  it('should raise an exception when calling dequeue on an empty queue', () => {
    expect(() => queue.dequeue()).toThrow(Error);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length).toBe(0);
  });

  it('should return null when calling peek on an empty queue', () => {
    expect(queue.peek()).toBe(null);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length).toBe(0);
  });
});
