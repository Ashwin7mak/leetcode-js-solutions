/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    // Top down approach
    // Going through each and every node on left_subtree and checking if the path is equal to the given sum
    // Check if root is null, return false
    // Check if root is equal to 0 with root.left and root.right is null, return true
    // Check recursively over the root.left and root.right adding up to sum (ie. sum - root.val )
    if (root == null) {
        return false;
    } else if (root.left == null && root.right == null && sum - root.val == 0) {
        return true;
    } else {
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
};