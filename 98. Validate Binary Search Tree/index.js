var isValidBST = function (root) {
    if (!root)
        return true;
    return isBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

    // isBST function 
    function isBST(root, min, max) {
        if (!root)
            return true;

        // Condition for BST is Min <= Root.val <= Max 
        if (root.val <= min || root.val >= max) {
            return false;
        }
        // Recursive check for the left_subtree and right_subtree
        return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
    }

};