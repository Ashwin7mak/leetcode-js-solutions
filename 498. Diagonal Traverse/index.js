/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/* 
    Total no. of diagonals in a matrix of size(m * n) = m + n - 1
    Let us create a 2D matrix of size (m + n - 1)
    Since, the diagonal elements are traversed in both the directions(upwards and downwards), let us use a variable key to track the directions.
    Flatten the 2D matrix to get the result
    TC: O(m * n)
    SC: O(m * n)
*/
var findDiagonalOrder = function (matrix) {

    if (!matrix || !matrix.length) return [];

    let m = matrix.length, n = matrix[0].length;

    let result = new Array(m + n - 1).fill(0).map(_ => []);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let key = i + j;

            if (key % 2 === 0) {
                result[key].unshift(matrix[i][j]);
            } else {
                result[key].push(matrix[i][j]);
            }
        }
    }
    return result.flat();
};