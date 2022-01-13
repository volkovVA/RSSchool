module.exports = function towelSort (matrix) {
    if (matrix) {
        matrix.forEach((el, idx) => {
            idx % 2 !== 0 ? el.sort((a, b) => b - a) : el
        })
    } else {
        return []
    }
    
    return matrix.flat()
}
