/**
 * @param {number[]} nums
 * @return {number}
 */

 // Using Hashset approach 

var longestConsecutive = function (nums) {
    if (nums.length === 0 || nums === null) return 0;
    // Use a set for O(n) access operations
    let set = new Set(nums);
    // Integer to return the length
    let lengthOfsequence = 0;

    // Iterate through input nums array
    // Check if the (nums-1) is present in the set
        // If not, increment j until j is found in the set 
        // In this way, we can keep track of all the consecutive sequence in the set ie.given input
    nums.forEach((num) => {
        if (!set.has(num - 1)) {
            let j = num;
            let count = 0;
            while (set.has(j)) {
                j++;
                count++;
            }
            lengthOfsequence = Math.max(lengthOfsequence, count);
        }
    });

    return lengthOfsequence;
};