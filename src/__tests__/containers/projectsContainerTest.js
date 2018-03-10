import React from 'react';
import { shallow } from 'enzyme';

import { ProjectsContainer } from '../../containers/projectsContainer';

describe('Project', () => {
  let props, projects;

  beforeEach(() => {
    props = { fetchProjects: jest.fn() };
  });

  describe('when mounted', () => {
    beforeEach(() => {
      projects = shallow(<ProjectsContainer {...props} />);
    });

    it('calls fetch function', () => {
      expect(props.fetchProjects).toHaveBeenCalled();
    });
  });


  describe('when rendering', () => {
    beforeEach(() => {
      Object.assign(props, { 
        projects: [], 
        error: 'error', 
        fetching: false,
      });
      projects = shallow(<ProjectsContainer {...props} />);
    });

    it('creates ProjectPage', () => {
      expect(projects).toMatchSnapshot();
    });
  });
});
