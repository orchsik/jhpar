/**
 * 이진탐색 O(logn)
 * 배열의 중간에 임의의 값을 선택하여 탐색 진행
 * 재귀함수로 만들어라
 */
type Isolution = (() => any) | number;
export const solution = (anyArr: any[], binaryIdx: number, target: any): Isolution => {
  if (binaryIdx < 0 || binaryIdx > anyArr.length - 1) {
    return -1;
  } else if (anyArr.length === 1 && anyArr[binaryIdx] !== target) {
    return -1;
  } else if (anyArr.length === 1 && anyArr[binaryIdx] === target) {
    return binaryIdx;
  }

  const binaryValue = anyArr[binaryIdx];
  if (binaryValue === target) {
    return binaryIdx;
  } else if (binaryValue > target) {
    let newBinaryIdx = Math.floor((binaryIdx + 1) / 2);
    if (newBinaryIdx === binaryIdx) newBinaryIdx = binaryIdx - 1;
    return solution(anyArr, newBinaryIdx, target);
  } else {
    let newBinaryIdx = Math.floor((binaryIdx + anyArr.length - 1) / 2);
    if (newBinaryIdx === binaryIdx) newBinaryIdx = binaryIdx + 1;
    return solution(anyArr, newBinaryIdx, target);
  }
};

// const anyArr = [1];
// const anyArr = [1, 2];
// const anyArr = [1, 2, 3];
// const anyArr = [1, 2, 3, 4];
// const anyArr = [1, 2, 3, 4, 5];
const anyArr = [1, 2, 3, 4, 5, 6];
const binaryIdx = Math.ceil((anyArr.length - 1) / 2) || 0;
// console.log({ binaryIdx });
console.log(solution(anyArr, binaryIdx, 0));
console.log(solution(anyArr, binaryIdx, 1));
console.log(solution(anyArr, binaryIdx, 2));
console.log(solution(anyArr, binaryIdx, 3));
console.log(solution(anyArr, binaryIdx, 4));
console.log(solution(anyArr, binaryIdx, 5));
console.log(solution(anyArr, binaryIdx, 6));
console.log(solution(anyArr, binaryIdx, 7));
