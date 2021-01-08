import { solution } from './1946';

describe('', () => {
  it('test1', () => {
    var inputs = [
      [3, 2],
      [1, 4],
      [4, 1],
      [2, 3],
      [5, 5],
    ];
    var answer = solution(inputs);
    expect(answer).toEqual(4);
  });

  it('test2', () => {
    var inputs = [
      [3, 6],
      [7, 3],
      [4, 2],
      [1, 4],
      [5, 7],
      [2, 5],
      [6, 1],
    ];
    var answer = solution(inputs);
    expect(answer).toEqual(3);
  });

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
