import React from 'react';
import { shallow } from 'enzyme';

import { TitleBar } from '../../../components/common';

describe('TitleBar', () => {
  let titleBar;

  beforeEach(() => {
    titleBar = shallow(<TitleBar text={'hello'} />);
  });

  it('correctly renders', () => {
    expect(titleBar).toMatchSnapshot();
  });
});
