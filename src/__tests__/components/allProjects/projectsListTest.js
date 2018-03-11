import React from 'react';
import { shallow } from 'enzyme';

import { ProjectsList } from '../../../components/allProjects';

describe('ProjectsList', () => {
  let list;
  let projects;

  beforeEach(() => {
    projects = [{ title: 'project 1', id: 1 }, { title: 'project 2', id: 2}];
  });

  describe('without projects', () => {
    beforeEach(() => {
      list = shallow(<ProjectsList />);
    });

    it('renders with message', () => {
      expect(list).toMatchSnapshot();
    });
  });

  describe('with projects', () => {
    beforeEach(() => {
      list = shallow(<ProjectsList projects={projects} />);
    });

    it('renders with projects', () => {
      expect(list).toMatchSnapshot();
    });
  });
});
