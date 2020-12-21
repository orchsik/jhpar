/**
 * 자동 정렬 기능이 탑재된 연결리스트를 만들어보자
 */
import { Compare, defaultCompare, defaultEquals, ICompareFunction, IEqualsFunction } from '../utis';
import LinkedList from './LinkedList';

export default class SortedLinkedList<T> extends LinkedList<T> {
  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals, protected compareFn: ICompareFunction<T> = defaultCompare) {
    super(equalsFn);
  }

  private getIndexNextSortedElement(element: T) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }

  push(element: T) {
    if (this.isEmpty()) {
      super.push(element);
    } else {
      const index = this.getIndexNextSortedElement(element);
      super.insert(element, index);
    }
  }

  insert(element: T, index: number = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    index = this.getIndexNextSortedElement(element);
    return super.insert(element, index);
  }
}

const sortedll = new SortedLinkedList();
console.log(sortedll);
