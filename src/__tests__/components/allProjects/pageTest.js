import React from 'react';
import { shallow } from 'enzyme';

import { Page } from '../../../components/allProjects';

describe('Page', () => {
  let page;
  let projects;

  beforeEach(() => {
    projects = 'list-of-projects';
  });

  describe('without project', () => {
    beforeEach(() => {
      page = shallow(<Page />);
    });

    it('renders with error bar', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('with error', () => {
    beforeEach(() => {
      page = shallow(<Page error={'an error'}/>
      );
    });

    it('renders with error bar', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('with project and error', () => {
    beforeEach(() => {
      page = shallow(<Page projects={projects} error={'an error'}/>
      );
    });

    it('renders with error bar', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when loading', () => {
    beforeEach(() => {
      page = shallow(<Page loading={true} />);
    });

    it('renders with loading information', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when loading and error', () => {
    beforeEach(() => {
      page = shallow(<Page error={'an error'} loading={true} />);
    });

    it('renders with error bar', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when passed project', () => {
    beforeEach(() => {
      page = shallow(<Page projects={projects} />
      );
    });

    it('correctly renders', () => {
      expect(page).toMatchSnapshot();
    });
  });
});

