/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) return [];

    let result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {

        if (i > 0 && nums[i] == nums[i - 1]) continue;

        let target1 = target - nums[i];

        for (let j = i + 1; j < nums.length - 2; j++) {

            if (j > i + 1 && nums[j] == nums[j - 1]) continue;

            let low = j + 1, high = nums.length - 1;

            while (low < high) {
                let sum = nums[j] + nums[low] + nums[high];
                if (sum == target1) {
                    result.push([nums[i], nums[j], nums[low], nums[high]]);
                    while (low < high && nums[low] == nums[low + 1]) low++;
                    while (low < high && nums[high] == nums[high - 1]) high--;
                    low++;
                    high--;
                } else if (sum > target1) {
                    high--;
                } else if (sum < target1) {
                    low++;
                }
            }

        }
    }
    return result;
};