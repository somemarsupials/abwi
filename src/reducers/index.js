import { combineReducers } from 'redux';
import allProjectsReducer from './allProjects';
import projectsReducer from './projects';
import allClientsReducer from './allClients';

export default combineReducers({
  clients: allClientsReducer,
  projects: allProjectsReducer,
  project: projectsReducer,
});
