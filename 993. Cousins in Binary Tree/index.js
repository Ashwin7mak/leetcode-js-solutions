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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
/* 
    BFS Approach
    - We are scanning level by level as we traverse
    - Use two variables for boolean check
    - For a given node with possible left and right node val (Sibling Check)
        - Check if node.left.val && node.right.val are not x and y and vice versa, returns false
    - Whenever if node.val is found, update the corresponding boolean val
    - Check if both the booleans are true, if so return true
    
    TC - O(n)
    SC - O(n)
*/
var isCousins = function(root, x, y) {
    
    if(!root || root === null)
        return true;
    
    let queue = [root];
    
    while(queue.length > 0) {
        
        let size = queue.length;
        
        let foundX = false, foundY = false;
        
        for(let i = 0; i < size; i++) {
            
            let node = queue.shift();
            
            if(node.left && node.right) {
                if((node.left.val === x && node.right.val === Y) || (node.left.val === y && node.right.val === x))
                    return false;
            }
        
            if(node.val === x) foundX = true;
            if(node.val === y) foundY = true;

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);  
        }
        
        if(foundX && foundY) return true;
    }
    
    return false;
    
};