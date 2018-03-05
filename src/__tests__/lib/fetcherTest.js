import { fetcher } from '../../lib';

describe('fetcher', () => {
  let api, success, fail, response, mockFetch;

  beforeEach(() => {
    api = 'api';
    success = jest.fn();
    fail = jest.fn();
  });

  describe('when making API call', () => {
    beforeEach(() => {
      response = { ok: false };
      mockFetch = jest.fn().mockReturnValue(response);
      fetcher(api, success, fail, mockFetch);
    });

    it('gets correct resource', () => {
      expect(mockFetch).toBeCalledWith('api');
    });
  });

  describe('when API call succeeds', () => {
    beforeEach(() => {
      response = { ok: true, json: jest.fn().mockReturnValue('data') };
      mockFetch = jest.fn().mockReturnValue(response);
      fetcher(api, success, fail, mockFetch);
    });

    it('emits action with data', () => {
      expect(success).toBeCalledWith('data');
    });
  });

  describe('when API call throws error', () => {
    beforeEach(() => {
      mockFetch = jest.fn().mockImplementation(() => { 
        throw { message: 'error' }
      });
      fetcher(api, success, fail, mockFetch);
    });

    it('emits action with data', () => {
      expect(fail).toBeCalledWith('error');
    });
  });

  describe('when API call fails', () => {
    beforeEach(() => {
      response = { ok: false, status: 404 };
      mockFetch = jest.fn().mockReturnValue(response);
      fetcher(api, success, fail, mockFetch);
    });

    it('emits action with data', () => {
      let firstCall = fail.mock.calls[0];
      expect(firstCall.pop()).toMatch(/404/);
    });
  });
});
