import React from 'react';
import { mount, shallow } from 'enzyme';

import { Projects } from '../../containers/';
import { TitleBar } from '../../components/common/';

describe('Project', () => {
  let props;
  let projects;
  let mockFetch;

  beforeEach(() => {
    let json = jest.fn().mockReturnValue('data');
    let mockFetch = jest.fn().mockReturnValue({ json: json });
    props = { fetch: mockFetch, api: 'api' };
    projects = mount(<Projects {...props} />);
  });

  describe('when rendering', () => {
    it('renders a div', () => {
      expect(projects.find('div').length).toBe(1);
    });

    describe('within div', () => {
      describe('when rendering title bar', () => {
        let titles;

        beforeEach(() => {
          titles = projects.find(TitleBar);
        });

        it('is within div', () => {
          expect(titles.length).toBe(1);
        });

        it('has text', () => {
          expect(titles.props().text).toBeDefined();
        });
      });

      describe('when rendering project list', () => {
        let projectList;

        beforeEach(() => {
          projectList = projects.find(ProjectList);
        });

        it('is within div', () => {
          expect(projectList.length).toBe(1);
        });

        it('has project data', () => {
          expect(projectList.state().projects).toEqual('data');
        });
      });
    });
  });

  describe('before mounting', () => {
    it('fetches from api', () => {
      expect(props.fetch).toHaveBeenCalledWith('api/project');
    });
  
    it('saves api data', () => {
      expect(projects.state().projects).toEqual('data');
    });
  });
});
