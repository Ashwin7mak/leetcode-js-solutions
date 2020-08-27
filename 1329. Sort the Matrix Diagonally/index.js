/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

/*
    - In this case, all diagonal elements differ by i - j = 0

    - Iterate through the matrix
        Put the difference between i, j as the key in the hash

    - Now sort the values in the hash based upon keys
    - Assign it back to the places which is in sorted order
*/
var diagonalSort = function (mat) {

    let hash = {};

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            let d = i - j;
            if (hash[d] === undefined) {
                hash[d] = [];
            }

            hash[d].push(mat[i][j]);
        }
    }

    for (let nums in hash) {
        hash[nums].sort((a, b) => a - b);
    }

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            let d = i - j;
            if (hash[d] !== undefined) {
                mat[i][j] = hash[d].shift();
            }
        }
    }
    return mat;
};

