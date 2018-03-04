import React from 'react';
import renderer from 'react-test-renderer';

import { ErrorBar } from '../../../components/common';

describe('ErrorBar', () => {
  let errorBar;

  describe('when passed detailed information', () => {
    beforeEach(() => {
      errorBar = renderer.create(
        <ErrorBar message={'Nerdy error!'} detail={'Details...'} />
      );
    });

    it('correctly renders', () => {
      expect(errorBar).toMatchSnapshot();
    });
  });

  describe('when passed no detail', () => {
    beforeEach(() => {
      errorBar = renderer.create(
        <ErrorBar message={'Error!'} />);
    });

    it('correctly renders', () => {
      expect(errorBar).toMatchSnapshot();
    });
  });
});

