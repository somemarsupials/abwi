import React from 'react';
import { shallow } from 'enzyme';

import { List } from '../../../components/allProjects';

describe('List', () => {
  let list;
  let projects;

  beforeEach(() => {
    projects = [{ title: 'project 1' }, { title: 'project 2' }];
  });

  describe('without project', () => {
    beforeEach(() => {
      list = shallow(<List projects={projects} />);
    });

    it('renders with error bar', () => {
      expect(list).toMatchSnapshot();
    });
  });
});
