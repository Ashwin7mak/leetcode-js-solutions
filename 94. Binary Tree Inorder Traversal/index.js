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
var inorderTraversal = function (root) {
    let nodes = [];

    const traverse = node => {

        if (node) {
            if (node.left) traverse(node.left);

            nodes.push(node.val);

            if (node.right) traverse(node.right);
        } else {
            return;
        }

    }
    traverse(root);
    return nodes;
};