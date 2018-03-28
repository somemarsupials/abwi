import baseUrl from '../api';
import { actionGenerator, buildApiClient } from '../lib';

// actions

export const actions = actionGenerator('CLIENT', [
  'FETCHING',
  'FETCHED',
]);

// action generators

export function fetchingClient(bool) {
  return {
    type: actions.FETCHING,
    active: bool,
  };
};

export function fetchedClient(result) {
  return {
    type: actions.FETCHED,
    error: result.error,
    data: result.data,
  };
};

// thunks

export function fetchClient(id, api = buildApiClient(baseUrl)) {
  return async function thunk(dispatch) {
    dispatch(fetchingClient(true));

    let client = await api.clients.show({
      ids: [id],
      params: { detail: true },
    });

    dispatch(fetchedClient(client));
    dispatch(fetchingClient(false));
  };
};
