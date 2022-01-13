exports.min = function min(array) {
    console.log(typeof array)
    if (!array || !array.length) {
        return 0;
    } else {
        return Math.min(...array)
    }
}

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        return Math.max(...array)
    }
}

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        return array.reduce((a, b) => (a + b)) / array.length;
    }
}
