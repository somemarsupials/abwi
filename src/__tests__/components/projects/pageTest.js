import React from 'react';
import { shallow } from 'enzyme';

import { Page } from '../../../components/projects';

describe('Page', () => {
  let page;
  let project;

  beforeEach(() => {
    project = 'a-project';
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
      page = shallow(<Page project={project} error={'an error'}/>
      );
    });

    it('renders with error bar', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when passed project', () => {
    beforeEach(() => {
      page = shallow(<Page project={project} />
      );
    });

    it('correctly renders', () => {
      expect(page).toMatchSnapshot();
    });
  });
});

