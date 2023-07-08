'use strict';

const Stack = require('../stacks');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should push a value onto the stack', () => {
    stack.push(5);
    expect(stack.top.value).toBe(5);
    expect(stack.length).toBe(1);
  });

  it('should push multiple values onto the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toBe(3);
    expect(stack.length).toBe(3);
  });

  it('should pop the top value off the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const poppedValue = stack.pop();
    expect(poppedValue).toBe(3);
    expect(stack.top.value).toBe(2);
    expect(stack.length).toBe(2);
  });

  it('should empty the stack after multiple pops', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.length).toBe(0);
  });

  it('should peek the next item on the stack', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
    expect(stack.length).toBe(1);
  });

  it('should instantiate an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.length).toBe(0);
  });

  it('should raise an exception when calling pop on an empty stack', () => {
    expect(() => stack.pop()).toThrow(Error);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.length).toBe(0);
  });

  it('should return null when calling peek on an empty stack', () => {
    expect(stack.peek()).toBe(null);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.length).toBe(0);
  });
});
