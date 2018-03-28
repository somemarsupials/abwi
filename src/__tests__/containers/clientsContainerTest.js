import React from 'react';
import { shallow } from 'enzyme';

import { ClientsContainer } from '../../containers/clientsContainer';

describe('Client', () => {
  let props, clients;

  beforeEach(() => {
    props = { 
      fetchClients: jest.fn(),
      response: {
        data: [], 
        error: 'error', 
      },
      fetching: false,
    };
    clients = shallow(<ClientsContainer {...props} />);
  });

  describe('when mounted', () => {
    it('calls fetch function', () => {
      expect(props.fetchClients).toHaveBeenCalled();
    });
  });


  describe('when rendering', () => {
    it('creates ClientPage', () => {
      expect(clients).toMatchSnapshot();
    });
  });
});
