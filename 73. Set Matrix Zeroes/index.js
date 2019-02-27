var setZeroes = function (matrix) {
    var solution = [];
    for (var i = 0; i < matrix.length; ++i) { // step 1
        for (var j = 0; j < matrix[i].length; ++j) {
            if (matrix[i][j] === 0) {
                solution.push(i);
                solution.push(j);
            }
        }
    }
    console.log("-", solution);
    for (var k = 0; k < solution.length; ++k) { // step 2
        for (j = 0; j < matrix[solution[k]].length; ++j) {
            matrix[solution[k]][j] = 0;
        }
        for (i = 0; i < matrix.length; ++i) {
            matrix[i][solution[k + 1]] = 0;
        }
        ++k;
    }
    return matrix;
};