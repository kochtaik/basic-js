const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(initialActivity) {
  const MODERN_ACTIVITY = 15; 
  const HALF_LIFE_PERIOD= 5730;

  if (typeof initialActivity !== 'string') return false;

  const activityToNum = parseFloat(initialActivity);

  if (activityToNum > MODERN_ACTIVITY) return false;
  if (activityToNum <= 0) return false;

  const ln2 = Math.log(2);
  const k = ln2 / HALF_LIFE_PERIOD;
  const period = Math.log(MODERN_ACTIVITY / initialActivity.toString()) / k;

  if (!isFinite(period) || isNaN(period)) return false;

  return Math.ceil(period);
};
