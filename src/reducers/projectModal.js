import { combineReducers } from 'redux';
import { actions } from '../actions/projectModal';

function show(state = false, action) {
  switch (action.type) {
    case actions.TOGGLE_MODAL:
      return !state;
    default:
      return state;
  };
};

function description(state = null, action) {
  switch (action.type) {
    case actions.DESCRIPTION_CHANGE:
      return action.value;
    default:
      return state;
  };
};

function client(state = null, action) {
  switch (action.type) {
    case actions.CLIENT_CHANGE:
      return action.value;
    default:
      return state;
  };
};

export default combineReducers({
  show: show,
  description: description,
  client: client,
});
