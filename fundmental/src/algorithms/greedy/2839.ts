// 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다.
// 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.

// 최대한 적은 봉지를 들고 가려고 한다.
// 예를 들어 18킬로그램 설탕을 배달해야 할 때,
// 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.

// 상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.
// 정확하게 N킬로그램을 만들 수 없다면 -1을 출력한다.

// 18 -> 4
export const solution = (input: number) => {
  const maxMok = Math.floor(input / 5);

  let result = 0;
  for (let currentMok = maxMok; currentMok > -1; currentMok--) {
    const reminder = input - 5 * currentMok;
    const reminderlist = String(reminder).split('');
    const sum = reminderlist.reduce((acc, item) => {
      return acc + +item;
    }, 0);

    if (sum % 3 === 0) {
      result += currentMok;
      result += reminder / 3;
      break;
    }
  }
  result = result || -1;
  return result;
};
