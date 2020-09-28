const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error;

  const result = [];
  const arrCopy = [...arr];
  
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    switch(item) {

      case '--discard-next':
        if (arrCopy[i + 1] === undefined) break;
        else {
          i += 1; 
          arrCopy[i] = undefined;
          break;       
      }

      case '--discard-prev':
        if (arrCopy[i - 1] === undefined) break;
        else {
          result.pop();
          break;
        }
      
      case '--double-next':
        if (arrCopy[i + 1] === undefined) break;
        else {
          result.push(arrCopy[i + 1]);
          break;
        }

      case '--double-prev':
        if (arrCopy[i - 1] === undefined) break;
        else {
          result.push(arrCopy[i - 1])
          break;
        }

      default:
        result.push(item);
        break;
    }
  }
  return result;
};
