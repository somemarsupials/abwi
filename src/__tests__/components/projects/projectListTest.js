import React from 'react';
import { shallow } from 'enzyme';

import { ProjectList } from '../../../components/projects';

describe('ProjectList', () => {
  let projectList;
  let projects;

  beforeEach(() => {
    projects = [{ title: 'project 1' }, { title: 'project 2' }];
  });

  describe('without project', () => {
    beforeEach(() => {
      projectList = shallow(<ProjectList projects={projects} />);
    });

    it('renders with error bar', () => {
      expect(projectList).toMatchSnapshot();
    });
  });
});
