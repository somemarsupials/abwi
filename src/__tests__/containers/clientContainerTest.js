import React from 'react';
import { shallow } from 'enzyme';

import { ClientContainer } from '../../containers/clientContainer';

describe('Client', () => {
  let props, client, mockFetch;

  beforeEach(() => {
    props = { fetchClient: jest.fn(), match: { params: { id: 5 } } };
  });

  describe('when mounted', () => {
    beforeEach(() => {
      client = shallow(<ClientContainer {...props} />);
    });

    it('calls fetch function', () => {
      expect(props.fetchClient).toHaveBeenCalledWith(5);
    });
  });


  describe('when rendering', () => {
    let mockFetch, clientPage;

    beforeEach(() => {
      Object.assign(props, { 
        client: { obj: 'props' }, 
        error: 'error', 
        fetching: false,
      });
      client = shallow(<ClientContainer {...props} />);
    });

    it('creates ClientPage', () => {
      expect(client).toMatchSnapshot();
    });
  });
});
