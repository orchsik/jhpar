import { solution } from './1931';

describe('', () => {
  it('test1', () => {
    var input = [
      [1, 4],
      [3, 5],
      [0, 6],
      [5, 7],
      [3, 8],
      [5, 9],
      [6, 10],
      [8, 11],
      [8, 12],
      [2, 13],
      [12, 14],
    ];

    var answer = solution(input);
    expect(answer).toEqual(4);
  });

  // it('test2', () => {
  //   var input = 4;
  //   var answer = solution(input);
  //   expect(answer).toEqual(-1);
  // });

  // it('test3', () => {
  //   var input = 6;
  //   var answer = solution(input);
  //   expect(answer).toEqual(2);
  // });

  // it('test4', () => {
  //   var input = 9;
  //   var answer = solution(input);
  //   expect(answer).toEqual(3);
  // });

  // it('test5', () => {
  //   var input = 11;
  //   var answer = solution(input);
  //   expect(answer).toEqual(3);
  // });
});
