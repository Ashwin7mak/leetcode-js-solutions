/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    if (nums.length === 0 || nums == null) return;
    // Sort the nums
    nums.sort((a, b) => {
        return a - b;
    });
    
    return nums[nums.length - k];
};