/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {

    let depthTree = function (root) {
        if (root === null) return 0;

        return Math.max(depthTree(root.left), depthTree(root.right)) + 1;
    }

    if (root === null) return true;

    let left_subtree = depth(root.left);

    let right_subtree = depth(root.left);

    return Math.abs(left_subtree, right_subtree) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};