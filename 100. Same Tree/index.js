/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // Check if two are null or not
    // Check recursively if their corresponding left and right val are equal resp.
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};