import React from 'react';
import { shallow } from 'enzyme';

import { ProjectContainer } from '../../containers/projectContainer';

describe('Project', () => {
  let props, project, mockFetch;

  beforeEach(() => {
    props = { fetchProject: jest.fn(), match: { params: { id: 5 } } };
  });

  describe('when mounted', () => {
    beforeEach(() => {
      project = shallow(<ProjectContainer {...props} />);
    });

    it('calls fetch function', () => {
      expect(props.fetchProject).toHaveBeenCalledWith(5);
    });
  });


  describe('when rendering', () => {
    let mockFetch, projectPage;

    beforeEach(() => {
      Object.assign(props, { 
        project: { obj: 'props' }, 
        error: 'error', 
        fetching: false,
      });
      project = shallow(<ProjectContainer {...props} />);
    });

    it('creates ProjectPage', () => {
      expect(project).toMatchSnapshot();
    });
  });
});
