const DEFAULTS = {
  currency: "£",
  dp: 2,
  subUnits: 100,
};

export default function(amount, options = DEFAULTS) {
  let { currency, dp, subUnits } = options;
  return `${currency}${(amount / subUnits).toFixed(dp)}`;
};
