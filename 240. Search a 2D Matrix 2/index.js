/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/*
    Each row and col are sorted accordingly

    Start from top right corner, 
        if target > right corner, row++
        else if target < right corner, col--;
*/

var searchMatrix = function (matrix, target) {

    if (!matrix || matrix.length < 1 || matrix[0].length < 1) return false;

    let row = 0, col = matrix[0].length - 1;

    while (col >= 0 && row <= matrix.length - 1) {

        if (target === matrix[row][col]) return true;

        else if (target > matrix[row][col]) {
            row++;
        }
        else if (target < matrix[row][col]) {
            col--;
        }

    }

    return false;
};
