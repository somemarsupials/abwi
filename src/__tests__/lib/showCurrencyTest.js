import { showCurrency } from '../../lib';

describe('showCurrency', () => {
  let options;

  beforeEach(() => {
    options = {
      currency: "$",
      dp: 2,
      subUnits: 100,
    };
  });

  it('formats currency', () => {
    expect(showCurrency(232, options)).toEqual('$2.32');
  });

  it('rounds up additional decimal places', () => {
    expect(showCurrency(232.5, options)).toEqual('$2.33');
  });

  it('rounds down additional decimal places', () => {
    expect(showCurrency(232.4, options)).toEqual('$2.32');
  });
});

