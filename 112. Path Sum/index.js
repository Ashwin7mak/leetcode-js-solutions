/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
/*
    DFS Iterative Approach
    - Injecting [root, root.val] in the stack
    - As we traverse down the tree, keep adding the path sum
    - Check at the leaf nodes, if the pathSum === sum, return true

    TC - O(n)
    SC - O(n)
*/
var hasPathSum = function(root, sum) {
    if(!root || root === null) return false;
    
    let stack = [[root, root.val]];
    
    while(stack.length > 0) {
        
        let [node, pathSum] = stack.pop();

        if(!node.left && !node.right)
            if(pathSum === sum)
                return true;
        
        if(node.left) stack.push([node.left, pathSum + node.left.val]);

        if(node.right) stack.push([node.right, pathSum + node.right.val]);
    }
    return false;
};

/*
    DFS Recursive Approach
*/
var hasPathSum = function (root, sum) {
    // Top down approach
    // Going through each and every node on left_subtree and checking if the path is equal to the given sum
    // Check if root is null, return false
    // Check if root is equal to 0 with root.left and root.right is null, return true
    // Check recursively over the root.left and root.right adding up to sum (ie. sum - root.val )
    if (root == null) {
        return false;
    } else if (root.left == null && root.right == null && sum - root.val == 0) {
        return true;
    } else {
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
};