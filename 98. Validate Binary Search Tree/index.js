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

/* Iterative Approach */
// Checking if the given tree can be presented in Inorder Traversal and check if the nodes are in increasing order or not

function isValidBST(root) {
    if(root === null) return true;

    let result = [];

    let minVal = -Infinity;

    while(result.length > 0 || root !== null) {
        if(root !== null) {
            result.push(root);
            root = root.left;
        } else {
            root = result.pop();
            if(root.val <= minVal) {
                return false;
            }
            minVal = root.val;
            root = root.right;
        }
    }
    return true;
}
