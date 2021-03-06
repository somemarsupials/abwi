import { combineReducers } from 'redux';
import { actions } from '../actions/projectModal';

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

function title(state = null, action) {
  switch (action.type) {
    case actions.TITLE_CHANGE:
      return action.value;
    case actions.TOGGLE_MODAL:
      return null;
    default:
      return state;
  }
};

function description(state = null, action) {
  switch (action.type) {
    case actions.DESCRIPTION_CHANGE:
      return action.value;
    case actions.TOGGLE_MODAL:
      return null;
    default:
      return state;
  }
};

function client(state = null, action) {
  switch (action.type) {
    case actions.CLIENT_CHANGE:
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
  title: title,
  description: description,
  client: client,
  error: error,
});
