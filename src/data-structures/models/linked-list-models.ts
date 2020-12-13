export class Node<T> {
  constructor(public element: T, public next?: Node<T>) {}
}

export class DoubleNode<T> extends Node<T> {
  constructor(public element: T, public next: DoubleNode<T>, public prev: DoubleNode<T>) {
    super(element, next);
  }
}
