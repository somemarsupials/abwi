import api from '../api';
import { ThunkGenerator, buildApiClient } from '../lib';

const CONTEXT = 'CLIENTS';
const generator = new ThunkGenerator();
const apiClient = buildApiClient(api);

// actions

const actions = {
  TOGGLE_CREATE_MODAL: `${CONTEXT}/TOGGLE_CREATE_MODAL`
};

const SUPPORTED = ['FETCH', 'CREATE']

SUPPORTED.forEach(function(method) {
  Object.assign(actions, generator.actions(CONTEXT, method));
});

export { actions };

// requests

async function fetchRequest() {
  return await apiClient.clients.index();
};

async function createRequest(params) {
  let config = { 
    method: 'post', 
    body: JSON.stringify(params) 
  };
  return await fetch(`${api}/clients`, config);
};

// action generators

export function toggleCreateProjectModal(bool) {
  return {
    type: actions.TOGGLE_CREATE_MODAL,
    active: bool,
  };
};

// thunks

export const fetchClients = 
  generator.generate(fetchRequest, CONTEXT, 'FETCH');

export const createClients = 
  generator.generate(createRequest, CONTEXT, 'CREATE');
