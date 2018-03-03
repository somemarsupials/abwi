import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

import { TitleBar } from '../../../components/common';

describe('TitleBar', () => {
  it('renders correctly', () => {
    const titleBar = renderer.create(<TitleBar text={'hello'} />);
    expect(titleBar).toMatchSnapshot();
  });
});
