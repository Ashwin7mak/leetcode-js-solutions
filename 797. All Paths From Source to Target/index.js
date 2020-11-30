/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    // Two arrays one to track the result and other for path
    let result = [];
    let path = [];
    // Push the first element into path
    path.push(0);

    dfsRecursion(0);

    function dfsRecursion(node) {
        // Check if node is same as the graph length
        // If so push the path into the result
        if(node == graph.length - 1) {
            result.push(path.slice(0));
        } else
        // Iterate over the elements in graph i.e. nextNode
        // Push nextNode into path
        // Recursively call nextNode in the dfsRecursion
        // Untill path is popped to 0
        {
            for(let nextNode of graph[node]) {
                path.push(nextNode);
                dfsRecursion(nextNode);
                path.pop();
            }
        }
    }
    return result;
}
