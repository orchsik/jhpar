export class MinPQ<T> {
  minheap: T[] = [];

  constructor() {
    this.minheap = [];
  }

  private parent(idx: number) {
    return Math.floor(idx / 2);
  }

  private left(idx: number) {
    return idx * 2 + 1;
  }

  private right(idx: number) {
    return idx * 2 + 2;
  }

  private swap(idx_1: number, idx_2: number) {
    const tmp = this.minheap[idx_1];
    this.minheap[idx_1] = this.minheap[idx_2];
    this.minheap[idx_2] = tmp;
  }

  private heapify(idx: number) {
    let parent = idx;
    let left = this.left(idx);
    let right = this.right(idx);
    if (left < this.minheap.length && this.minheap[left] < this.minheap[parent]) {
      parent = left;
    }
    if (right < this.minheap.length && this.minheap[right] < this.minheap[parent]) {
      parent = right;
    }

    if (parent !== idx) {
      this.swap(idx, parent);
      this.heapify(parent);
    }
  }

  size() {
    return this.minheap.length;
  }

  peek() {
    return this.minheap[0];
  }

  deque() {
    const root = this.minheap.shift();
    this.minheap.unshift(this.minheap[this.minheap.length - 1]);
    this.minheap.pop();
    this.heapify(0);
    return root;
  }

  enque(item: T) {
    this.minheap.push(item);
    let index = this.minheap.length - 1;
    while (this.minheap[index] < this.minheap[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }
}

// const minpq = new MinPQ();
// console.log(minpq);

// minpq.enque(3);
// minpq.enque(4);
// minpq.enque(2);
// minpq.enque(9);
// console.log(minpq);

// console.log(minpq.peek());
// console.log(minpq.peek());
// console.log(minpq.peek());
// console.log(minpq.peek());

// console.log(minpq.deque());
// console.log(minpq);
// console.log(minpq.deque());
// console.log(minpq);
// console.log(minpq.deque());
// console.log(minpq);
// console.log(minpq.deque());
// console.log(minpq);
// console.log(minpq.deque());
// console.log(minpq);
// console.log(minpq.deque());
// console.log(minpq);
// console.log(minpq.deque());
// console.log(minpq);
