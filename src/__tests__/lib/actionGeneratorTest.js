import { actionGenerator } from '../../lib';

describe('actionGenerator', () => {
  let result;

  beforeEach(() => {
    result = actionGenerator('context', ['a', 'b', 'c']);
  });

  it('generates actions', () => {
    expect(result).toEqual({
      a: 'context/a',
      b: 'context/b',
      c: 'context/c',
    });
  });
});
