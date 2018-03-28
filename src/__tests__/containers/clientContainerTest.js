import React from 'react';
import { shallow } from 'enzyme';

import { ClientContainer } from '../../containers/clientContainer';

describe('Client', () => {
  let props, client, mockFetch;

  beforeEach(() => {
    props = { 
      fetchClient: jest.fn(), 
      match: { params: { id: 5 } },
      response: {
        data: { obj: 'props' }, 
        error: 'error', 
      },
      fetching: false,
    };
    client = shallow(<ClientContainer {...props} />);
  });

  describe('when mounted', () => {
    it('calls fetch function', () => {
      expect(props.fetchClient).toHaveBeenCalledWith(5);
    });
  });


  describe('when rendering', () => {
    it('creates ClientPage', () => {
      expect(client).toMatchSnapshot();
    });
  });
});
