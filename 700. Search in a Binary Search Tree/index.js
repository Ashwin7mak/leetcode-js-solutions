/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {

    if (root == null) {
        return [];
    }
    // Check if root is equal to val, return root
    // Else if root is greater than val, return recursively left node
    if (root.val == val) {
        return root;
    } else if (root.val > val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }

};


/* Iterative Approach */
const searchBST = function(root, val) {
    if(root == null) return null;

    if(root.val == val) return root;

    while (root == null && root.val != val) {
        root = val > root.val ? root.right : root.left;
    }
    return root;
}
