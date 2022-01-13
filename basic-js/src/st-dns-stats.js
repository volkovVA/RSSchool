import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {

  function getMatrix() {
    const arr = [];
    domains.forEach(el => {
      arr.push(el.split('.').reverse());
    });

    const matrix = [];
    for (let i = 0; i < arr.length; i++) {
      let str = '';
      matrix[i] = [];
      for (let j = 0; j < arr[i].length; j++) {
        str += `.${arr[i][j]}`;
        matrix[i][j] = str;
      }
    }

    return matrix;
  }

  const result = getMatrix().flat().reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  return result;
}