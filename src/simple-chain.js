const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  _chain: [],
  getLength() {
    return this._chain.length;
  },
  addLink(value = '') {
    this._chain.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' 
      || position % 1 > 0
      || position < 1
      || position > this._chain.length 
    ) {
      console.log(position);
      console.log(this._chain.length);
      this._chain = [];
      throw new Error('You can\'t remove incorrect link!'); 
    }
    this._chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this._chain.reverse();
    return this;
  },
  finishChain() {
  const ch = this._chain.join('~~');
  this._chain = [];
  return ch;
  }
};

module.exports = {
  chainMaker
};
