import { api } from '../App';

export const actions = {
  FETCHING: 'PROJECT_FETCHING',
  FETCH_SUCCESS: 'PROJECT_FETCH_SUCCESS',
  FETCH_FAIL: 'PROJECT_FETCH_FAIL',
};

async function makeRequest(id) {
  return await fetch(`${api}/projects/${id}?detail=true`);
};

export function projectLoading(bool) {
  return {
    type: actions.FETCHING,
    isFetching: bool,
  };
};

export function projectFetched(data) {
  return {
    type: actions.FETCH_SUCCESS,
    data: data,
  };
};

export function projectNotFetched(error) {
  return {
    type: actions.FETCH_FAIL,
    error: error,
  };
};

export function fetchProject(id) {
  return async (dispatch) => {
    let response, data, error;
    dispatch(projectLoading(true));

    try {
      response = await makeRequest(id);
    } 
    catch (e) {
      error = e.message;
    };

    dispatch(projectLoading(false));
    error = error || (!response.ok && response.status);

    if (!error) {
      data = await response.json();
    };

    if (error) {
      dispatch(projectNotFetched(error));
    } else {
      dispatch(projectFetched(data));
    };
  };
};
