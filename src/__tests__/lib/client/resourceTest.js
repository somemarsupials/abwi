import { Resource } from '../../../lib/client/resource';

describe('Resource', () => {
  let resource, helper, rvalue;

  beforeEach(() => {
    helper = { fetch: jest.fn().mockReturnValue('promise') };
    resource = new Resource(helper);
  });

  describe('#getPath', () => {
    beforeEach(() => {
      helper.getPath = jest.fn().mockReturnValue('path');
    });

    it('gets helper path', () => {
      expect(resource.getPath()).toEqual('path');
    });
  });

  describe('#setPath', () => {
    beforeEach(() => {
      helper.setPath = jest.fn();
      resource.setPath('path');
    });

    it('gets helper path', () => {
      expect(helper.setPath).toHaveBeenCalledWith('path');
    });
  });

  describe('#nest', () => {
    let child;

    beforeEach(() => {
      child = { 
        getPath: jest.fn().mockReturnValue(['b']),
        setPath: jest.fn()
      };
      resource.getPath = jest.fn().mockReturnValue(['a']);
      resource.nest(child, 'child');
    });

    it('sets child path', () => {
      expect(child.setPath).toHaveBeenCalledWith(['a', 'b'])
    });

    it('sets child attribute', () => {
      expect(resource.child).toEqual(child);
    });
  });

  describe('#index', () => {
    describe('when correct IDs', () => {
      beforeEach(() => {
        helper.hasIds = jest.fn().mockReturnValue(true);
        rvalue = resource.index({ ids: [1, 2, 3], params: 'query' });
      });

      it('returns promise', () => {
        expect(rvalue).toEqual('promise');
      });

      it('calls fetch with IDs', () => {
        expect(helper.fetch).toHaveBeenCalledWith({ ids: [1, 2, 3], params: 'query' });
      });
    });

    describe('when incorrect IDs', () => {
      beforeEach(() => {
        helper.hasIds = jest.fn().mockReturnValue(false);
      });

      it('throws error', () => {
        expect(() => resource.index()).toThrow(Error);
      });
    });
  });

  describe('#show', () => {
    describe('when correct IDs', () => {
      beforeEach(() => {
        helper.hasTrailingIds = jest.fn().mockReturnValue(true);
        rvalue = resource.show({ ids: [1, 2, 3], params: 'query' });
      });

      it('returns promise', () => {
        expect(rvalue).toEqual('promise');
      });

      it('calls fetch with IDs', () => {
        expect(helper.fetch).toHaveBeenCalledWith({ ids: [1, 2, 3], params: 'query' });
      });
    });

    describe('when incorrect IDs', () => {
      beforeEach(() => {
        helper.hasTrailingIds = jest.fn().mockReturnValue(false);
      });

      it('throws error', () => {
        expect(() => resource.show()).toThrow(Error);
      });
    });
  });

  describe('#create', () => {
    describe('when correct IDs', () => {
      beforeEach(() => {
        helper.hasIds = jest.fn().mockReturnValue(true);
        rvalue = resource.create({ ids: [1, 2, 3], params: 'query', body: {} });
      });

      it('returns promise', () => {
        expect(rvalue).toEqual('promise');
      });

      it('calls fetch with IDs', () => {
        expect(helper.fetch).toHaveBeenCalledWith({
          ids: [1, 2, 3], 
          params: 'query', 
          method: 'post', 
          body: {},
        });
      });
    });

    describe('when incorrect IDs', () => {
      beforeEach(() => {
        helper.hasIds = jest.fn().mockReturnValue(false);
      });

      it('throws error', () => {
        expect(() => resource.create()).toThrow(Error);
      });
    });
  });

  describe('#update', () => {
    describe('when correct IDs', () => {
      beforeEach(() => {
        helper.hasTrailingIds = jest.fn().mockReturnValue(true);
        rvalue = resource.update({ ids: [1, 2, 3], params: 'query', body: {} });
      });

      it('returns promise', () => {
        expect(rvalue).toEqual('promise');
      });

      it('calls fetch with IDs', () => {
        expect(helper.fetch).toHaveBeenCalledWith({
          ids: [1, 2, 3], 
          params: 'query', 
          method: 'patch', 
          body: {}
        });
      });
    });

    describe('when incorrect IDs', () => {
      beforeEach(() => {
        helper.hasTrailingIds = jest.fn().mockReturnValue(false);
      });

      it('throws error', () => {
        expect(() => resource.update()).toThrow(Error);
      });
    });
  });

  describe('#delete', () => {
    describe('when correct IDs', () => {
      beforeEach(() => {
        helper.hasTrailingIds = jest.fn().mockReturnValue(true);
        rvalue = resource.delete({ ids: [1, 2, 3], params: 'query' });
      });

      it('returns promise', () => {
        expect(rvalue).toEqual('promise');
      });

      it('calls fetch with IDs', () => {
        expect(helper.fetch)
          .toHaveBeenCalledWith({ 
            ids: [1, 2, 3], 
            params: 'query', 
            method: 'delete' 
          });
      });
    });

    describe('when incorrect IDs', () => {
      beforeEach(() => {
        helper.hasTrailingIds = jest.fn().mockReturnValue(false);
      });

      it('throws error', () => {
        expect(() => resource.delete()).toThrow(Error);
      });
    });
  });
});
