import { solution } from './2839';

describe('', () => {
  it('test1', () => {
    var input = 18;
    var answer = solution(input);
    expect(answer).toEqual(4);
  });

  it('test2', () => {
    var input = 4;
    var answer = solution(input);
    expect(answer).toEqual(-1);
  });

  it('test3', () => {
    var input = 6;
    var answer = solution(input);
    expect(answer).toEqual(2);
  });

  it('test4', () => {
    var input = 9;
    var answer = solution(input);
    expect(answer).toEqual(3);
  });

  it('test5', () => {
    var input = 11;
    var answer = solution(input);
    expect(answer).toEqual(3);
  });
});
