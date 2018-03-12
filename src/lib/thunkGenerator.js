async function getData(error, response) {
  if (!error) {
    try {
      return await response.json();
    }
    catch (e) {
      return response.status;
    };
  };
};

export default function generateThunk(request, loading, success, fail) {
  return function thunk(...args) {
    return async (dispatch) => {
      let response, error;
      dispatch(loading(true));

      try {
        response = await request(...args);
      } 
      catch (e) {
        error = e.message;
      };

      dispatch(loading(false));
      error = error || (!response.ok && response.status);

      let data = await getData(error, response);

      if (error) {
        dispatch(fail(error));
      } else {
        dispatch(success(data));
      };
    };
  };
};

