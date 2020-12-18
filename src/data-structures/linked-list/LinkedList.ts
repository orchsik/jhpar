import { defaultEquals, IEqualsFunction } from '../utis';
import { Node } from '../models/linked-list-models';

export default class LinkedList<T> {
  protected count = 0;
  protected head: Node<T> | undefined;

  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {}

  // next를 가지지 않는 곳 까지~
  push(element: T) {
    const newNode = new Node(element);
    let node;

    if (!this.head) {
      // console.log('empty linekdList');
      this.head = newNode;
    } else {
      // console.log('linekdList', this);
      node = this.head;
      while (node?.next) {
        node = node.next;
      }
      node.next = newNode;
    }
    this.count++;
  }

  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(element: T, index: number) {
    if (index >= 0 && index < this.count) {
      const newNode = new Node(element);
      if (index === 0) {
        const node = this.head;
        newNode.next = node;
        this.head = newNode;
      } else {
        const previous = this.getElementAt(index - 1);
        newNode.next = previous.next;
        previous.next = newNode;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let target = this.head;
      if (index === 0) {
        this.head = target.next;
      } else {
        const previous = this.getElementAt(index - 1);
        target = previous.next;
        previous.next = target.next;
      }

      this.count--;
      return target.element; //지워진 원소
    }
    return undefined;
  }

  size() {
    return this.count;
  }

  indexOf(element: T) {
    let node = this.head;
    for (let i = 0; i < this.size() && node; i++) {
      if (this.equalsFn(element, node.element)) {
        return i;
      }
      node = node.next;
    }
    return -1;
  }

  remove(element: T) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  clear() {
    this.head = undefined;
    this.count = 0;
  }

  toString() {
    if (!this.head) {
      return '';
    }
    let objString = `${this.head.element}`;
    let node = this.head.next;
    for (let i = 1; i < this.size() && node; i++) {
      objString = `${objString}, ${node.element}`;
      node = node.next;
    }
    return objString;
  }
}

const linkedList = new LinkedList();
// # push
linkedList.push(1);
linkedList.push(2);
linkedList.push(4);
linkedList.push(600);
console.log(linkedList);

// # getElement
// var ele = linkedList.getElementAt(0);
// console.log(ele.element);
// var ele = linkedList.getElementAt(1);
// console.log(ele.element);

// insert
// linkedList.insert(3, 2);
// var ele = linkedList.getElementAt(2);
// console.log(ele.element);

// removeAt
// console.log(linkedList.removeAt(3));

// indexOf
// console.log(linkedList.indexOf(777));
// console.log(linkedList.indexOf(4));
// console.log(linkedList.indexOf(2));

// remove
// console.log(linkedList.remove(600));

// toString
// console.log(linkedList.toString());
