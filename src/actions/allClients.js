import { api } from '../App';

export const actions = {
  FETCHING: 'CLIENTS_FETCHING',
  FETCH_SUCCESS: 'CLIENTS_FETCH_SUCCESS',
  FETCH_FAIL: 'CLIENTS_FETCH_FAIL',
};

async function makeRequest() {
  return await fetch(`${api}/clients`);
};

export function clientsLoading(bool) {
  return {
    type: actions.FETCHING,
    isFetching: bool,
  };
};

export function clientsFetched(data) {
  return {
    type: actions.FETCH_SUCCESS,
    data: data,
  };
};

export function clientsNotFetched(error) {
  return {
    type: actions.FETCH_FAIL,
    error: error,
  };
};

export function fetchClients() {
  return async (dispatch) => {
    let response, data, error;
    dispatch(clientsLoading(true));

    try {
      response = await makeRequest();
    } 
    catch (e) {
      error = e.message;
    };

    dispatch(clientsLoading(false));
    error = error || !response.ok && response.status;

    if (!error) {
      data = await response.json();
    };

    if (error) {
      dispatch(clientsNotFetched(error));
    } else {
      dispatch(clientsFetched(data));
    };
  };
};
