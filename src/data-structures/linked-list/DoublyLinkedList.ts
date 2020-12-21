/**
 * doubly linked list의 핵심은 노드와 노드가 서로 연결되어 있다는 점.
 * 양방향으로 연결되어 있기 때문에 노드를 탐색하는 방향이 양쪽으로 가능
 * 뒤에서부터 찾는게 빠르면 뒤에서부터 찾는다. 연결리스트에 비해 검색속도 2배
 *
 * 이중연결리스트 vs 연결리스트
 * 장점: 탐색속도 향상
 * 단점: 메모리 사용 증가
 * 결론: 단점에 비해 장점이 좋아 현실에선 대부분 이중연결리스트 사용
 */
import LinkedList from './LinkedList';
import { DoublyNode } from '../models/linked-list-models';
import { defaultEquals, IEqualsFunction } from '../utis';

export default class DoublyLinkedList<T> extends LinkedList<T> {
  protected head: DoublyNode<T> | undefined;
  protected tail: DoublyNode<T> | undefined;

  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {
    super(equalsFn);
  }

  clear() {
    super.clear();
    this.tail = undefined;
  }

  getHead() {
    return this.tail;
  }

  getTail() {
    return this.tail;
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

  indexOf(element: T) {
    let target = this.head;
    let index = 0;
    while (target) {
      if (this.equalsFn(element, target.element)) {
        return index;
      }
      index++;
      target = target.next;
    }

    return -1;
  }

  invertToString() {
    if (!this.tail) {
      return '';
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    while (previous) {
      objString = `${objString}, ${previous.element}`;
      previous = previous.prev;
    }
    return objString;
  }

  push(element: T) {
    const newNode = new DoublyNode(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.count++;
  }

  // 원래 index의 원소는 뒤로 이동
  insert(element: T, index: number) {
    if (index < 0 || index > this.count) {
      return false;
    }

    const newNode = new DoublyNode(element);
    if (index === 0) {
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        const current = this.head;
        newNode.next = current;
        current.prev = newNode;
        this.head = newNode;
      }
    } else if (index === this.count) {
      const current = this.tail;
      newNode.prev = current;
      current.next = newNode;
      this.tail = newNode;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous.next;
      newNode.next = current;
      newNode.prev = previous;
      previous.next = newNode;
      current.prev = newNode;
    }
    this.count++;
    return true;
  }

  removeAt(index: number) {
    if (index < 0 || index >= this.size()) {
      return undefined;
    }

    let current: DoublyNode<T>;
    if (index === 0) {
      current = this.head;
      this.head = current.next;
      if (this.count <= 1) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined;
      }
    } else if (index === this.count - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = undefined;
    } else {
      current = this.getElementAt(index);
      const previous = current.prev;
      previous.next = current.next;
      current.next.prev = previous;
    }

    this.count--;
    return current.element;
  }
}

const doubly = new DoublyLinkedList();
// console.log(doubly.toString());
// console.log(doubly.getElementAt(0));
// console.log(doubly.getHead());

// push
// doubly.push(1);
// doubly.push(1);
// doubly.removeAt(0);
// console.log(doubly);
// doubly.push(3);
// doubly.push(4);
// console.log(doubly.toString());
// console.log(doubly.getElementAt(0));
// console.log(doubly.getElementAt(1));

// insert
// doubly.insert(0, 0);
// doubly.insert(2, 2);
// doubly.insert(5, 5);
// console.log(doubly.toString());

// removeAt
// console.log(doubly.remove(0));
// console.log(doubly.getElementAt(0));

// invertToString
// console.log(doubly.invertToString());

// clear
// doubly.clear();
// console.log(doubly.toString());
// console.log(doubly);
