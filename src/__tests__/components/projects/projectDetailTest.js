import React from 'react';
import { shallow } from 'enzyme';

import { ProjectDetail } from '../../../components/projects';

describe('ProjectDetail', () => {
  let detail;
  let project;

  beforeEach(() => {
    project = { client: { name: 'hello' }, items: [1, 2] };
  });

  describe('with project', () => {
    beforeEach(() => {
      detail = shallow(<ProjectDetail project={project} />);
    });

    it('renders with items', () => {
      expect(detail).toMatchSnapshot();
    });
  });
});
