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
  return await fetch(`${api}/projects/${id}?detail=true`);
};

// thunks

export const fetchProject = 
  generator.generate(fetchRequest, CONTEXT, 'FETCH');
