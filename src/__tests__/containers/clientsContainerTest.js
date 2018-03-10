import React from 'react';
import { shallow } from 'enzyme';

import { ClientsContainer } from '../../containers/clientsContainer';

describe('Client', () => {
  let props, clients;

  beforeEach(() => {
    props = { fetchClients: jest.fn() };
  });

  describe('when mounted', () => {
    beforeEach(() => {
      clients = shallow(<ClientsContainer {...props} />);
    });

    it('calls fetch function', () => {
      expect(props.fetchClients).toHaveBeenCalled();
    });
  });


  describe('when rendering', () => {
    beforeEach(() => {
      Object.assign(props, { 
        clients: [], 
        error: 'error', 
        fetching: false,
      });
      clients = shallow(<ClientsContainer {...props} />);
    });

    it('creates ClientPage', () => {
      expect(clients).toMatchSnapshot();
    });
  });
});
