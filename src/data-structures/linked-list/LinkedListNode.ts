export default class LinkedListNode {
  constructor(public value: any, public next: any) {
    this.value = value;
    this.next = next;
  }

  toString(cb?: Function): string {
    return cb ? cb(this.value) : `${this.value}`;
  }
}
