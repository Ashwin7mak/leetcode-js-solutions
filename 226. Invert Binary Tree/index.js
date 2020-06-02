/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root) {
        let invert = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(invert);
    }
    return root;
};

/* Iterative Approach */
var invertTree = function(root) {
    if (root === null) return null;

    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let node = queue.shift();

        let temp = node.left;
        node.left = node.right;
        node.right = temp;

        if (node.left) queue.push(node.left);

        if (node.right) queue.push(node.right);
    }
    return root;
}