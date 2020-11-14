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
 * @return {number}
 */
/* 
    DFS Iteartive Approach
    - Check the depth at the leaf nodes
        - Return min depth 
    
    TC - O(n)
    SC - O(n)
*/

var minDepth = function(root) {
    
    if(root === null) return 0;
    
    let stack = [[root, 1]];
    
    let minDepth = Infinity;
    
    while(stack.length > 0) {
        
        let [node, depth] = [...stack.pop()];
        
        if(node.left === null && node.right === null) {
            if(minDepth > depth)
                minDepth = depth;
        }
    
        if(node.left) stack.push([node.left, depth + 1]);
        
        if(node.right) stack.push([node.right, depth + 1]);
    }
    return minDepth;
};

/*
    Recursive Approach
*/
var minDepth = function (root) {
    if (root === null) return 0;

    if (root.length == 2) return 1;

    let left_depth = minDepth(root.left);
    let right_depth = minDepth(root.right);
    return (left_depth == 0 || right_depth == 0) ? left_depth + right_depth + 1 : Math.min(left_depth, right_depth) + 1;
};