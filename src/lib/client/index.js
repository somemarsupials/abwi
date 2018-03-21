import { buildResource } from './resource';

// top-level resources

const projects = buildResource('projects');
const clients = buildResource('clients');

// nested resources

projects.nest(buildResource('items'));

// client object

export default {
  projects: projects,
  clients: clients,
};
