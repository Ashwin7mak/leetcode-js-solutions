/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];

    bfs("", 0, 0);

    return res;
    
    // Helper funtion taking in str, left and right parameters
    function bfs(str, left, right) {
        // Check if left and right length is n
        if (left === n && right === n) {
            // Push the str into res array
            res.push(str);
            return;
        }
        // Recursively iterate over the helper function untill left === n
        if (left !== n) {
            bfs(str + "(", left + 1, right);
        }
        // Recursively iterate over the helper function untill left > right
        if (left > right) {
            bfs(str + ")", left, right + 1);
        }

    }
};