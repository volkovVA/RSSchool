const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const length = 10;
    const pattern = new RegExp('.{1,' + length + '}', 'ig')
    const arrMultipleOfTen = expr.match(pattern).map(item => item.padEnd(length, '0'))
    const arrNumbers = arrMultipleOfTen.map(el => el === '**********' ? ' ' : parseInt(el, 10)).map(el => String(el).match(/.{1,2}/g))
    const arrSymbol = []

    for (let i = 0; i < arrNumbers.length; i++) {
        for (let j = 0; j < arrNumbers[i].length; j++) {
            if (arrNumbers[i][j] === '10') {
                arrNumbers[i][j] = '.'
            } else if (arrNumbers[i][j] === '11'){
                arrNumbers[i][j] = '-'
            } else {
                arrNumbers[i][j] = ' '
            }
        }
        arrSymbol.push(arrNumbers[i].join(''))
    }

    for (let key in MORSE_TABLE) {
        for (let i = 0; i < arrSymbol.length; i++) {
            if (arrSymbol[i] === key) {
                arrSymbol[i] = MORSE_TABLE[key]
            }
        }
    }
    
    return arrSymbol.join('')
}

module.exports = {
    decode
}