import { api } from '../App';
import { ThunkGenerator } from '../lib';

const CONTEXT = 'PROJECTS';
const generator = new ThunkGenerator();

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
  return await fetch(`${api}/projects`);
};

async function createRequest(params) {
  let config = { 
    method: 'post', 
    body: JSON.stringify(params) 
  };
  return await fetch(`${api}/projects`, config);
};

// action generators

export function toggleCreateProjectModal() {
  return {
    type: actions.TOGGLE_CREATE_MODAL,
  };
};

// thunks

export const fetchProjects = 
  generator.generate(fetchRequest, CONTEXT, 'FETCH');

export const createProjects = 
  generator.generate(createRequest, CONTEXT, 'CREATE');
