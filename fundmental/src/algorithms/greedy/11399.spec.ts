import { solution } from './11399';

describe('11399', () => {
  it('', () => {
    const N = 5;
    const pList = [1, 5, 4, 3, 2];
    const R = solution(N, pList);

    expect(R).toEqual(35);
  });
});
