import { thunkGenerator } from '../../lib';

describe('thunkGenerator', () => {
  let thunk, request, loading, success, fail, response, dispatch;

  beforeEach(() => {
    loading = jest.fn().mockReturnValue('loading');
    success = jest.fn().mockReturnValue('success');
    fail = jest.fn().mockReturnValue('fail');
    dispatch = jest.fn();
  });

  describe('when making request', () => {
    beforeEach(async () => {
      response = { json: jest.fn() };
      request = jest.fn().mockReturnValue(response);
      thunk = thunkGenerator(request, loading, success, fail);
      await (thunk(1, 2, 3))(dispatch);
    });


    it('sets loading to be true and then false', () => {
      // ideally test that these calls wrap the request?
      expect(loading.mock.calls).toEqual([[true], [false]]);
    });

    it('dispatches loading messages', () => {
      // ideally test that these calls wrap the request?
      expect(dispatch).toHaveBeenCalledWith('loading');
    });

    it('makes request with params', () => {
      expect(request).toHaveBeenCalledWith(1, 2, 3);
    });
  });

  describe('when error thrown', () => {
    beforeEach(async () => {
      request = jest.fn().mockImplementation(() => { 
        throw new Error('error') 
      });
      thunk = thunkGenerator(request, loading, success, fail);
      await (thunk(1, 2, 3))(dispatch);
    });

    it('calls fail with error', () => {
      expect(fail).toHaveBeenCalledWith('error');
    });

    it('dispatches fail', () => {
      expect(dispatch).toHaveBeenCalledWith('fail');
    });
  });

  describe('when bad status code', () => {
    beforeEach(async () => {
      response = { status: 404, ok: false };
      request = jest.fn().mockReturnValue(response);
      thunk = thunkGenerator(request, loading, success, fail);
      await (thunk(1, 2, 3))(dispatch);
    });

    it('calls fail with error', () => {
      expect(fail).toHaveBeenCalledWith(404);
    });

    it('dispatches fail', () => {
      expect(dispatch).toHaveBeenCalledWith('fail');
    });
  });

  describe('when bad status code', () => {
    beforeEach(async () => {
      response = { json: jest.fn().mockReturnValue('data'), ok: true };
      request = jest.fn().mockReturnValue(response);
      thunk = thunkGenerator(request, loading, success, fail);
      await (thunk(1, 2, 3))(dispatch);
    });

    it('calls success with data', () => {
      expect(success).toHaveBeenCalledWith('data');
    });

    it('dispatches success', () => {
      expect(dispatch).toHaveBeenCalledWith('success');
    });
  });
});

