/**
 * 퀵정렬: 분할 정복 알고리즘. 빠르다.
 * 퀵 정렬 수행속도: O(nlogn)
 * 선택 정렬 수행속도: O(n^2)
 * 숫자배열을 줄테니까 퀵정렬을 만들어봐라.
 * 재귀함수로 만들어라
 */

export const solution = (numArr: number[]): number[] => {
  if (numArr.length < 2) {
    return numArr;
  }
  const pivot = numArr[0];
  const lessArr = [];
  const greaterArr = [];
  for (const num of numArr) {
    num < pivot && lessArr.push(num);
    num > pivot && greaterArr.push(num);
  }
  return [...solution(lessArr), pivot, ...solution(greaterArr)];
};

console.log(solution([]));
console.log(solution([1]));
console.log(solution([2, 1]));
console.log(solution([1, 56, 3, 456, 84, 1234, 41, 3456, 45678, 12, 234, 3456, 1234, 123, 3457, 678, 6789]));
