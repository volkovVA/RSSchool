module.exports = function toReadable (number) {
    const numObj = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
      }
  
      const numArray = number.toString().split('').map(function(el, idx, arr) {
          return el * Math.pow(10, arr.length - idx - 1);
      });
  
      if (number === 0) {
          return 'zero'
      }
      if (number < 20) {
          return numObj[number]
      }
      if (number >= 20 && number <= 99) {
          return `${numObj[numArray[0]]} ${numArray[1] ? numObj[numArray[1]] : ''}`.trim()
      }
      if (number >= 100 && number <= 999 && numArray[1] !== 0) {
          return `${numObj[numArray[0] / 100]} hundred ${numArray[1] === 10 && numArray[2] !== 0 ? numObj[numArray[1] + numArray[2]] : numObj[numArray[1]]} ${numArray[1] >= 20 && numArray[2] > 0 ? numObj[numArray[2]] : '' }`.trim()
  
      }
      if (number > 99 && numArray[1] === 0 && numArray[2] === 0) {
          return `${numObj[numArray[0] / 100]} hundred`
      }
      if (number > 99 && numArray[1] === 0 && numArray[2] !== 0) {
          return `${numObj[numArray[0] / 100]} hundred ${numObj[numArray[2]]}`
      }
  
  }
