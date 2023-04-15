const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainContent: '',
  getLength() {
    return this.chainContent.split('~~').length;
  },
  addLink(value) {
    let addLink;
    if (toString(value).length != 0){
      let forPush = '(' + toString(value) + ')';
      if(this.chainContent.length > 0){
        addLink = this.chainContent.split('~~').push(forPush).join('~~');} else {addLink = Array.of(this.chainContent).push(forPush).toString();}
    } else {
      addLink = this.chainContent.split('~~').push('()').join('~~');
    };
    this.chainContent = addLink;
 },
  removeLink(position) {
    if (typeof position != 'number' || position > this.chainContent.split('~~').length-1 || position < 0 || Number.isInteger(position) == false){
      throw new Error("You can't remove incorrect link!");
    }else{ this.chainContent = this.chainContent.split('~~').splice(position-1, 1).join('~~');};
  },
  reverseChain() {
    this.chainContent = this.chainContent.split('~~').reverse().join('~~');
  },
  finishChain() {
    return this.chainContent;
  }
};

console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());
console.log(chainMaker.chainContent);

module.exports = {
  chainMaker
};
