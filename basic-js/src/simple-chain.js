// import { NotImplementedError } from '../extensions/index.js';

// /**
//  * Implement chainMaker object according to task description
//  * 
//  */
export default {
  chainArr: [],

  getLength() {
    return chainArr.length;
  },

  addLink(value) {
    value === undefined ? this.chainArr.push('') : this.chainArr.push(`( ${value} )`)
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.chainArr.length - 1) {
      this.chainArr = [];
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.chainArr.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  finishChain() {
    let result = this.chainArr.join('~~');
    this.chainArr = [];
    return result;
  }
};