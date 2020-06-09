var maxDepth = function (root) {
    if (root === null) return 0;

    let left_depth = maxDepth(root.left);
    let right_depth = maxDepth(root.right);
    return Math.max(left_depth, right_depth) + 1;
};


/** Iterative Approach */
var maxDepth = function (root) {

    if (root == null) return 0;

    let maxVal = -1;

    let stack = [];

    stack.push([root, 1]);

    while (stack.length !== 0) {

        let node = stack.pop();
        let item = node[0];
        let depth = node[1];

        if (maxVal < depth) {
            maxVal = depth;
        }

        if (item.left !== null) stack.push([item.left, depth + 1]);

        if (item.right !== null) stack.push([item.right, depth + 1]);

    }
    return maxVal;
};