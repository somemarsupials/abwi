import { api } from '../App';
import { ThunkGenerator } from '../lib';

const CONTEXT = 'PROJECT';
const generator = new ThunkGenerator();

// actions

const actions = {};

const SUPPORTED = ['FETCH'];

SUPPORTED.forEach(function(method) {
  Object.assign(actions, generator.actions(CONTEXT, method));
});

export { actions };

// requests

async function fetchRequest(id) {
  return await fetch(`${api}/clients/${id}?detail=true`);
};

// thunks

export const fetchClient = 
  generator.generate(fetchRequest, CONTEXT, 'FETCH');
