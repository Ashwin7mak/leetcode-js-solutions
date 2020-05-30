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

// Two Pointers Approach
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length === 0 || !nums) return;
    // Initializing count pointer to 0 
    let count = 0;
    // Iterate through the nums
        // If nums[i] is not 0, then assign nums[count] = nums[i]
        // Increment the counter
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[count++] = nums[i];
        }
    }
    // Second Iteration starting from count
        // Assign the rest to 0s as we got the zeroes moved to the end
    for (let i = count; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};