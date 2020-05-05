/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let n = nums.length;
    let reachable = 0;

    for (let i = 0; i < n; i++) {
        if (reachable < i) {
            return false;
        }
        reachable = Math.max(reachable, i + nums[i]);
    }
    return true;
};