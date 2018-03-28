import baseUrl from '../api';
import { actionGenerator, buildApiClient } from '../lib';

// actions

export const actions = actionGenerator('CLIENTS', [
  'TOGGLE_CREATE_MODAL',
  'FETCHING',
  'FETCHED',
]);

// action generators

export function toggleCreateProjectModal(bool) {
  return {
    type: actions.TOGGLE_CREATE_MODAL,
    active: bool,
  };
};

export function fetchingClients(bool) {
  return {
    type: actions.FETCHING,
    active: bool,
  };
};

export function fetchedClients(result) {
  return {
    type: actions.FETCHED,
    error: result.error,
    data: result.data,
  };
};

// thunks

export function fetchClients(api = buildApiClient(baseUrl)) {
  return async function thunk(dispatch) {
    dispatch(fetchingClients(true));
    dispatch(fetchedClients(await api.clients.index()));
    dispatch(fetchingClients(false));
  };
};
