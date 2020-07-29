/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let result = [[]];
    nums.sort((a, b) => a - b);
    backTrack(0, [], nums, result);

    return result;
};


function backTrack(start, curr, nums, result) {
    for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] == nums[i - 1]) continue;

        curr.push(nums[i]);
        result.push([...curr]);
        backTrack(i + 1, curr, nums, result);
        curr.pop();
    }
}