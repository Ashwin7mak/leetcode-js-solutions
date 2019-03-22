var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            // Remove only the element that is equal to the val
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
};