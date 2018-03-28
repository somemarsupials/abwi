import React from 'react';
import { shallow } from 'enzyme';

import { ProjectsContainer } from '../../containers/projectsContainer';

describe('Project', () => {
  let props, projects;

  beforeEach(() => {
    props = { 
      fetchProjects: jest.fn(),
      response: {
        data: [], 
        error: 'error', 
      },
      fetching: false,
    };
    projects = shallow(<ProjectsContainer {...props} />);
  });

  describe('when mounted', () => {
    it('calls fetch function', () => {
      expect(props.fetchProjects).toHaveBeenCalled();
    });
  });


  describe('when rendering', () => {
    it('creates ProjectPage', () => {
      expect(projects).toMatchSnapshot();
    });
  });
});
