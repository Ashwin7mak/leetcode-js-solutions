/**
 * @param {number[][]} grid
 * @return {number}
 */

// BFS approach
// Push the rotten oranges in the queue, count with 0
// Keep visiting untill all fresh oranges are met
// Else return -1
var orangesRotting = function (grid) {

    if (!grid || grid.length === 0) return -1;

    let m = grid.length, n = grid[0].length;

    let queue = [];
    
    let fresh = 0;

    let res = 0;

    let visited = new Array(m).fill(false).map(() => new Array(n).fill(false));


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
                visited[i][j] = true;
            }
            else if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }

    while (queue.length > 0) {

        let [x, y, count] = [...queue.shift()];

        res = Math.max(res, count);
        for (let [i, j] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) {

            if (i >= 0 && i < m && j >= 0 && j < n && visited[i][j] == false && grid[i][j] === 1) {
                fresh -= 1;
                visited[i][j] = true;
                queue.push([i, j, count + 1]);
            }
        }
    }
    return fresh === 0 ? res : -1;
};