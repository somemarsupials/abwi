import baseUrl from '../api';
import { actionGenerator, buildApiClient } from '../lib';

// actions

export const actions = actionGenerator('CLIENT_MODAL', [
  'NAME_CHANGE',
  'TOGGLE_MODAL',
  'CREATED',
]);

// action generators

export function toggleClientModal() {
  return {
    type: actions.TOGGLE_MODAL,
  };
};

export function nameChange(string) {
  return {
    type: actions.NAME_CHANGE,
    value: string && string.target.value,
  };
};

export function createdClients(result) {
  return {
    type: actions.CREATED,
    error: result.error,
    data: result.data,
  };
};

// thunks

let apiClient = buildApiClient(baseUrl);

export function createClient(params, api = apiClient) {
  return async function thunk(dispatch) {
    let result = await api.clients.create({ data: params });
    dispatch(createdClients(result));
  };
};
