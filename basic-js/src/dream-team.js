import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let secretName = '';

  if (members === null || members === undefined) {
    return false;
  }
  if (members.length > 0 && typeof members === "object") {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        members[i] = members[i].trim().toUpperCase();
        secretName += members[i][0];
      }
    }
  } else {
    return false;
  }
  return secretName.split('').sort().join('')
}