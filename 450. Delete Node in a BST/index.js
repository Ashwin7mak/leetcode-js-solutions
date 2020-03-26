/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (root == null) return root;

    // Check if the node is the leaf node
    // Check if the node has a children (just one child)
    // Check if the node is the parent of two nodes
    // replace it with its successor

    // Check if the key is on left subtree
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    }
    // Check if the key is on right subtree
    else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    // Check if the root has the key
    else {

        if (root.left == null) return root.right;
        if (root.right == null) return root.left;

        // Case 3: Check if the node is the parent of two nodes
        // left most child in the right subtree is its successor
        let current = root.right;
        while (current.left) {
            current = current.left;
        }
        current.left = root.left;
        return root.right;

    }

    return root;
};