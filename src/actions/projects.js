import { api } from '../App';
import { thunkGenerator } from '../lib';

export const actions = {
  FETCHING: 'PROJECT_FETCHING',
  FETCH_SUCCESS: 'PROJECT_FETCH_SUCCESS',
  FETCH_FAIL: 'PROJECT_FETCH_FAIL',
};

async function request(id) {
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

export const fetchProject = thunkGenerator(
  request,
  projectLoading,
  projectFetched,
  projectNotFetched
);
