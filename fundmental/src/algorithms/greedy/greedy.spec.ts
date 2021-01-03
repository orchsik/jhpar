import { solution } from './11497';

describe('', () => {
  it('test1', () => {
    var input: [number[], number[], number[]] = [
      [13, 10, 12, 11, 10, 11, 12],
      [2, 4, 5, 7, 9],
      [6, 6, 6, 6, 6, 6, 6, 6],
    ];
    var answer = solution(input);
    expect(answer).toEqual([1, 4, 0]);
  });
});
