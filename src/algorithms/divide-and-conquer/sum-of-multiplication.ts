/**
 * 숫자가 들어있는 배열이 주어진다.
 * 각 수자의 곱을 구해라.
 * 단 반복문을 사용해서는 안된다.
 */
// type ISolution = (() => ISolution) | number;
type ISolution = (() => ISolution) | number;

export const solution = (numArr: number[], init: number): ISolution => {
  if (!numArr[0]) {
    return init;
  }

  let newInit = init;
  const number = numArr[0];
  if (typeof number === 'number') {
    newInit = init * number;
  }
  return solution(numArr.slice(1), newInit);
};

console.log(solution([1, 2, 3], 1));

// JS버전 - 타입신경안써도 되서 편하네
// const solution = (numArr) => {
//   if (!numArr[0]) {
//     return 1;
//   }
//   return numArr[0] * solution(numArr.slice(1));
// };
// console.log(solution([1, 2, 3]));
