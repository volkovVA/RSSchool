import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {

  function sumNumbers(number) {
    let arr = String(number).split('');
    let sum = 0;
    arr.forEach(el => sum += Number(el));
    return sum >= 10 ? sumNumbers(sum) : sum;
  }

  return sumNumbers(n);
}