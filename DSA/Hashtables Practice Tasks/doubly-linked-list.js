import LinkedListNode from './linked-list-node.js';

export class LinkedListNode {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

export class DoublyLinkedList {

  constructor(arr) {
      this.head = null;
      this.tail = null;
      this.map = new Map();

      for (let i = 0; i < arr.length; i++) {
          const node = new LinkedListNode(arr[i]);
          this.addLast(node);
          this.map.set(arr[i], node);
      }
  }

  addLast(node) {

      if (this.head) {
          this.tail.next = node;
          node.prev = this.tail;
      } else {
          this.head = node;
      }
      this.tail = node;

  }

  removeFirst() {
      if (!this.head) {
          throw new Error('Empty list!');
      }

      const value = this.head.value;

      if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.head = this.head.next;
          this.head.prev = null;
      }

      return value;
  }

  removeLast() {
      if (!this.head) {
          throw new Error('Empty list!');
      }

      const value = this.tail.value;

      if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.tail = this.tail.prev;
          this.tail.next = null;
      }
      return value;
  }

  removeNode(node) {
      if (this.head === node) {
          this.removeFirst();
      } else if (this.tail === node) {
          this.removeLast();
      } else {
          node.next.prev = node.prev;
          node.prev.next = node.next;
      }
      node.prev = null;
      node.next = null;

      return node;
  }


  insertAfter(node, newNode) {
      newNode.prev = node;
      newNode.next = node.next;
      if (node === this.tail) {
          this.tail = newNode;
      } else {
          node.next.prev = newNode;
      }

      node.next = newNode;
  }

  find(val) {
      return this.map.get(val);
  }

  values() {
      let arr = [];

      let pointer = this.head;
      while (pointer) {
          arr.push(pointer.value);
          pointer = pointer.next;
      }

      return arr;
  }

}