/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {

    // DepthTree function to find the Max depth of the Sub trees
    let depthTree = function (root) {
        if (root === null) return 0;

        let left_subtree = depthTree(root.left);

        let right_subtree = depthTree(root.right);
        // Check for the actual balanced tree |left_subtree - right_subtree| < 1
        if (left_subtree == -1 || right_subtree == -1 || Math.abs(left_subtree - right_subtree) > 1) {
            return -1;
        }

        return Math.max(left_subtree, right_subtree) + 1;
    }
    console.log("YESSS", depthTree(root));
    // Check if the depthTree function returns 1 value
    return depthTree(root) !== -1;
};