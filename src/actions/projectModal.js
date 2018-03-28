import baseUrl from '../api';
import { actionGenerator, buildApiClient } from '../lib';

// actions

export const actions = actionGenerator('PROJECT_MODAL', [
  'TITLE_CHANGE',
  'DESCRIPTION_CHANGE',
  'CLIENT_CHANGE',
  'TOGGLE_MODAL',
]);

// action generators

export function toggleProjectModal() {
  return {
    type: actions.TOGGLE_MODAL,
  };
};

export function titleChange(string) {
  return {
    type: actions.TITLE_CHANGE,
    value: string && string.target.value,
  };
};

export function descriptionChange(string) {
  return {
    type: actions.DESCRIPTION_CHANGE,
    value: string && string.target.value,
  };
};

export function clientChange(string) {
  return {
    type: actions.CLIENT_CHANGE,
    value: string && string.target.value,
  };
};

export function createdProjects(result) {
  return {
    type: actions.FETCHED,
    error: result.error,
    data: result.data,
  };
};

// thunks

let api = buildApiClient(baseUrl);

export function createProject(clientName, params, api = api) {
  return async function thunk(dispatch) {
    let error, response, client;

    response = await api.clients.index([], { name: clientName });
    let data = response.data;

    if (!data || data.length === 0) {
      response = await api.clients.create([], {}, { 
        body: { name: clientName } 
      });
      client = response.data;
    } 
    else {
      client = data.pop(); 
    };

    if (!client) {
      throw new Error('Could not create client');
    };
    
    Object.assign(params, { clientId: client.id });
    dispatch(await api.projects.create([], {}, { body: params }));
  };
};
