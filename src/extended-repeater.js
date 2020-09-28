const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const result = [];
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  
  for (let i = 0; i < options.repeatTimes; i += 1) {
    if (options.hasOwnProperty('addition')) {
      const additions = [];

      for (let k = 0; k < options.additionRepeatTimes; k += 1) {
        additions.push(String(options.addition));
      }
      
      if (options.hasOwnProperty('additionSeparator')) {
        result.push(`${String(str)}${additions.join(options.additionSeparator)}`);
      } else result.push(`${String(str)}${additions.join('|')}`);
    } else result.push(String(str));
  }
  if (options.hasOwnProperty('separator')) {
    return result.join(options.separator);
  } return result.join('+');
};