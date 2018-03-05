import React from 'react';
import { shallow } from 'enzyme';

import { ErrorBar } from '../../../components/common';

describe('ErrorBar', () => {
  let errorBar;

  describe('when passed detailed information', () => {
    beforeEach(() => {
      errorBar = shallow(
        <ErrorBar text={'Nerdy error!'} detail={'Details...'} />
      );
    });

    it('correctly renders', () => {
      expect(errorBar).toMatchSnapshot();
    });
  });

  describe('when passed no detail', () => {
    beforeEach(() => {
      errorBar = shallow(
        <ErrorBar text={'Error!'} />);
    });

    it('correctly renders', () => {
      expect(errorBar).toMatchSnapshot();
    });
  });
});

