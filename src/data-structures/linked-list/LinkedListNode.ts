export default class LinkedLinstNode {
  value: any;
  next: any;
  constructor(value?: any, next?: any) {
    this.value = value;
    this.next = next;
  }

  toString(cb?: Function) {
    return cb ? cb(this.value) : `${this.value}`;
  }
}
