/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {

    let str = "";
    // serializeHelper function to recursively segregate the trees into string
    // In preorder traversal ie., root -> left -> right
    const serializeHelper = function (root) {
        if (!root) {
            str += "null,";
        } else {
            str += root.val + ",";
            serializeHelper(root.left);
            serializeHelper(root.right);
        }
    }

    serializeHelper(root);
    return str;

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    // Split given string of characters based on commas
    let nodes = data.split(",");

    // deserializeHelper function
    const deserializeHelper = function () {
        // Shift the nodes elements
        let val = nodes.shift();
        // Look for the root
        // Recursively construct the left and right subtrees
        if (val === "null") {
            return null;
        } else {
            let root = new TreeNode(val);
            root.left = deserializeHelper();
            root.right = deserializeHelper();
            return root;
        }
    }

    return deserializeHelper(data);

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */