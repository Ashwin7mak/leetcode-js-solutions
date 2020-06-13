/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {

    if (!tickets) return;

    let locations = {};

    for (let [src, des] of tickets) {
        if (!locations[src]) {
            locations[src] = [];
        }
        locations[src].push(des);
    }

    // Sort them lexicographically
    for (let cities in locations) {
        locations[cities].sort();
    }

    let result = [];

    dfs('JFK');
    return result.reverse();

    // DFS
    function dfs(node) {
        let cities = locations[node] || [];

        while (cities.length > 0) {
            dfs(cities.shift());
        }
        result.push(node);
    }

};