/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // Check if root is null, return null
    if (!root)
        return null;
    // Check if root is either of left or right values, return root
    if (root == p || root == q)
        return root;

    // Perform recursive search on the left_subtree and right_subtree
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // If left is empty, return right and vice versa
    if (!left)
        return right;

    if (!right)
        return left;

    return root;
};