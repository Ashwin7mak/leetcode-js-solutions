/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    // Two pointer approach
    if (nums.length == 0 || nums == null) return 0;

    let result = Number.MAX_SAFE_INTEGER;   // Assign max integer to result since we need to find min

    let left = 0, sum = 0;

    // Iterate through nums 
    for (let i = 0; i < nums.length; i++) {
        // Add sum of all nums to sum variable
        sum += nums[i];
        // Condition check until if sum >= s
        while (sum >= s) {
            // Calculate result to min of result and i - left
            // Subtract current nums[left] from sum
            // Increment left
            result = Math.min(result, i + 1 - left);
            sum -= nums[left];
            left++;
        }
    }

    return result != Number.MAX_SAFE_INTEGER ? result : 0;
};