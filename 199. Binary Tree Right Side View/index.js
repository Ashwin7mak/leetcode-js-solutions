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
 * @return {number[]}
 */

// BFS approach
// Return the last element at each level
var rightSideView = function (root) {

    if (!root || root === null) return [];

    let result = [];

    let queue = [];

    queue.push([root, 0]);

    while (queue.length > 0) {
        let size = queue.length;

        let temp = [];

        for (let i = 0; i < size; i++) {
            let [node, depth] = [...queue.shift()];

            temp.push(node.val);

            if (node.left) queue.push([node.left, depth + 1]);

            if (node.right) queue.push([node.right, depth + 1]);
        }
        result.push(temp[temp.length - 1]);
    }

    return result;
};