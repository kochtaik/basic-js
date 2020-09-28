const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const secondsInHour = 3600;
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(turns / (turnsSpeed / secondsInHour));
  return { turns, seconds };
};
