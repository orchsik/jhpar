/**
 * 힙 이란? 최대값 및 죄소값을 찾아내는 연산을 빠르게 하기 위해 고안된 자료구조.
 * 완전 이진트리의 구조를 이루고 있으며,
 * 부모 노드와 자식 노드간에 크기를 비교하여 자료를 구성.
 * <MinHeap>
 * 부모 노드의 키 값이 자식 노드의 키 값보다 작거나 같은 완전 이진 트리
 * key(부모 노드) <= key(자식 노드)
 */
import { Compare, defaultCompare, ICompareFunction, reverseCompare, swap } from '../utils';

export class MinHeap<T> {
  protected heap: T[] = [];
  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {}

  private getLeftIndex(index: number) {}

  private getRightIndex(index: number) {}

  private getParaentIndex(index: number) {}

  size() {}

  isEmpty() {}

  clear() {}

  findMinimum() {}

  private siftUp(index: number): void {}

  insert(value: T) {}

  private siftDown(index: number) {}

  extract() {}

  // 힙 생성 알고리즘
  heapify(array: T[]) {}

  getAsArray() {}
}
