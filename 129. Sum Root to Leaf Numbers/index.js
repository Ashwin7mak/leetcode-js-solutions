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
var sumNumbers = function (root) {

    // Helper function to calculate sum of root to leaf
    const sumOfTree = (root, sum) => {
        if(root == null)
            return 0;

        // Sum of root val and sum * 10 for every level of the tree 
        // i.e. 1->2->3  = (0 + 1) + (1*10 + 2) + (12*10 + 3)
        sum = (sum * 10 + root.val);

        // Check if the node is leaf or not
        if(root.left == null && root.right == null) {
            return sum;
        }

        // Recursively calculate the sum of both left and right subtree
        return sumOfTree(root.left, sum) + sumOfTree(root.right, sum); 
    }

    return sumOfTree(root, 0);
}