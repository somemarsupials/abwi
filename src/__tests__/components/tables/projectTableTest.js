import React from 'react';
import { shallow } from 'enzyme';

import { ProjectTable } from '../../../components/tables';

describe('ProjectTable', () => {
  let table;
  let projects;

  beforeEach(() => {
    projects = [{ title: 'project 1', id: 1 }, { title: 'project 2', id: 2}];
  });

  describe('without projects', () => {
    beforeEach(() => {
      table = shallow(<ProjectTable />);
    });

    it('renders with message', () => {
      expect(table).toMatchSnapshot();
    });
  });

  describe('with projects', () => {
    beforeEach(() => {
      table = shallow(<ProjectTable projects={projects} />);
    });

    it('renders with projects', () => {
      expect(table).toMatchSnapshot();
    });
  });
});
