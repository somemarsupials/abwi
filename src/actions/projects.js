import api from '../api';
import { ThunkGenerator, buildApiClient } from '../lib';

const CONTEXT = 'PROJECTS';
const generator = new ThunkGenerator();
const apiClient = buildApiClient(api);

// actions

const actions = {};
const SUPPORTED = ['FETCH', 'CREATE']

SUPPORTED.forEach(function(method) {
  Object.assign(actions, generator.actions(CONTEXT, method));
});

export { actions };

// requests

async function fetchRequest() {
  return await apiClient.projects.index();
};

async function createRequest(params) {
  let config = { 
    method: 'post', 
    body: JSON.stringify(params) 
  };
  return await fetch(`${api}/projects`, config);
};

// thunks

export const fetchProjects = 
  generator.generate(fetchRequest, CONTEXT, 'FETCH');

export const createProject = 
  generator.generate(createRequest, CONTEXT, 'CREATE');
