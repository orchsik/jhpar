/**
 * deque: double-ended queue
 * 양쪽 끝에서 삽입과 삭제가 모두 가능한 구조.
 * Stack + Queue
 * 예) 입력이 한쪽으로만 가능한 Deque => 스크롤
 */
export default class Deque<T> {
  private targetBackKey: number;
  private targetFrontKey: number;
  private items: any;

  constructor() {
    this.targetBackKey = 0;
    this.targetFrontKey = 0;
    this.items = {};
  }

  addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.targetFrontKey > 0) {
      this.targetFrontKey--;
      this.items[this.targetFrontKey] = element;
    } else {
      for (let i = this.targetBackKey; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.targetBackKey++;
      this.items[0] = element;
    }
  }

  addBack(element: T) {
    this.items[this.targetBackKey] = element;
    this.targetBackKey++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.targetFrontKey];
    delete this.items[this.targetFrontKey];
    this.targetFrontKey++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.targetBackKey--;
    const result = this.items[this.targetBackKey];
    delete this.items[this.targetBackKey];
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.targetFrontKey];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.targetBackKey - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.targetBackKey = 0;
    this.targetFrontKey = 0;
  }

  size() {
    return this.targetBackKey - this.targetFrontKey;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.targetFrontKey]}`;
    for (let i = this.targetFrontKey + 1; i < this.targetBackKey; i++) {
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
