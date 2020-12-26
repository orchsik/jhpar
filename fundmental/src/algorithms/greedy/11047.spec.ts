import { solution } from './11047';

describe('11047', () => {
  it('', () => {
    const N = 10;
    const K = 4200;
    const coinList = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];
    const R = solution(N, K, coinList);
    // expect(R).toEqual([5, 4, 3, 2, 1]);
    expect(R).toEqual(6);
  });
});
