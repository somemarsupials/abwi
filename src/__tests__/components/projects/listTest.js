import React from 'react';
import { shallow } from 'enzyme';

import { List } from '../../../components/allProjects';

describe('List', () => {
  let list;
  let items;

  beforeEach(() => {
    items = ['item 1', 'item 2']
  });

  describe('without items', () => {
    beforeEach(() => {
      list = shallow(<List />);
    });

    it('renders with error bar', () => {
      expect(list).toMatchSnapshot();
    });
  });

  describe('without items', () => {
    beforeEach(() => {
      list = shallow(<List items={items} />);
    });

    it('renders with items', () => {
      expect(list).toMatchSnapshot();
    });
  });
});
