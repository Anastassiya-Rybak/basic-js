const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainContent: [],
  getLength() {
    return this.chainContent.length;
  },
  addLink(value) {
    this.chainContent.push(`( ${value} )`);
    return this;
 },
  removeLink(position) {
    if (typeof position != 'number' || position > this.getLength() || position < 1 || Number.isInteger(position) == false){
      this.chainContent.length = 0;
      throw new Error("You can't remove incorrect link!");
    }else{ 
      this.chainContent.splice(position-1, 1);
      return this;
    };
  },
  reverseChain() {
    this.chainContent.reverse();
    return this;
  },
  finishChain() {
    let full = this.chainContent.join('~~');
    this.chainContent.length = 0;
    return full;
  }
};

console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());
console.log(chainMaker.chainContent);

module.exports = {
  chainMaker
};
