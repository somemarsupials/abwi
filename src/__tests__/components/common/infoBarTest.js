import React from 'react';
import { shallow } from 'enzyme';

import { InfoBar } from '../../../components/common';

describe('InfoBar', () => {
  let infoBar;

  beforeEach(() => {
    infoBar = shallow(<InfoBar text={'hello'} />);
  });

  it('correctly renders', () => {
    expect(infoBar).toMatchSnapshot();
  });
});
