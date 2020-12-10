import Comparator from '../comparator/Comparator';
import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  head: LinkedListNode = new LinkedListNode();
  tail: LinkedListNode = new LinkedListNode();
  compare: Comparator;
  constructor(comparatorFunction?: Function) {
    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value: any) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  append(value: any) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = value;
      this.tail = value;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
}

const a = new LinkedList();
a.append(1);
// a.append(2);
// a.append(3);
console.log(a);
