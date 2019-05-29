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
 * @return {number[][]}
 */
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