import { deleteNth } from './deleteNth';

describe('', () => {
  it('test1', () => {
    expect(deleteNth([1, 1, 1, 1], 2)).toEqual([1, 1]);
    expect(deleteNth([20, 37, 20, 21], 1)).toEqual([20, 37, 21]);
  });
});
