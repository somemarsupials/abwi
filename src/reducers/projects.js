import types from '../actions/types';

const initial = {
  projects: [],
  error: undefined,
};

export default function(state = initial, action) {
  switch (action.type) {
    case types.GOT_PROJECTS:
      return Object.assign({}, state, { data: action.projects });
    case types.PROJECT_FETCH_FAILED:
      return Object.assign({}, state,  { error: action.error });
    default:
      return state;
  }
}
