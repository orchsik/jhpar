/**
 * deque: double-ended queue
 * 양쪽 끝에서 삽입과 삭제가 모두 가능한 구조.
 * Stack + Queue
 * 예) 입력이 한쪽으로만 가능한 Deque => 스크롤
 */
export default class Deque<T> {
  private count: number;
  private targetFrontIdx: number;
  private items: any;

  constructor() {
    this.count = 0;
    this.targetFrontIdx = 0;
    this.items = {};
  }

  addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.targetFrontIdx > 0) {
      this.targetFrontIdx--;
      this.items[this.targetFrontIdx] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.items[0] = element;
    }
  }

  addBack(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.targetFrontIdx];
    delete this.items[this.targetFrontIdx];
    this.targetFrontIdx++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.targetFrontIdx];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.targetFrontIdx = 0;
  }

  size() {
    return this.count - this.targetFrontIdx;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.targetFrontIdx]}`;
    for (let i = this.targetFrontIdx + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

// const dq = new Deque();
// console.log(dq);

// addFront
// dq.addFront(4);
// dq.addFront(3);
// dq.addFront(2);
// dq.addFront(1);
// console.log(dq.toString());

// removeFront
// dq.removeFront();
// dq.removeFront();
// console.log(dq);

// dq.addFront(2);
// dq.addFront(1);
// console.log(dq);

// dq.removeBack();
// dq.removeBack();
// dq.removeBack();
// console.log(dq);
