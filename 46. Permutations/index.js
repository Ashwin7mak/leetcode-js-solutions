/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (!nums || nums.length === 0) return [];
    if (nums.length === 1) return [nums];
    const res = [];
    backtrack(nums, res, 0);
    return res;

    function backtrack(nums, res, start) {
        if (start === nums.length) {
            res.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            [nums[i], nums[start]] = [nums[start], nums[i]];
            backtrack(nums, res, start + 1);
            [nums[i], nums[start]] = [nums[start], nums[i]];
        }
    }
};

