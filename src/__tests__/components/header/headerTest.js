import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../../components/header';

describe('Header', () => {
  let header;

  describe('when passed detailed information', () => {
    beforeEach(() => {
      header = shallow(<Header />);
    });

    it('correctly renders', () => {
      expect(header).toMatchSnapshot();
    });
  });
});
