import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const posIntArr= [];
  const result = [];

  arr.forEach(el => {
    if (el > -1) {
      posIntArr.push(el);
    }
  });

  const posIntArrSort = posIntArr.sort((a, b ) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let min = Math.min(...posIntArrSort);
    
    if (arr[i] === -1) {
      result.push(arr[i])
    } else {
      result.push(min);
      posIntArrSort.shift();
    }
  }

  return result;
}