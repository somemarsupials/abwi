
function actionString(context, method, status) {
  return `${context}/${method}_${status}`;
};

function getLoadingAction(context, method) {
  return function loadingAction(bool) {
    return {
      type: actionString(context, method, 'LOADING'),
      isLoading: bool,
    };
  };
};

function getSuccessAction(context, method) {
  return function successAction(result) {
    return {
      type: actionString(context, method, 'SUCCESS'),
      result: result,
    };
  };
};

function getFailAction(context, method) {
  return function successAction(error) {
    return {
      type: actionString(context, method, 'FAIL'),
      error: error,
    };
  };
};


// thunk generator

const TYPES = ['LOADING', 'SUCCESS', 'FAIL'];


export default class ThunkGenerator {
  constructor(statuses = TYPES) {
    this._statuses = statuses;
  };

  actions(context, method) {
    let actions = {}

    this._statuses.forEach((status) => {
      let propName = `${method}_${status}`;
      actions[propName] = actionString(context, method, status);
    });

    return actions;
  };

  actionGenerators(context, method) {
    return {
      loading: getLoadingAction(context, method),
      success: getSuccessAction(context, method),
      fail: getFailAction(context, method),
    };
  };

  _isError(response) {
    if (response.ok === false || response.statusText !== 'OK') {
      return response.status;
    };
  };

  generate(request, context, method) {
    let actions = this.actionGenerators(context, method);
    let isError = this._isError;

    return function thunk(...args) {
      return async function(dispatch) {
        let response, error, data;

        dispatch(actions.loading(true));

        try {
          response = await request(...args);
          data = response.data ? response.data : response.status;
        } 
        catch (e) {
          error = e.message;
        };

        dispatch(actions.loading(false));

        // If there was an exception, we use that as the error.
        // Otherwise, check for bad status codes and set as the
        // error. If neither, the error is undefined because
        // we've succeeded.

        error = error || isError(response);
        return dispatch(error ? actions.fail(error) : actions.success(data));
      };
    };
  };
};

