/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    // let min is equal to the root val
    let minVal = root.val;
    // Let result be MAX_SAFE_INTEGER
    let result = Number.MAX_SAFE_INTEGER;

    // Perfrom DFS recursively
    const dfs = (node) => {
        if (!node) return;
        // If node val is equal to minVal, keep fighting the minVal
        if (node.val === minVal) {
            dfs(node.left);
            dfs(node.right);
        }
        // Find second Min Val ie. node val > minVal && node val < result
        else if (node.val > minVal && node.val < result) {
            // Assign result to node val
            result = node.val;
        }
    }

    dfs(root);
    // Check if we find the Second Min Val else return -1
    return result == Number.MAX_SAFE_INTEGER ? -1 : result;
};