/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {

    let nodes = [];
    // Inorder Treetraversal
    const traverse = node => {
        if (!node) return;

        traverse(node.left);

        nodes.push(node.val);
        // Check if nodes length is equal to the element, then return it
        if (nodes.length === k) return;

        traverse(node.right);
    }
    traverse(root);
    return nodes[k - 1];

};