var minDepth = function (root) {
    if (root === null) return 0;

    if (root.length == 2) return 1;

    let left_depth = minDepth(root.left);
    let right_depth = minDepth(root.right);
    return (left_depth == 0 || right_depth == 0) ? left_depth + right_depth + 1 : Math.min(left_depth, right_depth) + 1;
};