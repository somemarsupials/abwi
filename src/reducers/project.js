import { combineReducers } from 'redux';
import { actions } from '../actions/project';

function fetching(state = false, action) {
  switch (action.type) {
    case actions.FETCHING:
      return action.active;
    default:
      return state;
  }
};

const initialState = {
  error: null,
  data: {}
};

function fetched(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHED:
      return {
        error: action.error,
        data: action.data,
      };
    default:
      return state;
  }
};

export default combineReducers({
  fetching: fetching,
  response: fetched,
});
