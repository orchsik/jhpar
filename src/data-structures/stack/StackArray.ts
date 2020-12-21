export default class StackArray<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(element: T) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  toArray() {
    return this.items;
  }

  toString() {
    return this.items.toString();
  }
}

// const sl = new StackArray();
// sl.push(0);
// sl.push(1);
// sl.push(2);
// console.log(sl);

// console.log(sl.pop());
// console.log(sl.pop());
// console.log(sl.pop());
// console.log(sl.pop());
// console.log(sl.pop());

// sl.push(0);
// sl.push(1);
// sl.push(2);

// console.log(sl.peek());
// console.log(sl.peek());
