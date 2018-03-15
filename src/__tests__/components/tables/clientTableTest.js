import React from 'react';
import { shallow } from 'enzyme';

import { ClientTable } from '../../../components/tables';

describe('ClientTable', () => {
  let table;
  let clients;

  beforeEach(() => {
    clients = [{ name: 'a' }, { name: 'b' }]
  });

  describe('without clients', () => {
    beforeEach(() => {
      table = shallow(<ClientTable />);
    });

    it('renders with message', () => {
      expect(table).toMatchSnapshot();
    });
  });

  describe('with clients', () => {
    beforeEach(() => {
      table = shallow(<ClientTable clients={clients} />);
    });

    it('renders with clients', () => {
      expect(table).toMatchSnapshot();
    });
  });
});
