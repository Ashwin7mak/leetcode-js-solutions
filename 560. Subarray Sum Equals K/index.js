/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* Hash map approach 
    // Use a hash map to store the nums 
    // Set the currSum as key and the no of occurences as values
    // Calculate the currSum at every iteration
        // Check if currSum - k is in the map
            // If so, reassign result += hash[currSum - k]
    // If currSum is not in the map, assign it to 1 else increment the value by 1
    
    TC - O(n)
    SC - O(n)
*/
var subarraySum = function (nums, k) {

    let hash = {};

    let result = 0;

    let currSum = 0;

    hash[0] = 1;    // Default value

    for (let i = 0; i < nums.length; i++) {
        
        currSum += nums[i]; // Step 1

        if (hash[currSum - k]) {   // Step 2
            result += hash[currSum - k];
        }

        if (!hash[currSum]) {  // Step3
            hash[currSum] = 1;
        } else {
            hash[currSum] += 1;
        }
    }
    return result;
};

/* Brute Force Approach 

    Iterate using two for loops
        For each index i, find the continuous sum using j
        check if currSum = k, if so increment res
    
    TC - O(n^2)
    SC - O(1)
*/

var subarraySum = function (nums, k) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        let currSum = 0;

        for (let j = i; j < nums.length; j++) {

            currSum += nums[j];
            if (currSum === k) {
                res += 1;
            }
        }
    }
    return res;
};
