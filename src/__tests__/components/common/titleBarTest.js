import React from 'react';
import renderer from 'react-test-renderer';

import { TitleBar } from '../../../components/common';

describe('TitleBar', () => {
  let titleBar;

  beforeEach(() => {
    titleBar = renderer.create(<TitleBar text={'hello'} />);
  });

  it('correctly renders', () => {
    expect(titleBar).toMatchSnapshot();
  });
});
