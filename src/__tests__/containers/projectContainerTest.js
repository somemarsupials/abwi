import React from 'react';
import { shallow } from 'enzyme';

import { ProjectContainer } from '../../containers/projectContainer';

describe('Project', () => {
  let props, project, mockFetch;

  beforeEach(() => {
    props = { 
      fetchProject: jest.fn(), 
      match: { params: { id: 5 } },
      response: {
        data: { obj: 'props' }, 
        error: 'error', 
      },
      fetching: false,
    };
    project = shallow(<ProjectContainer {...props} />);
  });

  describe('when mounted', () => {
    it('calls fetch function', () => {
      expect(props.fetchProject).toHaveBeenCalledWith(5);
    });
  });


  describe('when rendering', () => {
    it('creates ProjectPage', () => {
      expect(project).toMatchSnapshot();
    });
  });
});
