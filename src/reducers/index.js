import { combineReducers } from 'redux';
import allProjectsReducer from './allProjects';
import projectsReducer from './projects';
import allClientsReducer from './allClients';
import clientsReducer from './clients';

export default combineReducers({
  clients: allClientsReducer,
  client: clientsReducer,
  projects: allProjectsReducer,
  project: projectsReducer,
});
