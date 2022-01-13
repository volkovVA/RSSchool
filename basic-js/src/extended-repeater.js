import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let arr = [];
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;

  addition === null ? addition = String(addition) : addition;

  additionSeparator = additionSeparator || '|';

  separator = separator || '+';

  repeatTimes = repeatTimes || 1;

  additionRepeatTimes = additionRepeatTimes || 1;

  const aditionArr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  for (let i = 0; i < repeatTimes; i++) {
    arr.push(`${String(str)}${aditionArr}`);
  }

  return arr.join(separator);
}