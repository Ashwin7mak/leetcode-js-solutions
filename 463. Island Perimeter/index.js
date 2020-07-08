/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    if (!grid || grid.length == 0) return 0;

    let m = grid.length, n = grid[0].length;
    let count = 0;

    // Iterate through grid
        // Once land or '1' is found, result + 4
            // Check if left and top cells are 1, if so result - 2 every time
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                count += 4;

                if (i > 0 && grid[i - 1][j] == 1)
                    count -= 2;

                if (j > 0 && grid[i][j - 1] == 1)
                    count -= 2;
            }
        }
    }
    return count;
};