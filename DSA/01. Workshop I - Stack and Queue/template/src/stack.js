import LinkedListNode from './linked-list-node.js';
export default class Stack {
  constructor() {
    this.elements = [];
  }

  push(value) {
    this.elements.push(value);
  }

  pop() {
    if (this.isEmpty) {
      throw new Error('Stack is empty');
    }
    return this.elements.pop();
  }

  peek() {
    if (this.isEmpty) {
      throw new Error('Stack is empty');
    }
    return this.elements[this.elements.length - 1] ;
  }

  get count() {
    return this.elements.length;
  }

  get isEmpty() {
    return this.elements.length === 0;
  }
}
