import { combineReducers } from 'redux';
import allProjectReducer from './allProjects';
import projectsReducer from './projects';

export default combineReducers({
  projects: allProjectsReducer,
  project: projectsReducer,
});
