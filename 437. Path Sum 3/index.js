

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