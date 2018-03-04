import React from 'react';
import renderer from 'react-test-renderer';

import { ProjectPage } from '../../../components/projects';

describe('ProjectPage', () => {
  let projectPage;
  let project;

  beforeEach(() => {
    project = [
      { title: '1' },
      { title: '2' },
    ];
  });

  describe('without project', () => {
    beforeEach(() => {
      projectPage = renderer.create(
        <ProjectPage />
      );
    });

    it('renders with error bar', () => {
      expect(projectPage).toMatchSnapshot();
    });
  });

  describe('with error', () => {
    beforeEach(() => {
      projectPage = renderer.create(
        <ProjectPage error={'an error'}/>
      );
    });

    it('renders with error bar', () => {
      expect(projectPage).toMatchSnapshot();
    });
  });

  describe('with project and error', () => {
    beforeEach(() => {
      projectPage = renderer.create(
        <ProjectPage projects={project} error={'an error'}/>
      );
    });

    it('renders with error bar', () => {
      expect(projectPage).toMatchSnapshot();
    });
  });

  describe('when passed project', () => {
    beforeEach(() => {
      projectPage = renderer.create(
        <ProjectPage projects={project} />
      );
    });

    it('correctly renders', () => {
      expect(projectPage).toMatchSnapshot();
    });
  });
});

