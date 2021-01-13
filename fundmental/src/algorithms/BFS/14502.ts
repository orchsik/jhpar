const countMaxSafe = (inputs: number[][]) => {
  let maxSafe = 0;
  inputs.forEach((ds) => {
    ds.forEach((item) => {
      if (item === 0) {
        maxSafe++;
      }
    });
  });
  return maxSafe;
};

export const solution = (inputs: number[][]) => {
  inputs = [
    [2, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 1, 2, 0],
    [0, 1, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
  ];

  const tmp = inputs;
  let changeCnt = 0;
  loop1: for (const [i, ds] of tmp.entries()) {
    for (let [j, d] of ds.entries()) {
      if (d === 0) {
        changeCnt++;
        tmp[i][j] = 1;
      }
      if (changeCnt === 3) {
        break loop1;
      }
    }
  }
  console.log(tmp);

  // inputs = [
  //   [2, 1, 0, 0, 1, 1, 0],
  //   [1, 0, 1, 0, 1, 2, 0],
  //   [0, 1, 1, 0, 1, 0, 0],
  //   [0, 1, 0, 0, 0, 1, 0],
  //   [0, 0, 0, 0, 0, 1, 1],
  //   [0, 1, 0, 0, 0, 0, 0],
  //   [0, 1, 0, 0, 0, 0, 0],
  // ];

  // inputs = [
  //   [2, 1, 0, 0, 1, 1, 2],
  //   [1, 0, 1, 0, 1, 2, 2],
  //   [0, 1, 1, 0, 1, 2, 2],
  //   [0, 1, 0, 0, 0, 1, 2],
  //   [0, 0, 0, 0, 0, 1, 1],
  //   [0, 1, 0, 0, 0, 0, 0],
  //   [0, 1, 0, 0, 0, 0, 0],
  // ];

  // let maxSafe = countMaxSafe(inputs);

  // console.log(maxSafe);
};
