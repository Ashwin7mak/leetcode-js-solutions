/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    //if(grid.length == 0 || grid == null) return;

    let count = 0;

    let row = grid.length, col = grid[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 1) {
                //count++;
                count = Math.max(count, calculateIsland(i, j, grid));
            }
        }
    }

    return count;
};

// CalculateIsland
let calculateIsland = (row, col, grid) => {

    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length
        || grid[row][col] == 0) { return 0; }

    if (grid[row][col] == 1) {
        count = 1;
        grid[row][col] = 0;
        count += calculateIsland(row - 1, col, grid);    // Top
        count += calculateIsland(row + 1, col, grid);    // Bottom
        count += calculateIsland(row, col - 1, grid);    // Left
        count += calculateIsland(row, col + 1, grid);    // Right   
    }

    return count;

} 