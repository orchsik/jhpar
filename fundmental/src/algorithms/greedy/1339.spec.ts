import { solution } from './1339';

describe('greedy 1339', () => {
  it('#1', () => {
    var alphList = ['AAA', 'AAA'];
    var N = alphList.length;
    const R = solution(N, alphList);
    expect(R).toEqual(1998);
  });
  it('#2', () => {
    var alphList = ['A', 'AB', 'AG', 'AABCD'];
    var N = alphList.length;
    const R = solution(N, alphList);
    expect(R).toEqual(100078);
  });
});
