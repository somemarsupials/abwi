import React from 'react';
import { shallow } from 'enzyme';

import { ProjectPage } from '../../../components/projects';

describe('ProjectPage', () => {
  let page;
  let project;

  beforeEach(() => {
    project = 'project';
  });

  describe('with error', () => {
    beforeEach(() => {
      page = shallow(<ProjectPage error={'an error'}/>);
    });

    it('renders with error bar', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when loading', () => {
    beforeEach(() => {
      page = shallow(<ProjectPage fetching={true} />);
    });

    it('renders with loading information', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when given projects', () => {
    beforeEach(() => {
      page = shallow(<ProjectPage project={project} />);
    });

    it('correctly renders', () => {
      expect(page).toMatchSnapshot();
    });
  });
});

