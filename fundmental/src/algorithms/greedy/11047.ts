// 준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.

// 동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.

export const solution = (N: number, K: number, coinList: number[]) => {
  coinList.sort((a, b) => b - a);

  let R = 0;
  let total = 0;
  for (const coin of coinList) {
    if (coin <= K) {
      const r = Math.floor(K / coin);
      total += coin * r;
      K = K % coin;
      R += r;
    }

    if (K === 0) break;
  }
  return R;
};

// const N = 10;
// const K = 4200;
// const coinList = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];

// const R = solution(N, K, coinList);
// console.log(R);
