import { ThunkGenerator } from '../../lib';

describe('ThunkGenerator', () => {
  let generator, actions;

  beforeEach(() => {
    generator = new ThunkGenerator();
  });

  describe('#actions', () => {
    beforeEach(() => {
      actions = new ThunkGenerator(['ACTIONS']).actions('STUFF', 'THING')
    });

    it('generates actions object', () => {
      expect(actions).toEqual({ THING_ACTIONS: 'STUFF/THING_ACTIONS' });
    });
  });

  describe('#actionGenerators', () => {
    let action;

    beforeEach(() => {
      actions = generator.actionGenerators('STUFF', 'FETCH');
    });

    describe('when creating loading action', () => {
      beforeEach(() => {
        action = actions.loading(true);
      });

      it('has correct properties', () => {
        expect(action).toEqual({ 
          type: 'STUFF/FETCH_LOADING', 
          isLoading: true 
        });
      });
    });

    describe('when creating success action', () => {
      beforeEach(() => {
        action = actions.success(200);
      });

      it('has correct properties', () => {
        expect(action).toEqual({ 
          type: 'STUFF/FETCH_SUCCESS', 
          result: 200 
        });
      });
    });

    describe('when creating fail action', () => {
      beforeEach(() => {
        action = actions.fail(404);
      });

      it('has correct properties', () => {
        expect(action).toEqual({ 
          type: 'STUFF/FETCH_FAIL', 
          error: 404 
        });
      });
    });
  });

  describe('#generate', () => {
    let dispatch, thunk, response, request;

    beforeEach(() => {
      actions = { 
        loading: jest.fn().mockReturnValue('loading'),
        success: jest.fn().mockReturnValue('success'),
        fail: jest.fn().mockReturnValue('fail'),
      };
      generator.actionGenerators = jest.fn().mockReturnValue(actions);
      dispatch = jest.fn();
    });

    describe('when generating wrapped function', () => {
      beforeEach(() => {
        thunk = generator.generate(jest.fn(), 'STUFF', 'FETCH');
      });

      it('creates actions', () => {
        expect(generator.actionGenerators)
          .toHaveBeenCalledWith('STUFF', 'FETCH');
      });
    });

    describe('when making request', () => {
      beforeEach(async () => {
        response = { json: jest.fn() };
        request = jest.fn().mockReturnValue(response);
        thunk = generator.generate(request);
        await (thunk(1, 2, 3))(dispatch);
      });

      it('sets loading to be true and then false', () => {
        // ideally test that these calls wrap the request?
        expect(actions.loading.mock.calls).toEqual([[true], [false]]);
      });

      it('dispatches loading messages', () => {
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
        thunk = generator.generate(request);
        await (thunk(1, 2, 3))(dispatch);
      });

      it('calls fail with error', () => {
        expect(actions.fail).toHaveBeenCalledWith('error');
      });

      it('dispatches fail', () => {
        expect(dispatch).toHaveBeenCalledWith('fail');
      });
    });

    describe('when bad status code', () => {
      beforeEach(async () => {
        response = { status: 404, ok: false };
        request = jest.fn().mockReturnValue(response);
        thunk = generator.generate(request);
        await (thunk(1, 2, 3))(dispatch);
      });

      it('calls fail with error', () => {
        expect(actions.fail).toHaveBeenCalledWith(404);
      });

      it('dispatches fail', () => {
        expect(dispatch).toHaveBeenCalledWith('fail');
      });
    });

    describe('when getting json', () => {
      beforeEach(async () => {
        response = { data: 'data', ok: true };
        request = jest.fn().mockReturnValue(response);
        thunk = generator.generate(request);
        await (thunk(1, 2, 3))(dispatch);
      });

      it('calls success with data', () => {
        expect(actions.success).toHaveBeenCalledWith('data');
      });

      it('dispatches success', () => {
        expect(dispatch).toHaveBeenCalledWith('success');
      });
    });

    describe('when not getting json', () => {
      beforeEach(async () => {
        response = { status: 200, ok: true };
        request = jest.fn().mockReturnValue(response);
        thunk = generator.generate(request);
        await (thunk(1, 2, 3))(dispatch);
      });

      it('calls success with data', () => {
        expect(actions.success).toHaveBeenCalledWith(200);
      });

      it('dispatches success', () => {
        expect(dispatch).toHaveBeenCalledWith('success');
      });
    });
  });
});

