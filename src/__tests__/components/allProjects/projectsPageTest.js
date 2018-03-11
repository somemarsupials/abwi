import React from 'react';
import { shallow } from 'enzyme';

import { ProjectsPage } from '../../../components/allProjects';

describe('ProjectsPage', () => {
  let page;
  let projects;

  beforeEach(() => {
    projects = 'list-of-projects';
  });

  describe('with error', () => {
    beforeEach(() => {
      page = shallow(<ProjectsPage error={'an error'}/>);
    });

    it('renders with error bar', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when loading', () => {
    beforeEach(() => {
      page = shallow(<ProjectsPage fetching={true} />);
    });

    it('renders with loading information', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when finished loading', () => {
    beforeEach(() => {
      page = shallow(<ProjectsPage projects={projects} />);
    });

    it('correctly renders', () => {
      expect(page).toMatchSnapshot();
    });
  });
});

