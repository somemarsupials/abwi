import React from 'react';
import { shallow } from 'enzyme';

import { SiteLinks } from '../../../components/header';

describe('SiteLinks', () => {
  let siteLinks;

  describe('when passed detailed information', () => {
    beforeEach(() => {
      siteLinks = shallow(<SiteLinks />);
    });

    it('correctly renders', () => {
      expect(siteLinks).toMatchSnapshot();
    });
  });
});

