/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    if (!nums || nums.length == 0) return -1;
    // Calculate two sums ie. from left side and right side
    // At one point, they both will meet at some i, return i
    let leftSum = 0;

    let rightSum = nums.reduce((val, i) => val + i, 0);

    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];

        if (rightSum == leftSum) {
            return i;
        }

        leftSum += nums[i];
    }
    return -1;
};