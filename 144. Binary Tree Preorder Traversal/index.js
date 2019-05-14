/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    //  Order of traversal Root, Left and Right
    let nodes = [];
    // Traverse function 
    const traverse = node => {
        if (node) {
            nodes.push(node.val);

            if (node.left) traverse(node.left);

            if (node.right) traverse(node.right);
        } else {
            return;
        }
    }
    traverse(root);
    return nodes;
};