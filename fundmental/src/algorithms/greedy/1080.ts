export const solution = (inputs: number[][]) => {
  const nm = inputs.splice(0, 1)[0];
  const N = nm[0];
  const M = nm[1];
  const matrix_1 = inputs.splice(0, N);
  const matrix_2 = inputs.splice(0, N);

  const changeN = N - 3;
  const changeM = M - 3;
  let changedMatrix = matrix_1;
  let changeCnt = 0;
  for (let n = 0; n <= changeN; n++) {
    for (let m = 0; m <= changeM; m++) {
      const tmp = changedMatrix.slice(n, n + 3);
      for (const item of tmp) {
        item[m] = item[m] ? 0 : 1;
        item[m + 1] = item[m + 1] ? 0 : 1;
        item[m + 2] = item[m + 2] ? 0 : 1;
      }
      changeCnt++;
      changedMatrix = [...changedMatrix.slice(0, n), ...tmp, ...changedMatrix.slice(n + 4)];

      const isContinue = changedMatrix.find((d, i) => {
        const isContinue = matrix_2[i].find((item, j) => {
          if (item !== d[j]) {
            return true;
          }
          return false;
        });
        return isContinue === undefined ? false : true;
      });
      if (!isContinue) break;
    }
  }

  return changeCnt;
};
