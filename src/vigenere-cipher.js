const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  wordRepeater(str, times) {
      const result = [];
        let x = 0;
        for (let k = 0; k < times; k += 1) {
          if (k === str.length || x === str.length) {
            x = 0;
          }
          result.push(str[x]);
          x += 1;
        }
      return result.join('');
    }

  encrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error;

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const n = alphabet.length;
    key = key.toLowerCase();
    str = str.toLowerCase();
    if (key.length !== str.length) {
      key = this.wordRepeater(key, str.length).toLowerCase();
    }
    let result = [];
    let keywordIndex = 0;
    for (let i = 0; i < str.length; i += 1) {
      const symbol = str[i];
      if (!alphabet.includes(symbol)) {
        result.push(symbol);
      } else {
        const char = (alphabet.indexOf(symbol) + alphabet.indexOf(key[keywordIndex])) % n; 
        result.push(alphabet[char]);
        keywordIndex += 1;
      }
    }
    if (!this.direct) {
      result.reverse();
    } return result.join('').toUpperCase();
  }

  decrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error;

    str = str.toLowerCase();
    key = key.toLowerCase();
    if (key.length !== str.length) {
      key = this.wordRepeater(key, str.length);
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const n = alphabet.length;
    let result = [];
    let keywordIndex = 0;
    for (let i = 0; i < str.length; i += 1) {
      const symbol = str[i];
      if (!alphabet.includes(symbol)) result.push(symbol);
      else {
        const char = (alphabet.indexOf(symbol) + n - alphabet.indexOf(key[keywordIndex])) % n;
        result.push(alphabet[char]);
        keywordIndex += 1;
      }
    }
    if (!this.direct) {
      result.reverse();
    } return result.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
