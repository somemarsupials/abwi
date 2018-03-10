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
      page = shallow(<Page error={'an error'}/>
      );
    });

    it('renders with error bar', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when loading', () => {
    beforeEach(() => {
      page = shallow(<Page project={null} fetching={true} error={null} />);
    });

    it('renders with loading information', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when finished loading', () => {
    beforeEach(() => {
      page = shallow(<Page loading={false} project={project} />
      );
    });

    it('correctly renders', () => {
      expect(page).toMatchSnapshot();
    });
  });
});

