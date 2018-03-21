import { FetchHelper } from '../../../lib/client/fetchHelper';

describe('FetchHelper', () => {
  let helper, fetcher;

  beforeEach(() => {
    fetcher = jest.fn().mockReturnValue('promise');
    helper = new FetchHelper(['a', 'b'], 'api', fetcher);
  });

  describe('#getPath', () => {
    it('returns _path', () => {
      expect(helper.getPath()).toEqual(['a', 'b']);
    });
  });

  describe('#setPath', () => {
    beforeEach(() => {
      helper.setPath(['a']); 
    });

    it('sets _path', () => {
      expect(helper._path).toEqual(['a']);
    });
  });

  describe('#hasIds', () => {
    it('returns true for correct number', () => {
      expect(helper.hasIds([1])).toBe(true);
    });

    it('returns false for too many', () => {
      expect(helper.hasIds([1, 2])).toBe(false);
    });

    it('returns false for too few', () => {
      expect(helper.hasIds([])).toBe(false);
    });
  });

  describe('#hasTrailingIds', () => {
    it('returns true for correct number', () => {
      expect(helper.hasTrailingIds([1, 2])).toBe(true);
    });

    it('returns false for too many', () => {
      expect(helper.hasTrailingIds([1, 2, 3])).toBe(false);
    });

    it('returns false for too few', () => {
      expect(helper.hasTrailingIds([1])).toBe(false);
    });
  });

  describe('#buildRoute', () => {
    it('builds route without trailing id', () => {
      expect(helper.buildRoute([1])).toEqual('api/a/1/b');
    });

    it('builds route with trailing id', () => {
      expect(helper.buildRoute([1, 2])).toEqual('api/a/1/b/2');
    });

    it('builds route with single parameter query string', () => {
      expect(helper.buildRoute([1], { a: 1 }))
        .toEqual('api/a/1/b?a=1');
    });

    it('builds route with multiple parameter query string', () => {
      expect(helper.buildRoute([1], { a: 1, b: 2 }))
        .toEqual('api/a/1/b?a=1&b=2');
    });
  });

  describe('#fetch', () => {
    let rvalue;

    beforeEach(() => {
      helper.buildRoute = jest.fn().mockReturnValue('route');
      rvalue = helper.fetch([1, 2], 'query', 'params');
    });

    it('builds route', () => {
      expect(helper.buildRoute).toHaveBeenCalledWith([1, 2], 'query');
    });

    it('fetches resource', () => {
      expect(fetcher).toHaveBeenCalledWith('route', 'params');
    });

    it('returns promise', () => {
      expect(rvalue).toEqual('promise');
    });
  });
});
