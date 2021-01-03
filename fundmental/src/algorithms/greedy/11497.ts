export const solution = (input: [number[], number[], number[]]) => {
  const levelList = input.map((testcase) => {
    const evenList: number[] = [];
    const oddList: number[] = [];
    testcase.sort();
    testcase.forEach((item, i) => {
      if (i % 2 === 0) {
        evenList.push(item);
      } else {
        oddList.push(item);
      }
    });
    const totalList = [...evenList, ...oddList.reverse()];
    const level = totalList.reduce((acc, item, i) => {
      const x = totalList[i];
      const y = totalList[i + 1];
      if (!y) return acc;
      if (acc < Math.abs(y - x)) {
        return Math.abs(y - x);
      } else {
        return acc;
      }
    }, 0);
    return level;
  });

  return levelList;
};
