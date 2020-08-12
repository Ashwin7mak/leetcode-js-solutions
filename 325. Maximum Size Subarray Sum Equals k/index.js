/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
    // Use a hash map to store the nums 
    // Set the currSum as key and the indices as values
    // Calculate the currSum at every iteration
    // If currSum is not in the map, assign it to 1 else increment the value by 1
        // Check if currSum - k is in the map
            // If so, reassign result = Math.max(result, i - hash[currSum - k])
    
    if(!nums || nums.length === 0) return 0;

    let currSum = 0;

    let result = 0;

    let hash = {};

    hash[0] = -1;   // Default Value

    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];

        if (hash[currSum] === undefined) {
            hash[currSum] = i;
        }

        if (hash[currSum - k] !== undefined) {
            result = Math.max(result, i - hash[currSum - k]);
        }

    }
    return result;
};
