import { api } from '../App';
import { thunkGenerator } from '../lib';

export const actions = {
  FETCHING: 'CLIENTS_FETCHING',
  FETCH_SUCCESS: 'CLIENTS_FETCH_SUCCESS',
  FETCH_FAIL: 'CLIENTS_FETCH_FAIL',
};

async function request() {
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

export const fetchClients = thunkGenerator(
  request, 
  clientsLoading, 
  clientsFetched, 
  clientsNotFetched
);
