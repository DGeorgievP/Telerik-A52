import LinkedListNode from './linked-list-node.js';

export default class DoublyLinkedList {
  #head;
  #tail;
  #count;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#count = 0;
  }

  addFirst(value) {
    const newNode = new LinkedListNode(value);
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      newNode.next = this.#head;
      this.#head.prev = newNode;
      this.#head = newNode;
    }
    this.#count++;
  }

  addLast(value) {
    const newNode = new LinkedListNode(value);
    if (!this.#tail) {
      this.#tail = newNode;
      this.#head = newNode;
    } else {
      newNode.prev = this.#tail;
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    this.#count++;
  }

  removeFirst() {
    if (!this.#head) {
      throw new Error('Empty');
    }

    const removedVal = this.#head.value;
    this.#head = this.#head.next;
    if (this.#head) {
      this.#head.prev = null;
    } else {
      this.#tail = null;
    }

    this.#count--;
    return removedVal;
  }

  removeLast() {
    if (!this.#tail) {
      throw new Error('empty');
    }
    const removedVal = this.#tail.value;
    this.#tail = this.#tail.prev;
    if (this.#tail) {
      this.#tail.next = null;
    } else {
      this.#head = null;
    }

    this.#count--;
    return removedVal;
  }

  insertBefore(node, value) {
    if (!node) {
      throw new Error('Invalide node');
    }

    const newNode = new LinkedListNode(value);
    newNode.prev = node.prev;
    newNode.next = node;

    if (node.prev) {
      node.prev.next = newNode;
    } else {
      this.#head = newNode;
    }

    node.prev = newNode;
    this.#count++;
  }

  insertAfter(node, value) {
    if (!node) {
      throw new Error('Invalide node');
    }

    const newNode = new LinkedListNode(value);
    newNode.prev = node;
    newNode.next = node.next;

    if (node.next) {
      node.next.prev = newNode;
    } else {
      this.#tail = newNode;
    }

    node.next = newNode;
    this.#count++;
  }

  find(val) {
    let current = this.#head;
    while (current) {
      if (current.value === val) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  values() {
    const result = [];
    let current = this.#head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  get count() {
    return this.#count;
  }
}
