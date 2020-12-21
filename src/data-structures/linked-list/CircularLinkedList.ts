/**
 * 가장 뒤 노드가 가장 앞노드를 본다.
 */
import { defaultEquals, IEqualsFunction } from '../utis';
import LinkedList from './LinkedList';
import { Node } from '../models/linked-list-models';

export default class CircularLinkedList<T> extends LinkedList<T> {
  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {
    super(equalsFn);
  }

  push(element: T) {
    const newNode = new Node(element);
    let current;
    if (!this.head) {
      this.head = newNode;
    } else {
      current = this.getElementAt(this.size() - 1);
      current.next = newNode;
    }
    // 순환될 수 있게 head Node를 newNode의 next에 설정
    newNode.next = this.head;
    this.count++;
  }

  insert(element: T, index: number) {
    if (index < 0 && index > this.count) {
      return false;
    }

    const newNode = new Node(element);
    if (index === 0) {
      if (!this.head) {
        this.head = newNode;
        newNode.next = this.head;
      } else {
        const current = this.head;
        newNode.next = current;

        const lastNode = this.getElementAt(this.count - 1);
        lastNode.next = newNode;

        this.head = newNode;
      }
    } else {
      const previous = this.getElementAt(index - 1);
      newNode.next = previous.next;
      previous.next = newNode;
    }
    this.count++;
    return true;
  }

  removeAt(index: number) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let current;
    if (index === 0) {
      if (this.size() === 1) {
        current = this.head;
        this.head = undefined;
      } else {
        current = this.head;
        this.head = current.next;
        const lastNode = this.getElementAt(this.count - 1);
        lastNode.next = current.next;
      }
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }
    this.count--;
    return current.element;
  }
}

// const cir = new CircularLinkedList();
// console.log(cir);

// push
// cir.push(2);
// cir.push(3);
// cir.push(4);
// console.log(cir.toString());

// insert
// cir.insert(0, 0);
// cir.insert(1, 1);
// console.log(cir.toString());
// console.log(cir.getElementAt(4).next.element);

// removeAt
// cir.removeAt(0);
// cir.removeAt(3);
// console.log(cir.toString());
// console.log(cir.getElementAt(2).next.element);
