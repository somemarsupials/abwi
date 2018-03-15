import React from 'react';
import { shallow } from 'enzyme';
import { ClientsPage } from '../../../components/pages';

describe('ClientsPage', () => {
  let page;
  let clients;

  beforeEach(() => {
    clients = 'list-of-clients';
  });

  describe('with error', () => {
    beforeEach(() => {
      page = shallow(<ClientsPage error={'an error'}/>);
    });

    it('renders with error bar', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when loading', () => {
    beforeEach(() => {
      page = shallow(<ClientsPage fetching={true} />);
    });

    it('renders with loading information', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when finished loading', () => {
    beforeEach(() => {
      page = shallow(<ClientsPage clients={clients} />);
    });

    it('correctly renders', () => {
      expect(page).toMatchSnapshot();
    });
  });
});

