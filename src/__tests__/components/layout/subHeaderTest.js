import React from 'react';
import { shallow } from 'enzyme';

import { SubHeader } from '../../../components/layout';

describe('Header', () => {
  let header;

  describe('when passed detailed information', () => {
    beforeEach(() => {
      header = shallow(<SubHeader>text</SubHeader>);
    });

    it('correctly renders', () => {
      expect(header).toMatchSnapshot();
    });
  });
});

