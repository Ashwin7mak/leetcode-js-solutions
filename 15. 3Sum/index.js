/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if(nums.length < 3) return [];

    let result = [];
    // Sort the given input
    nums.sort((a, b) => a - b);

    // Iterate through the last three elements in the array
    for (let i = 0; i < nums.length - 2; i++) {
        // Ensure tp continue even if there are duplicates
        // Two pointers approach
        if (i == 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let left = i + 1;
            let right = nums.length - 1;
            let sum = 0 - nums[i];

            while (left < right) {
                if (nums[left] + nums[right] == sum) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right++;
                    left++;
                    right--;
                } else if (nums[left] + nums[right] > sum) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }
    return result;
};