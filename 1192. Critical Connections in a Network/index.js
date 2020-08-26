/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */



/*
    Removing one edge is able to create more than 1 component - Critical connection
    Connected graph = No of components is 1
    Disconnected graph = More than 1 components
    Critical connection = An edge whose removal transforms a connected graph to disconnected
*/

var criticalConnections = function (n, connections) {

    // Create graph with adj list
    let graph = {};

    for (let [a, b] of connections) {
        if (graph[a] === undefined) {
            graph[a] = [];
        }

        if (graph[b] === undefined) {
            graph[b] = [];
        }

        graph[a].push(b);
        graph[b].push(a);
    }

    let ids = new Array(n).fill(null);

    let lowLinks = new Array(n).fill(null);

    let label = 0;
    // Perfrom dfs
    function dfs(node, parent) {
        if (ids[node] === null) {
            ids[node] = label;
            lowLinks[node] = label;

            label += 1;

            if (graph[node]) {
                for (let neighbor of graph[node]) {
                    if (ids[neighbor] === null) {
                        dfs(neighbor, node);
                    }
                }
            }

            if (parent === null) {
                for (let neighbor of graph[node]) {
                    if (lowLinks[neighbor] < lowLinks[node]) {
                        lowLinks[node] = lowLinks[neighbor];
                    }
                }
            }
            // Parent not null
            else {
                for (let neighbor of graph[node]) {
                    if (neighbor !== parent && lowLinks[neighbor] < lowLinks[node]) {
                        lowLinks[node] = lowLinks[neighbor];
                    }
                }
            }
        }
    }

    dfs(0, null);

    // Bridge condition for edge a->b or a <- b: id[a] < low_link[b] or id[b] < low_link[a]
    let bridges = [];

    for (let [a, b] of connections) {
        if (ids[a] < lowLinks[b] || ids[b] < lowLinks[a]) {
            bridges.push([a, b]);
        }
    }

    return bridges;
};





