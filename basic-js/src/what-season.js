import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }

  try {
    date.getTime()
  } catch(e) {
    throw new Error('Invalid date!')
  }

  const month = date.getMonth()

  switch(true) {
    case (month >= 2 && month <= 4): return 'spring';
    case (month >= 5 && month <= 7): return 'summer';
    case (month >= 8 && month <= 10): return 'autumn';
    default: return 'winter'
  }
}