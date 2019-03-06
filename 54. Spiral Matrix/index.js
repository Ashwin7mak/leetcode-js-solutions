var spiralOrder = function (matrix) {
    
    // Check if the given matrix is of m * n elements
    if (!matrix.length && !matrix[0].length) return [];

    let result = [];
    let rowBegin = 0, colBegin = 0,
        rowEnd = matrix.length - 1, colEnd = matrix[0].length - 1;

    while(rowBegin <= rowEnd && colBegin <= colEnd) {

        // Move right
        for(let i = colBegin; i <= colEnd; i++) {
            result.push(matrix[rowBegin][i]);
        }
        rowBegin++;

        // Move down
        for(let i = rowBegin; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd]);
        }
        colEnd--;

        // Move left
        if (rowBegin <= rowEnd) {
            for(let j = colEnd; j >= colBegin; j--) {
                result.push(matrix[rowEnd][j]);
            }
        }
        rowEnd--;

        // Move top  
        if (colBegin <= colEnd) {
            for(let j = rowEnd; j >= rowBegin; j--) {
                result.push(matrix[j][colBegin]);
            }
        }
        colBegin++;
    }
    console.log("--", result);
    return result;
};


spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]);