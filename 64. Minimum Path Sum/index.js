/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    // Check if the grid is empty
    if (m == 0 || n == 0) return 0;

    // SubProblem: grid[m][n] = grid[m - 1][n] + grid[m][n - 1];
    for (let i = 1; i < m; i++) {
        grid[i][0] = grid[i - 1][0];
    }

    for (let j = 1; j < n; j++) {
        grid[0][j] = grid[0][j] + grid[0][j - 1];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
        }
    }

    return grid[m - 1][n - 1];
};