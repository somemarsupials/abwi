import baseUrl from '../api';
import { actionGenerator, buildApiClient } from '../lib';

// actions

export const actions = actionGenerator('CLIENT', [
  'FETCHING',
  'FETCHED',
]);

// action generators

export function fetchingProjects(bool) {
  return {
    type: actions.FETCHING,
    active: bool,
  };
};

export function fetchedProjects(result) {
  return {
    type: actions.FETCHED,
    error: result.error,
    data: result.data,
  };
};

// thunks

export function fetchProjects(api = buildApiClient(baseUrl)) {
  return async function thunk(dispatch) {
    dispatch(fetchingProjects(true));
    dispatch(fetchedProjects(await api.projects.index()));
    dispatch(fetchingProjects(false));
  };
};
