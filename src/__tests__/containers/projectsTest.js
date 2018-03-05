import React from 'react';
import { shallow } from 'enzyme';

import { Projects } from '../../containers/projects';

describe('Project', () => {
  let props, projects, mockFetch;

  beforeEach(() => {
    props = { fetch: jest.fn(), success: jest.fn(), fail: jest.fn() };
  });

  describe('when mounted', () => {
    beforeEach(() => {
      Object.assign(props, { api: 'api' });
      projects = shallow(<Projects {...props} />);
    });

    it('calls fetch function', () => {
      expect(props.fetch).toHaveBeenCalledWith(
        'api/project', props.success, props.fail
      );
    });
  });


  describe('when rendering', () => {
    let mockFetch, projectPage;

    beforeEach(() => {
      Object.assign(props, { 
        projects: [], 
        error: 'error', 
      });
      projects = shallow(<Projects {...props} />);
    });

    it('creates ProjectPage', () => {
      expect(projects).toMatchSnapshot();
    });
  });
});
