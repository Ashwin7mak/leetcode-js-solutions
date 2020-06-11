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

/* Recursive Approach */
function isSymmetric(root) {
    if(root === null) return true;

    return isMirror(root.left, root.right);

    function isMirror(s, t) {
        if(!s && !t) return true;

        if(!s || !t || s.val !== t.val) return false;

        return isMirror(s.left, t.right) && isMirror(s.right, t.left);
    }
} 

/* Iterative Approach */

function isSymmetric(root) {
    if(root === null) return true;

    return isMirror(root.left, root.right);

    function isMirror(s, t) {
        let arr1 = [s], arr2 = [t];

        while(arr1.length > 0 || arr2.length > 0) {
            let node1 = arr1.pop();
            let node2 = arr2.pop();

            if(!node1 && !node2) continue;

            if (!node1 || !node2 || node1.val !== node2.val) {
                return false;
            }

            arr1.push(node1.left);
            arr1.push(node1.right);
            arr2.push(node2.right);
            arr2.push(node2.left);
        }
        return true;
    }
}


