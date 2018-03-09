import { combineReducers } from 'redux';
import allProjectsReducer from './allProjects';
import projectsReducer from './projects';

export default combineReducers({
  projects: allProjectsReducer,
  project: projectsReducer,
});
