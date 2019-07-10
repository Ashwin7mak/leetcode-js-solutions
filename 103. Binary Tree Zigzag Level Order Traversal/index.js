/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let result = [];

    let queue = [];

    let dir = 1;
    // Push the root into the queue array
    if (root) queue.push(root);
    console.log("Root", root);
    // Only if length of queue array is greater than 0
    while (queue.length > 0) {
        let len = queue.length;
        // Temp array to maintain the array of arrays
        let current = [];
        for (let i = 0; i < len; i++) {

            if (dir == 1) {
                // Pushing the current Node(root) into the current array
                // Then left and the right nodes resp.
                let currentNode = queue.shift();

                current.push(currentNode.val);

                if (currentNode.left) {
                    queue.push(currentNode.left);
                }

                if (currentNode.right) {
                    queue.push(currentNode.right);
                }
            } else {
                // Pushing the current Node(root) into the current array
                // Then left and the right nodes resp.
                let currentNode = queue.pop();

                current.push(currentNode.val);

                if (currentNode.right) {
                    queue.unshift(currentNode.right);
                }

                if (currentNode.left) {
                    queue.unshift(currentNode.left);
                }
            }

        }

        result.push(current);
        dir *= -1;
    }

    return result;
};