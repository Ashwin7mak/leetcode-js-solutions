/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!inorder.length) {
        return null;
    }
    // Assigning first element in preorder as the root
    let node = preorder.shift();

    let root = new TreeNode(node);
    // Finding index of the root in Inorder
    let index = inorder.indexOf(root.val);
    // divide the inorder list into left side
    root.left = buildTree(preorder, inorder.slice(0, index));
    // divide the inorder list into right side
    root.right = buildTree(preorder, inorder.slice(index + 1));

    return root;
};