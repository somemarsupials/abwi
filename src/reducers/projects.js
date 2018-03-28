import { combineReducers } from 'redux';
import { actions } from '../actions/projects';
import { actions as modalActions } from '../actions/projectModal';

function fetching(state = false, action) {
  switch (action.type) {
    case actions.FETCH_LOADING:
      return action.active;
    default:
      return state;
  }
};

const initialState = {
  error: null,
  data: [],
};

function fetched(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHED:
      return {
        error: action.error,
        data: action.data,
      };
    case modalActions.CREATED:
      return {
        error: state.error,
        data: state.data.concat([action.data]),
      };
    default:
      return state;
  }
};

export default combineReducers({
  fetching: fetching,
  response: fetched,
});
