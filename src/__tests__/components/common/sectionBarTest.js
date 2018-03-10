import React from 'react';
import { shallow } from 'enzyme';

import { SectionBar } from '../../../components/common';

describe('SectionBar', () => {
  let titleBar;

  beforeEach(() => {
    titleBar = shallow(<SectionBar text={'hello'} />);
  });

  it('correctly renders', () => {
    expect(titleBar).toMatchSnapshot();
  });
});
