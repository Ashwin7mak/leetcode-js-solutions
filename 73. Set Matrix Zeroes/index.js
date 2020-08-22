/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 /* 
    Use a variable isZero to track the 0s 

    Iterate through the matrix,
        If 0 is encountered in the first col, set isZero = 0
        Iterate through the rows starting from 1 to n
            If matrix[i][j] = 0, assign 0 to the first row and first col
            
    Iterate through the matrix in bottom-up approach
        If 0 is encountered, set the remaining rows and cols to 0

        Check if isZero is 0, if so set all the elements in the first col to 0
    
        TC - O(m * n)
        SC - O(1)
 */
var setZeroes = function (matrix) {

    let isZero = 1;

    let m = matrix.length, n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) isZero = 0;

        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j > 0; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (isZero === 0) matrix[i][0] = 0;
    }
    return matrix;
};


/* 
    Iterate through the matix,
        If 0 is encountered,
            Mark all the non-zero elements in the same row and same col into "*"

    Iterate through the matrix,
        Now, change all marked '*' cells into 0

    TC - O(mn * (m + n))
    SC - O(1)
*/

var setZeroes = function (matrix) {

    if (!matrix || matrix.length === 0) return;

    let m = matrix.length, n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                for (let k = 0; k < m; k++) {
                    if (matrix[k][j] !== 0)
                        matrix[k][j] = '*';
                }

                for (let l = 0; l < n; l++) {
                    if (matrix[i][l] !== 0)
                        matrix[i][l] = '*';
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '*') {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};
