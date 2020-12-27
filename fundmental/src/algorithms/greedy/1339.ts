// 민식이는 수학학원에서 단어 수학 문제를 푸는 숙제를 받았다.
// 단어 수학 문제는 N개의 단어로 이루어져 있으며, 각 단어는 알파벳 대문자로만 이루어져 있다.
// 이때, 각 알파벳 대문자를 0부터 9까지의 숫자 중 하나로 바꿔서 N개의 수를 합하는 문제이다.
// 같은 알파벳은 같은 숫자로 바꿔야 하며, 두 개 이상의 알파벳이 같은 숫자로 바뀌어지면 안 된다.
// 예를 들어, GCF + ACDEB를 계산한다고 할 때, A = 9, B = 4, C = 8, D = 6, E = 5, F = 3, G = 7로 결정한다면,
// 두 수의 합은 99437이 되어서 최대가 될 것이다.
// N개의 단어가 주어졌을 때, 그 수의 합을 최대로 만드는 프로그램을 작성하시오.

export const solution = (N: number, alphList: string[]) => {
  // #1 alphaList를 문자열을 돌면서 알파멧마다 가중값을 누적해서 매핑(모든 알파벳의 값을 1로 설정)
  // #2 기본값이 높은 순서대로 알파벳 정렬
  // #3 숫자로 매핑한한후 합을 구한다.

  // #1
  const mapping: { [key: string]: number } = {};
  for (const _str of alphList) {
    for (let i = 0; i < _str.length; i++) {
      const alpha = _str[i];
      const value = Math.pow(10, _str.length - i - 1);
      if (!mapping[alpha]) {
        mapping[alpha] = value;
      } else {
        mapping[alpha] += value;
      }
    }
  }

  // #2
  const sortable = Object.entries(mapping)
    .sort(([, v1], [, v2]) => v2 - v1)
    .reduce((r, [k, v]) => [...r, k], []);

  // #3
  const numList = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  let maximum = 0;
  sortable.forEach((alpha, i) => {
    maximum += numList[i] * mapping[alpha];
  });

  return maximum;
};
