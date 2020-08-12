/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

/* Bfs approach */
//Calculate the horizontal distance hd from root to all the nodes
// Use an hashmap to store, hd as the key and node value as the values
// After performing bfs, we can see the left most child with min hd and right most child with max hd.
// Sort the keys of hash in ascending order
// Return the values in an array

var verticalOrder = function (root) {
    
    if (!root || root === null) return [];

    let hash = {};

    let queue = [];

    queue.push([root, 0]);

    while (queue.length > 0) {
        let [node, hd] = [...queue.shift()];

        if (hash[hd] === undefined) {
            hash[hd] = [node.val];
        } else {
            hash[hd].push(node.val);
        }


        if (node.left) queue.push([node.left, hd - 1]);

        if (node.right) queue.push([node.right, hd + 1]);

    }

    let result = [];

    let keys = Object.keys(hash).sort((a, b) => a - b);

    for (let items of keys) {
        result.push(hash[items]);
    }

    return result;
};