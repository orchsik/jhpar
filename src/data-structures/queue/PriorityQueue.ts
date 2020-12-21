/**
 * 우선순위 큐
 * 무조건 FIFO 가 아니라 우선순위가 높은것부터 OUT
 * 여기 예제는 element의 값이 낮을수록 우선순위가 높게 구현
 * 시간을 우선순위로 어떻게 정렬하냐에 따라 스택, 큐로 사용가능.
 */
import { Compare, defaultCompare, ICompareFunction } from '../utils';

export default class PriorityQueue<T> {
  private items: T[];

  constructor(private compareFn: ICompareFunction<T> = defaultCompare, private compare: Compare = Compare.LESS_THAN) {
    this.items = [];
  }

  enqueue(element: T) {
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.compareFn(element, this.items[i]) === this.compare) {
        this.items.splice(i, 0, element); // 인덱스 i에 element를 insert
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(element);
    }
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    return this.items;
  }
}

const pq = new PriorityQueue();
// console.log(pq);

// enqueue
// pq.enqueue(2);
// pq.enqueue(3);
// pq.enqueue(1);
// console.log(pq);

// dequeue
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());

// toString
// console.log(pq.toString());
