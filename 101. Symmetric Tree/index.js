var isSymmetric = function (root) {

    let checkTree = function (left_subtree, right_subtree) {
        // Check if left_subtree and right_subtree are not null
        if (left_subtree == null && right_subtree == null) {
            return true;
        }
        // Else if left_subtree and right_subtree exists
        else if (left_subtree != null && right_subtree != null) {
            // Check if left_subtree.data == right_subtree.data
            // left_subtree.left == right_subtree.right 
            // left_subtree.right == right_subtree.left
            return left_subtree.val == right_subtree.val &&
                checkTree(left_subtree.left, right_subtree.right) &&
                checkTree(left_subtree.right, right_subtree.left);
        }
        return false;
    }

    // Check if the root is null or checkFunction of both left_subtree and right_subtree
    return root == null || checkTree(root.left, root.right);

};

