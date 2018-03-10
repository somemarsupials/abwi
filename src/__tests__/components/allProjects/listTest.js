import React from 'react';
import { shallow } from 'enzyme';

import { List } from '../../../components/allProjects';

describe('List', () => {
  let list;
  let projects;

  beforeEach(() => {
    projects = [{ title: 'project 1' }, { title: 'project 2' }];
  });

  describe('without projects', () => {
    beforeEach(() => {
      list = shallow(<List />);
    });

    it('renders with message', () => {
      expect(list).toMatchSnapshot();
    });
  });

  describe('with projects', () => {
    beforeEach(() => {
      list = shallow(<List projects={projects} />);
    });

    it('renders with projects', () => {
      expect(list).toMatchSnapshot();
    });
  });
});
