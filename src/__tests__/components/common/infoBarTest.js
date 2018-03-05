import React from 'react';
import { shallow } from 'enzyme';

import { InfoBar } from '../../../components/common';

describe('InfoBar', () => {
  let titleBar;

  beforeEach(() => {
    titleBar = shallow(<InfoBar text={'hello'} />);
  });

  it('correctly renders', () => {
    expect(titleBar).toMatchSnapshot();
  });
});
