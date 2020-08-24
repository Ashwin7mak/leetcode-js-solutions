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
 * @return {number[][]}
 */
/* Iterative Approach 
    - Injecting node, node.val and array of elements in the path
    - Check if there is a path from root to leaves, if so push the array in the result
*/
var pathSum = function (root, sum) {

    if (!root) return [];

    let result = [], stack = [];

    stack.push([root, root.val, [root.val]]);

    while (stack.length > 0) {

        let [node, pathSum, temp] = stack.pop();

        if (!node.left && !node.right) {
            if (pathSum === sum) {
                result.push(temp);
            }
        }

        if (node.left) {
            let currPath = [...temp];
            currPath.push(node.left.val);
            stack.push([node.left, pathSum + node.left.val, currPath]);
        }

        if (node.right) {
            let currPath = [...temp];
            currPath.push(node.right.val);
            stack.push([node.right, pathSum + node.right.val, currPath]);
        }
    }
    return result;
};

/* Recursive Approach */
var pathSum = function (root, sum) {
    return findPaths(root, sum, [], []);
};

const findPaths = function (root, sum, current, paths) {
    if (root == null) {
        return paths;
    }

    current.push(root.val);

    if (root.val == sum && root.left == null && root.right == null) {
        paths.push(current.slice());
    }

    findPaths(root.left, sum - root.val, current, paths);
    findPaths(root.right, sum - root.val, current, paths);

    current.pop();

    return paths;

}