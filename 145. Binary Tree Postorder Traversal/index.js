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
var postorderTraversal = function (root) {
    let nodes = [];

    const traverse = node => {

        if (node) {
            if (node.left) traverse(node.left);

            if (node.right) traverse(node.right);

            nodes.push(node.val);

        } else {
            return;
        }
    }
    traverse(root);
    return nodes;
};