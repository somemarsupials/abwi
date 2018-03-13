import { combineReducers } from 'redux';
import { actions } from '../actions/clients';

function fetching(state = false, action) {
  switch (action.type) {
    case actions.FETCHING:
      return action.isFetching;
    default:
      return state;
  }
};

function fetchSuccess(state = null, action) {
  switch (action.type) {
    case actions.FETCH_SUCCESS:
      return action.result;
    default:
      return state;
  }
};

function fetchFail(state = null, action) {
  switch (action.type) {
    case actions.FETCH_FAIL:
      return action.error;
    default:
      return state;
  }
};

export default combineReducers({
  fetching: fetching,
  data: fetchSuccess,
  error: fetchFail,
});
