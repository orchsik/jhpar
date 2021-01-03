import { solution } from './15904';

describe('', () => {
  it('test1', () => {
    var inputList = 'Union of Computer Programming Contest club contest';
    var r = solution(inputList);
    expect(r).toEqual('I love UCPC');
  });
  it('test2', () => {
    var inputList = 'University CPC';
    var r = solution(inputList);
    expect(r).toEqual('I love UCPC');
  });
  it('test3', () => {
    var inputList = 'University Computer Programming';
    var r = solution(inputList);
    expect(r).toEqual('I hate UCPC');
  });
});
