const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  const count = (arr) => arr.reduce((acc, value) => {
    if (value === '^^') {
      acc += 1;
      return acc;
    } else {
      return acc;
    }
  }, 0);


  return backyard.reduce((acc, value) => { 
    acc += count(value);
    return acc;
  }, 0);
};
