/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

    if (nums.length === 0 || !nums) return [];

    if (nums.length === 1) return nums;

    let left = 0, right = nums.length - 1;

    for (let i = 0; i <= right; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
        } else if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
            i--;
        }
    }
    return nums;
};