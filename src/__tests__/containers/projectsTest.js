import React from 'react';
import { shallow } from 'enzyme';

import { Projects } from '../../containers/projects';

describe('Project', () => {
  let props, projects, response, mockFetch; 

  beforeEach(() => {
    props = { fetchedProjects: jest.fn(), cannotFetch: jest.fn() };
  });

  describe('when mounted', () => {

    describe('when making API call', () => {
      beforeEach(() => {
        response = { ok: false };
        mockFetch = jest.fn().mockReturnValue(response);
        Object.assign(props, { api: 'api', fetch: mockFetch });
        projects = shallow(<Projects {...props} />);
      });

      it('gets correct resource', () => {
        expect(mockFetch).toBeCalledWith('api/project');
      });
    });

    describe('when API call succeeds', () => {
      beforeEach(() => {
        response = { ok: true, json: jest.fn().mockReturnValue('data') };
        mockFetch = jest.fn().mockReturnValue(response);
        Object.assign(props, { fetch: mockFetch });
        projects = shallow(<Projects {...props} />);
      });

      it('emits action with data', () => {
        expect(props.fetchedProjects).toBeCalledWith('data');
      });
    });

    describe('when API call throws error', () => {
      beforeEach(() => {
        mockFetch = jest.fn().mockImplementation(() => { 
          throw { message: 'error' }
        });
        Object.assign(props, { fetch: mockFetch });
        projects = shallow(<Projects {...props} />);
      });

      it('emits action with data', () => {
        expect(props.cannotFetch).toBeCalledWith('error');
      });
    });

    describe('when API call fails', () => {
      beforeEach(() => {
        response = { ok: false, status: 404 };
        mockFetch = jest.fn().mockReturnValue(response);
        Object.assign(props, { fetch: mockFetch });
        projects = shallow(<Projects {...props} />);
      });

      it('emits action with data', () => {
        let firstCall = props.cannotFetch.mock.calls[0];
        expect(firstCall.pop()).toMatch(/404/);
      });
    });
  });

  describe('when rendering', () => {
    let projectPage;

    beforeEach(() => {
      response = { ok: false, status: 404 };
      mockFetch = jest.fn().mockReturnValue(response);
      Object.assign(props, { 
        projects: [], 
        error: 'error', 
        fetch: mockFetch 
      });
      projectPage = shallow(<Projects {...props} />);
    });

    it('creates ProjectPage', () => {
      expect(projectPage).toMatchSnapshot();
    });
  });
});
