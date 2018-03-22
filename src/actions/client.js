import api from '../api';
import { ThunkGenerator, buildApiClient } from '../lib';

const CONTEXT = 'PROJECT';
const generator = new ThunkGenerator();
const apiClient = buildApiClient(api);

// actions

const actions = {};

const SUPPORTED = ['FETCH'];

SUPPORTED.forEach(function(method) {
  Object.assign(actions, generator.actions(CONTEXT, method));
});

export { actions };

// requests

async function fetchRequest(id) {
  return await apiClient.clients.show([id], { detail: true });
};

// thunks

export const fetchClient = 
  generator.generate(fetchRequest, CONTEXT, 'FETCH');
