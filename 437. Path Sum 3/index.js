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
 * @return {number}
 */
/* Iterative Approach 

    - Idea, injecting node, PathSum, array of nodes in the path and hash
    - Similar to subarray of sum k problem,
    - Checking at the each iteration if there is a matching sum 
*/
var pathSum = function (root, sum) {

    if (!root) return 0;

    let result = 0;

    let stack = [];
    stack.push([root, root.val, [root.val], { '0': 1 }]);

    while (stack.length > 0) {

        let [node, pathSum, temp, hash] = stack.pop();

        if (hash[pathSum - sum] !== undefined) {
            result += hash[pathSum - sum];
        }


        let tempHash = Object.assign({}, hash);
        if (tempHash[pathSum] === undefined) {
            tempHash[pathSum] = 1;
        } else {
            tempHash[pathSum]++;
        }


        if (node.left) {
            let currPath = [...temp];
            currPath.push(node.left.val);

            stack.push([node.left, pathSum + node.left.val, currPath, tempHash]);
        }

        if (node.right) {
            let currPath = [...temp];
            currPath.push(node.right.val);

            stack.push([node.right, pathSum + node.right.val, currPath, tempHash]);
        }
    }
    return result;
};

/* Recursive Approach */
const pathSum = function(root, sum) {

    let count = 0;

    const check = function(root, sum) {
        if(root) {
            if(root.val === sum) 
                count++;
            
            check(root.left, sum - root.val);
            check(root.right, sum - root.val);
        }
    }

    const tree = function(root) {
        if(root) {
            check(root, sum);
            tree(root.left);
            tree(root.right);
        }
    }

    tree(root);
    return count;
}