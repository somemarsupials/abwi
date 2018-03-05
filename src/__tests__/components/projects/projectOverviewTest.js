import React from 'react';
import { shallow } from 'enzyme';

import { ProjectsOverview } from '../../../components/projects';

describe('ProjectsOverview', () => {
  let projectsOverview;
  let projects;

  beforeEach(() => {
    projects = 'list-of-projects';
  });

  describe('without project', () => {
    beforeEach(() => {
      projectsOverview = shallow(<ProjectsOverview />);
    });

    it('renders with error bar', () => {
      expect(projectsOverview).toMatchSnapshot();
    });
  });

  describe('with error', () => {
    beforeEach(() => {
      projectsOverview = shallow(
        <ProjectsOverview error={'an error'}/>
      );
    });

    it('renders with error bar', () => {
      expect(projectsOverview).toMatchSnapshot();
    });
  });

  describe('with project and error', () => {
    beforeEach(() => {
      projectsOverview = shallow(
        <ProjectsOverview projects={projects} error={'an error'}/>
      );
    });

    it('renders with error bar', () => {
      expect(projectsOverview).toMatchSnapshot();
    });
  });

  describe('when passed project', () => {
    beforeEach(() => {
      projectsOverview = shallow(
        <ProjectsOverview projects={projects} />
      );
    });

    it('correctly renders', () => {
      expect(projectsOverview).toMatchSnapshot();
    });
  });
});

