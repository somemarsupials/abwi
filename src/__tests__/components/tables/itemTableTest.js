import React from 'react';
import { shallow } from 'enzyme';

import { ItemTable } from '../../../components/tables';

describe('ItemTable', () => {
  let table;
  let items;

  beforeEach(() => {
    items = [
      { description: '1', value: 200 }, 
      { description: '2', value: 100 }
    ]
  });

  describe('without items', () => {
    beforeEach(() => {
      table = shallow(<ItemTable />);
    });

    it('renders with message', () => {
      expect(table).toMatchSnapshot();
    });
  });

  describe('with items', () => {
    beforeEach(() => {
      table = shallow(<ItemTable items={items} />);
    });

    it('renders with items', () => {
      expect(table).toMatchSnapshot();
    });
  });
});
