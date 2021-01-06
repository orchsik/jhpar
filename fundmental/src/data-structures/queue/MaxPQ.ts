class MaxPQ<T> {
  maxheap: T[] = [];
  constructor() {
    this.maxheap = [];
  }

  private parentIdx(index: number) {
    return Math.floor(index / 2);
  }

  private leftIdx(index: number) {
    return index * 2 + 1;
  }

  private rightIdx(index: number) {
    return index * 2 + 2;
  }

  private swap(idx_1: number, idx_2: number) {
    const tmp = this.maxheap[idx_1];
    this.maxheap[idx_1] = this.maxheap[idx_2];
    this.maxheap[idx_2] = tmp;
  }

  private heapify(index: number) {
    let parentIdx = index;
    let leftIdx = this.leftIdx(index);
    let rightIdx = this.rightIdx(index);
    if (leftIdx < this.maxheap.length && this.maxheap[leftIdx] > this.maxheap[parentIdx]) {
      parentIdx = leftIdx;
    }
    if (rightIdx < this.maxheap.length && this.maxheap[rightIdx] > this.maxheap[parentIdx]) {
      parentIdx = rightIdx;
    }

    if (parentIdx !== index) {
      this.swap(parentIdx, index);
      this.heapify(parentIdx);
    }
  }

  size() {
    return this.maxheap.length;
  }

  enque(item: T) {
    this.maxheap.push(item);
    let index = this.maxheap.length - 1;
    while (index !== 0 && this.maxheap[index] > this.maxheap[this.parentIdx(index)]) {
      this.swap(index, this.parentIdx(index));
      index = this.parentIdx(index);
    }
  }

  deque() {
    const root = this.maxheap.shift();
    this.maxheap.unshift(this.maxheap[this.maxheap.length - 1]);
    this.maxheap.pop();
    this.heapify(0);
    return root;
  }

  peek() {
    return this.maxheap[0];
  }
}

// const maxpq = new MaxPQ();
// console.log(maxpq);

// maxpq.enque(4);
// maxpq.enque(5);
// maxpq.enque(9);
// maxpq.enque(1);
// console.log(maxpq);

// console.log(maxpq.peek());
// console.log(maxpq.peek());
// console.log(maxpq.peek());
// console.log(maxpq.peek());

// maxpq.deque();
// console.log(maxpq);
// maxpq.deque();
// console.log(maxpq);
// maxpq.deque();
// console.log(maxpq);
// maxpq.deque();
// console.log(maxpq);
