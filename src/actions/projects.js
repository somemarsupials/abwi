import types from './types';

export default {
  fetchedProjects: function(projects) {
    return {
      type: types.GOT_PROJECTS,
      projects: projects,
    }
  },

  projectFetchFailed: function(error) {
    return {
      type: types.PROJECT_FETCH_FAILED,
      error: error,
    };
  },
};
