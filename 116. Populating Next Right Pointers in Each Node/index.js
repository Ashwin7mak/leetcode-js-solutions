/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
/*
    BFS Iterative Approach
    - Set the next pointers to the next node in the right, for right most node set the next pointer to null
    - Return root

    TC - O(n)
    SC - O(n)
*/

var connect = function(root) {
    
    if(!root) return null;
    
    let queue = [root];
 
    while(queue.length > 0) {
        
        let size = queue.length;
        
        let prevNode = null;
        
        for(let i = 0; i < size; i++) {
            let node = queue.shift();

            if(i === size - 1) { 
                node.next = null;
            }
            
            if(prevNode)
                prevNode.next = node
            
            if(node.left) queue.push(node.left);

            if(node.right) queue.push(node.right);
            
            prevNode = node;
        }
    }
    return root;
};