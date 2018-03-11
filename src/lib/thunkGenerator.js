export default function generateThunk(request, loading, success, fail) {
  return function thunk(...args) {
    return async (dispatch) => {
      let response, data, error;
      dispatch(loading(true));

      try {
        response = await request(...args);
      } 
      catch (e) {
        error = e.message;
      };

      dispatch(loading(false));
      error = error || (!response.ok && response.status);

      if (!error) {
        data = await response.json();
      };

      if (error) {
        dispatch(fail(error));
      } else {
        dispatch(success(data));
      };
    };
  };
};

