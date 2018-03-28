import { FetchHelper } from '../../../lib/client/fetchHelper';

describe('FetchHelper', () => {
  let helper, fetcher;

  beforeEach(() => {
    fetcher = jest.fn();
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
      expect(helper.buildRoute({ ids: [1] })).toEqual('api/a/1/b');
    });

    it('builds route with trailing id', () => {
      expect(helper.buildRoute({ ids: [1, 2] })).toEqual('api/a/1/b/2');
    });
  });

  describe('#fetch', () => {
    let params, rvalue;

    describe('before request', () => {
      beforeEach(() => {
        helper.buildRoute = jest.fn().mockReturnValue('route');
        params = { ids: [1, 2] };
        rvalue = helper.fetch(params);
      });

      it('builds route', () => {
        expect(helper.buildRoute).toHaveBeenCalledWith(params);
      });

      it('fetches resource', () => {
        expect(fetcher).toHaveBeenCalledWith({ url: 'route', ids: [1, 2] });
      });
    });

    describe('when request throws error', () => {
      beforeEach(async () => {
        fetcher.mockImplementation(() => { throw new Error('error') });
        rvalue = await helper.fetch(params);
      });

      it('returns error', () => {
        expect(rvalue.error).toEqual('error');
      });
    });

    describe('when request has error status', () => {
      beforeEach(async () => {
        fetcher.mockImplementation(() => { 
          throw { response: { data: 'error' } } 
        });
        rvalue = await helper.fetch(params);
      });

      it('returns error', () => {
        expect(rvalue.error).toEqual('error');
      });
    });

    describe('when receiving data', () => {
      beforeEach(async () => {
        fetcher.mockReturnValue({ status: 200, data: 'data' });
        rvalue = await helper.fetch(params);
      });

      it('returns data', () => {
        expect(rvalue.data).toEqual('data');
      });
    });

    describe('when receiving data', () => {
      beforeEach(async () => {
        fetcher.mockReturnValue({ status: 200 });
        rvalue = await helper.fetch(params);
      });

      it('returns data', () => {
        expect(rvalue.data).toEqual(200);
      });
    });
  });
});
