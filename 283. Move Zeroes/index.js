var moveZeroes = function (nums) {
    for (let i = nums.length; i--;) {
        if (nums[i] == 0) {
            // Remove only the element that is equal to the val
            nums.splice(i, 1);
            nums.push(0);
        }
    }

    return nums;
};