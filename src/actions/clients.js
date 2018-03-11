import { api } from '../App';
import { thunkGenerator } from '../lib';

export const actions = {
  FETCHING: 'CLIENT_FETCHING',
  FETCH_SUCCESS: 'CLIENT_FETCH_SUCCESS',
  FETCH_FAIL: 'CLIENT_FETCH_FAIL',
};

async function request(id) {
  return await fetch(`${api}/clients/${id}?detail=true`);
};

export function clientLoading(bool) {
  return {
    type: actions.FETCHING,
    isFetching: bool,
  };
};

export function clientFetched(data) {
  return {
    type: actions.FETCH_SUCCESS,
    data: data,
  };
};

export function clientNotFetched(error) {
  return {
    type: actions.FETCH_FAIL,
    error: error,
  };
};

export const fetchClient = thunkGenerator(
  request,
  clientLoading,
  clientFetched,
  clientNotFetched
);
