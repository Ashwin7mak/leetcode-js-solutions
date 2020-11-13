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
 * @return {number[]}
 */
/*
    BFS Approach(Similar to level order traversal)
    
    TC - O(n), n is the total no of nodes in the tree
    SC - O(m), m is the size of the queue which can grow to the max of total no. of nodes in the tree
*/


var averageOfLevels = function(root) {
    
    if(!root || root === null) return [];
    
    let result = [];
    
    let queue = [root];
    
    while(queue.length > 0) {
        let size = queue.length;

        let sumOfNodes = 0, avg = 0;
        
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            sumOfNodes += node.val;

            if(node.left) queue.push(node.left);
            
            if(node.right) queue.push(node.right);
        }
        avg = sumOfNodes/size;
        result.push(avg);
    }
    return result;
};