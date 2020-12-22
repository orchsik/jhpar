/**
 * 이진탐색 O(logn)
 * 배열의 중간에 임의의 값을 선택하여 탐색 진행
 * 재귀함수로 만들어라
 */
type Isolution = (() => any) | number;
export const solution = (anyArr: any[], binaryIdx: number, target: any): Isolution => {
  if (anyArr.length === 1 && anyArr[binaryIdx] !== target) {
    return -1;
  } else if (anyArr.length === 1 && anyArr[binaryIdx] === target) {
    return binaryIdx;
  }

  const binaryValue = anyArr[binaryIdx];
  if (binaryValue === target) {
    return binaryIdx;
  } else if (binaryValue > target) {
    return solution(anyArr, Math.floor(binaryIdx / 2), target);
  } else {
    return solution(anyArr, Math.floor((binaryIdx + anyArr.length - 1) / 2), target);
  }
};

// const anyArr = [1];
// const anyArr = [1, 2, 3, 4, 5];
const anyArr = [1, 2, 3, 4, 5, 6];
const binaryIdx = Math.floor(anyArr.length - 1 / 2);
console.log(solution(anyArr, binaryIdx, 1));
