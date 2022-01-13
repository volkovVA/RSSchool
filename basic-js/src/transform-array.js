import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if ((!Array.isArray(arr))) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let res = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i += 2;
    } else
    if (arr[i] === '--discard-prev') {
      res.pop();
    } else
    if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        res.push(arr[i+1]);
      }
    } else
    if (arr[i] === '--double-prev') {
      if (i !== 0) {
        res.push(res[i-1]);
      }
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}