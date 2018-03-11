import React from 'react';
import { shallow } from 'enzyme';

import { Page } from '../../../components/projects';

describe('Page', () => {
  let page;
  let project;

  beforeEach(() => {
    project = 'project';
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

  describe('when given projects', () => {
    beforeEach(() => {
      page = shallow(<Page project={project} />);
    });

    it('correctly renders', () => {
      expect(page).toMatchSnapshot();
    });
  });
});

