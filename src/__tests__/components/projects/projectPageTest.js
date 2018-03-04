import React from 'react';
import { shallow } from 'enzyme';

import { ProjectPage } from '../../../components/projects';

describe('ProjectPage', () => {
  let projectPage;
  let projects;

  beforeEach(() => {
    projects = 'list-of-projects';
  });

  describe('without project', () => {
    beforeEach(() => {
      projectPage = shallow(<ProjectPage />);
    });

    it('renders with error bar', () => {
      expect(projectPage).toMatchSnapshot();
    });
  });

  describe('with error', () => {
    beforeEach(() => {
      projectPage = shallow(
        <ProjectPage error={'an error'}/>
      );
    });

    it('renders with error bar', () => {
      expect(projectPage).toMatchSnapshot();
    });
  });

  describe('with project and error', () => {
    beforeEach(() => {
      projectPage = shallow(
        <ProjectPage projects={projects} error={'an error'}/>
      );
    });

    it('renders with error bar', () => {
      expect(projectPage).toMatchSnapshot();
    });
  });

  describe('when passed project', () => {
    beforeEach(() => {
      projectPage = shallow(
        <ProjectPage projects={projects} />
      );
    });

    it('correctly renders', () => {
      expect(projectPage).toMatchSnapshot();
    });
  });
});

