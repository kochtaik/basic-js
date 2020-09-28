const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    for (const el of arr) {
      if (Array.isArray(el)) {
        depth = Math.max(this.calculateDepth(el), depth);
      }
    }
  return depth += 1;
  }
};