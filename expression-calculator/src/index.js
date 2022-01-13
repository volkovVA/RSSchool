function eval() {
    // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
  const str = expr.replace(/\s/g,'')

  checkBrackets([...str])
  checkDivByZero([...str])
  const arr = resultingArray([...str])
  const result = bracketsExprCalc(arr)

  return result
}

function checkBrackets(arr) {
  const leftBracket = arr.filter(el => el == '(').length
  const rightBracket = arr.filter(el => el == ')').length

  if (leftBracket != rightBracket) {
    throw new Error ('ExpressionError: Brackets must be paired')
  }
}

function checkDivByZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '/' && arr[i+1] == 0) {
      throw new Error ('TypeError: Division by zero.')
    }
  }
}

function resultingArray(arr) {
  let acc = ''
  arr.forEach(el => {
    if (/\d/.test(el)) {
      acc += el
    }
    if (/[\+\-\*\/\()]/.test(el)) {
      acc += ' '
      acc += el
      acc += ' '
    }
  })
  return acc
          .split(' ')
          .map(el => el.match(/\d/g) ? el = +el : el)
          .filter(el => el !== '')
}

function calc(prev, operator, next) {
  switch (operator) {
    case '+':
      return prev + next
    case '-':
      return prev - next
    case '*':
      return prev * next
    case '/':
      return prev / next
  }
}

function baseExprCalc(arr) {
  let prev = arr[0]
  let next
  let operator = ''

  for (let i = 1; i < arr.length; i++) {
    if (/[\-\+]/.test(arr[i]) && isNaN(arr[i])) {
      if (operator == '') {
        operator = arr[i]
        next = arr[i+1]
      } else if (operator != '') {
        prev = calc(prev, operator, next)
        operator = arr[i]
        next = arr[i+1]
      }
    }
    if (/[\*\/]/.test(arr[i])) {
      if (operator == '') {
        prev = calc(prev, arr[i], arr[i+1])
      } else {
        next = calc(next, arr[i], arr[i+1])
      }
    }
  }

  if (operator != '') {
    prev = calc(prev, operator, next)
  }

  return prev
}

function bracketsExprCalc(arr) {
  arr.push(')')
  arr.unshift('(')
  let array = []
  for (let i = 0; arr.length > 1; i++) {
    if (arr[i] === ')') {
      let j = i - 1
      while (arr[j] !== '(') {
        j--
      }
      array = arr.splice(j+1, i-j-1)
      console.log(array);
      let num = baseExprCalc(array)
      arr.splice(j, 2, num)
      i = 1
    }
  }
  
  return Number(arr)
}

module.exports = {
  expressionCalculator
}
