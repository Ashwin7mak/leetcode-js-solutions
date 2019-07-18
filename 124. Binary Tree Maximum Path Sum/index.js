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
var maxPathSum = function (root) {

    // Let max to negative max val
    let max = -Number.MAX_VALUE;

    // Helper function 
    function getMaxSum(node) {
        if (node == null) return 0;
        // Calculate max in the left subtree
        let leftMax = Math.max(0, getMaxSum(node.left));
        // Calculate max in the right subtree
        let rightMax = Math.max(0, getMaxSum(node.right));
        // Calculate max of both subtrees
        let maxNode = Math.max(leftMax, rightMax);
        // Max of one subtree, ie. root, left, right 
        max = Math.max(max, leftMax + rightMax + node.val);
        // Returning one subtree with root, ie. root + left or root + right
        return maxNode + node.val;
    }

    getMaxSum(root);
    return max;
};