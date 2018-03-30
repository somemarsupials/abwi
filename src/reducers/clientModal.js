import { combineReducers } from 'redux';
import { actions } from '../actions/clientModal';

function show(state = false, action) {
  switch (action.type) {
    case actions.TOGGLE_MODAL:
      return !state;
    case actions.CREATED:
      return action.data === undefined;
    default:
      return state;
  }
};

function name(state = null, action) {
  switch (action.type) {
    case actions.NAME_CHANGE:
      return action.value;
    case actions.TOGGLE_MODAL:
      return null;
    default:
      return state;
  }
};

function error(state = null, action) {
  switch (action.type) {
    case actions.CREATED:
      return action.error || null;
    case actions.TOGGLE_MODAL:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  show: show,
  name: name,
  error: error,
});
