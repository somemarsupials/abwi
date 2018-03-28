import baseUrl from '../api';
import { actionGenerator, buildApiClient } from '../lib';

// actions

export const actions = actionGenerator('PROJECT', [
  'FETCHING',
  'FETCHED',
]);

// action generators

export function fetchingProject(bool) {
  return {
    type: actions.FETCHING,
    active: bool,
  };
};

export function fetchedProject(result) {
  return {
    type: actions.FETCHED,
    error: result.error,
    data: result.data,
  };
};

// thunks

export function fetchProject(id, api = buildApiClient(baseUrl)) {
  return async function thunk(dispatch) {
    dispatch(fetchingProject(true));

    let project = await api.projects.show({ 
      ids: [id], 
      params: { detail: true } 
    });

    dispatch(fetchedProject(project));
    dispatch(fetchingProject(false));
  };
};
