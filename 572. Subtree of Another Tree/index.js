/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    // Check if given tree S is empty or not
    if (s === null) return false;
    // Use helper function to detect if two given trees are identical or not
    const areIdentical = function (root1, root2) {
        // Check if both the roots are not null
        if (root1 === null && root2 === null) {
            return true;
        }
        // Check if only one of the roots is null
        if (root1 === null || root2 === null) {
            return false;
        }
        // Check if the root values are same
        if (root1.val !== root2.val) {
            return false;
        }
        // recusively check for the left and right subtrees 
        return areIdentical(root1.left, root2.left) && areIdentical(root1.right, root2.right);
    }
    
    if (areIdentical(s, t)) return true;

    return isSubtree(s.left, t) || isSubtree(s.right, t);
};