import { api } from '../App';

export const actions = {
  FETCHING: 'PROJECTS_FETCHING',
  FETCH_SUCCESS: 'PROJECTS_FETCH_SUCCESS',
  FETCH_FAIL: 'PROJECTS_FETCH_FAIL',
};

async function makeRequest() {
  return await fetch(`${api}/projects`);
};

export function projectsLoading(bool) {
  return {
    type: actions.FETCHING,
    isFetching: bool,
  };
};

export function projectsFetched(data) {
  return {
    type: actions.FETCH_SUCCESS,
    data: data,
  };
};

export function projectsNotFetched(error) {
  return {
    type: actions.FETCH_FAIL,
    error: error,
  };
};

export function fetchProjects() {
  return async (dispatch) => {
    let response, data, error;
    dispatch(projectsLoading(true));

    try {
      response = await makeRequest();
    } 
    catch (e) {
      error = e.message;
    };

    dispatch(projectsLoading(false));
    error = error || !response.ok && response.status;

    if (!error) {
      data = await response.json();
    };

    if (error) {
      dispatch(projectsNotFetched(error));
    } else {
      dispatch(projectsFetched(data));
    };
  };
};
