/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    // Convert matrix list into adj list
    let graph = {};

    let m = M.length, n = M[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (M[i][j] === 1) {
                if (graph[i] === undefined)
                    graph[i] = [];

                // if(graph[j] === undefined)
                //     graph[j] = [];

                graph[i].push(j);
                // graph[j].push(i);
            }

        }
    }

    // console.log("GRAP", graph);

    let visited = new Array(m).fill(false);
    let count = 0;

    // Find no of connected components, perform DFS 
    for (let i = 0; i < m; i++) {
        if (visited[i] === false) {
            // console.log("ii", i);
            let stack = [i];
            count += 1;
            visited[i] = true;

            while (stack.length > 0) {

                let node = stack.pop();

                if (graph[node]) {

                    for (let neighbor of graph[node]) {
                        if (visited[neighbor] === false) {
                            stack.push(neighbor);
                            visited[neighbor] = true;
                        }
                    }
                }
            }
        }
    }

    return count;
};