import { combineReducers } from 'redux';
import projectsReducer from './projects';
import projectReducer from './project';
import clientsReducer from './clients';
import clientReducer from './client';
import projectModalReducer from './projectModal';
import clientModalReducer from './clientModal';

export default combineReducers({
  clients: clientsReducer,
  client: clientReducer,
  projects: projectsReducer,
  project: projectReducer,
  projectModal: projectModalReducer,
  clientModal: clientModalReducer,
});
