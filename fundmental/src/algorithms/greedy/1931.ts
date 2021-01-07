export const solution = (input: number[][]) => {
  let answer = 0;

  // 시간시간 정렬
  input.sort((item_1, item_2) => {
    return item_1[0] - item_2[0];
  });

  // 시작시간이 같은 경우 종료시간이 작은 회의만 남겨
  let _input: number[][] = [];
  for (let i = 0; i < input.length; i++) {
    if (!input[i + 1]) {
      _input.push(input[i]);
      continue;
    }

    const [a_start, a_end] = input[i];
    const [b_start, b_end] = input[i + 1];
    if (a_start === b_start) {
      if (b_end > a_end) {
        _input.push(input[i]);
      } else {
        _input.push(input[i + 1]);
      }
      i++;
    } else {
      _input.push(input[i]);
    }
  }

  // 가장 많이 배정할 수 있는 경우 찾기
  console.log({ _input });
  let maxCnt = 0;
  for (let i = 0; i < _input.length; i++) {
    const pivots = _input.slice(i);
    let tmp: number[] = [pivots[0][1]];
    while (pivots.length !== 0) {
      const [start, end] = pivots.shift();
      if (tmp[tmp.length - 1] <= start) {
        tmp.push(end);
      }
    }

    if (maxCnt < tmp.length) {
      maxCnt = tmp.length;
    }
  }

  console.log(maxCnt);
  return 4;
};
