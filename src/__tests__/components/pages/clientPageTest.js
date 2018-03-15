import React from 'react';
import { shallow } from 'enzyme';
import { ClientPage } from '../../../components/pages';

describe('ClientPage', () => {
  let page;
  let client;

  beforeEach(() => {
    client = 'client';
  });

  describe('with error', () => {
    beforeEach(() => {
      page = shallow(<ClientPage error={'an error'}/>);
    });

    it('renders with error bar', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when loading', () => {
    beforeEach(() => {
      page = shallow(<ClientPage fetching={true} />);
    });

    it('renders with loading information', () => {
      expect(page).toMatchSnapshot();
    });
  });

  describe('when given clients', () => {
    beforeEach(() => {
      page = shallow(<ClientPage client={client} />);
    });

    it('correctly renders', () => {
      expect(page).toMatchSnapshot();
    });
  });
});

