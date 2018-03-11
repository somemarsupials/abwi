import { api } from '../App';
import { thunkGenerator } from '../lib';

export const actions = {
  FETCHING: 'PROJECTS_FETCHING',
  FETCH_SUCCESS: 'PROJECTS_FETCH_SUCCESS',
  FETCH_FAIL: 'PROJECTS_FETCH_FAIL',
};

async function request() {
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

export const fetchProjects = thunkGenerator(
  request,
  projectsLoading,
  projectsFetched,
  projectsNotFetched
);
