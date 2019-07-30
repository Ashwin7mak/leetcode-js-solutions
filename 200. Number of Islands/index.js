/**
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = function (grid) {

    if (grid.length == 0 || grid == null) {
        return 0;
    }

    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // Check if the island is met
            if (grid[i][j] == '1') {
                // Increment the count
                count++;
                dft(grid, i, j);
            }
        }
    }
    return count;
};

let dft = function (grid, i, j) {
    // Check if the land lies outside the grid
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) {
        return 0;
    }

    // Check if it is a land
    // Recursively iterate the neighbor positions
    if (grid[i][j] === '1') {
        grid[i][j] = '0';

        dft(grid, i + 1, j);
        dft(grid, i - 1, j);
        dft(grid, i, j + 1);
        dft(grid, i, j - 1);
    }

}

