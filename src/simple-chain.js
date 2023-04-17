
const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  chain: [],
  
  getLength() {
    return this.chain.length;
  },
  
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error('Invalid position value. Chain is reset');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
    const result = this.chain.map((link) => `( ${link} )`).join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker
};