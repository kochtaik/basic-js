const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) value = '';
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || this.chain[position] === undefined || typeof position !== 'number') {
      this.chain = [];
      throw new Error;
    }
    this.chain.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain = this.chain.join('~~');
    const result = this.chain;
    this.chain = [];
    return result;
  },
};

module.exports = chainMaker;
