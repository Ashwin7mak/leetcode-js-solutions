/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let start = 0, end = 0, max = 0;

    while (end < nums.length) {

        if (nums[end] === 0) {
            max = Math.max(end - start, max);
            start = end + 1;
        }
        end++;
    }
    return Math.max(end - start, max);
};