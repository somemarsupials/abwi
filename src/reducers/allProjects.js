import { combineReducers } from 'redux';
import { actions } from '../actions/allProjects';

function fetching(state = false, action) {
  switch (action.type) {
    case actions.FETCH_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

function fetchSuccess(state = [], action) {
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

function createModal(state = false, action) {
  switch (action.type) {
    case actions.TOGGLE_CREATE_MODAL:
      return action.active;
    default:
      return state;
  }
};

export default combineReducers({
  fetching: fetching,
  data: fetchSuccess,
  error: fetchFail,
  createModal: createModal,
});
