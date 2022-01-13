module.exports = function check(str, bracketsConfig) {
  const arrayFromString = [...str]
  return res(arrayFromString)

  function res(arr) {
    for (let i = 0; i < arr.length; i++) {
      while (arr[i] === '[' && arr[i + 1] === ']' ||
        arr[i] === '(' && arr[i + 1] === ')' ||
        arr[i] === '{' && arr[i + 1] === '}' ||
        arr[i] === '|' && arr[i + 1] === '|' ||
        arr[i] === '1' && arr[i + 1] === '2' ||
        arr[i] === '3' && arr[i + 1] === '4' ||
        arr[i] === '5' && arr[i + 1] === '6' ||
        arr[i] === '7' && arr[i + 1] === '7' ||
        arr[i] === '8' && arr[i + 1] === '8') {
        if (arr[i] == '(' && arr[i + 1] == ')') {
          arr.splice(i, 2)
          res(arr)
        }
        if (arr[i] == '[' && arr[i + 1] == ']') {
          arr.splice(i, 2)
          res(arr)
        }
        if (arr[i] == '{' && arr[i + 1] == '}') {
          arr.splice(i, 2)
          res(arr)
        }
        if (arr[i] == '|' && arr[i + 1] == '|') {
          arr.splice(i, 2)
          res(arr)
        }
        if (arr[i] == '1' && arr[i + 1] == '2') {
          arr.splice(i, 2)
          res(arr)
        }
        if (arr[i] == '3' && arr[i + 1] == '4') {
          arr.splice(i, 2)
          res(arr)
        }
        if (arr[i] == '5' && arr[i + 1] == '6') {
          arr.splice(i, 2)
          res(arr)
        }
        if (arr[i] == '7' && arr[i + 1] == '7') {
          arr.splice(i, 2)
          res(arr)
        }
        if (arr[i] == '8' && arr[i + 1] == '8') {
          arr.splice(i, 2)
          res(arr)
        }
      }
    }

    return arr.length === 0 ? true : false
  }
}