/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

 /*
    In Connected components, all the nodes are connected and can be traversed from any node.
    Perform dfs on each node, if there are still unvisited nodes, then they belong to another component
 */
var countComponents = function (n, edges) {

    // Create graph i.e. Adj list from the edges
    let graph = {};

    for (let [a, b] of edges) {
        if (graph[a] === undefined)
            graph[a] = [];

        if (graph[b] === undefined)
            graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }
    
    // Count to calculate the components
    let count = 0;

    let visited = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (visited[i] === false) {
            let stack = [];
            stack.push(node);
            visited[node] = true;
            while (stack.length > 0) {
                let item = stack.pop();
                if (graph[item]) {
                    for (let neighbors of graph[item]) {
                        if (visited[neighbors] === false) {
                            stack.push(neighbors);
                            visited[neighbors] = true;
                        }
                    }
                }
            }
            count++;
        }
    }
    return count;
};