/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
/* BFS Approach */
// We can interpret that the distance of the nearest 0 from any cell of 0s is 0
// We need to find the distance of the nearest 0 from any cell of 1s using BFS 

// Iterate through the matrix
// Whenever 0 is encountered, push into the queue along with its coordinates and dist (dist = 0 for cell of 0s)
// Use visited matrix to track the visited and unvisited cells

// Do bfs on the cells of 0s
    // Whenever 1 is encountered as the neighbor, assign dist as dist + 1
    // Update matrix with the coordinates and dist

var updateMatrix = function (matrix) {

    if (!matrix || matrix.length === 0) return [];

    let m = matrix.length, n = matrix[0].length;

    let queue = [];

    let visited = new Array(m).fill(false).map(() => new Array(n).fill(false));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                queue.push([i, j, 0]);  // 0 - Distance of the nearest 0
                visited[i][j] = true;
            }

        }
    }

    while (queue.length > 0) {
        let [x, y, dist] = [...queue.shift()];

        matrix[x][y] = dist;

        for (let [i, j] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) {

            if (i >= 0 && i < m && j >= 0 && j < n && visited[i][j] === false) {
                queue.push([i, j, dist + 1]);
                visited[i][j] = true;
            }
        }
    }
    return matrix;
};