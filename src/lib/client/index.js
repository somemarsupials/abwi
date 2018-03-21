import { buildResource } from './resource';

export default function buildApiClient(api, builder = buildResource) {

  // projects

  const projects = builder('projects', api);
  projects.nest(builder('items', api), 'items');

  // clients

  const clients = builder('clients', api);

  // API client

  return {
    projects: projects,
    clients: clients,
  };
};
