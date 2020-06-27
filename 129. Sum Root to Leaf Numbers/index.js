/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {

    // Helper function to calculate sum of root to leaf
    const sumOfTree = (root, sum) => {
        if(root == null)
            return 0;

        // Sum of root val and sum * 10 for every level of the tree 
        // i.e. 1->2->3  = (0 + 1) + (1*10 + 2) + (12*10 + 3)
        sum = (sum * 10 + root.val);

        // Check if the node is leaf or not
        if(root.left == null && root.right == null) {
            return sum;
        }

        // Recursively calculate the sum of both left and right subtree
        return sumOfTree(root.left, sum) + sumOfTree(root.right, sum); 
    }

    return sumOfTree(root, 0);
}

/* Iterative Approach */

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
 * @return {number}
 */
var sumNumbers = function (root) {
    if (!root || root === null) return 0;
    let totalSum = 0;
    let queue = [];
    // Pushing both root and value 
    queue.push([root, 0]);

    while (queue.length > 0) {
        let node = queue.pop();

        let item = node[0];
        let value = node[1];

        if (item !== null) {
            // 1-> 2 = 12 ; 1->2->4 = 123
            value = (value * 10 + item.val);

            if (!item.left && !item.right) {
                totalSum += value;
            }

            if (item.left) queue.push([item.left, value]);

            if (item.right) queue.push([item.right, value]);
        }
    }

    return totalSum;
};