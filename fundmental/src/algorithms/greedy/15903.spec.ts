import { solution } from './15903';

describe('', () => {
  it('test1', () => {
    var inputList = [
      [3, 1],
      [3, 2, 6],
    ];
    var r = solution(inputList);
    expect(r).toEqual(16);
  });

  it('test2', () => {
    var inputList = [
      [4, 2],
      [4, 2, 3, 1],
    ];
    var r = solution(inputList);
    expect(r).toEqual(19);
  });
});
