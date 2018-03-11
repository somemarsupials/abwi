import React from 'react';
import { shallow } from 'enzyme';

import { Page } from '../../../components/allProjects';

describe('Page', () => {
  let page;
  let projects;

  beforeEach(() => {
    projects = 'list-of-projects';
  });

  describe('with error', () => {
    beforeEach(() => {
      page = shallow(<Page error={'an error'}/>);
    });

    it('renders with error bar', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when loading', () => {
    beforeEach(() => {
      page = shallow(<Page fetching={true} />);
    });

    it('renders with loading information', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when finished loading', () => {
    beforeEach(() => {
      page = shallow(<Page projects={projects} />);
    });

    it('correctly renders', () => {
      expect(page).toMatchSnapshot();
    });
  });
});

