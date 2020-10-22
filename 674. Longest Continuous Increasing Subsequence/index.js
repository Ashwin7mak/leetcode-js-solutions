/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    Sliding Window Approach
    
    - Use maxCount = 0, count = 0;
    - Iterate through the input array
        - if i > 0 and nums[i - 1] >= nums[i], set count to i
        - Update maxCount to the max of maxCount , i - count + 1
    - Return maxCount

    TC - O(n)
    SC - O(1)
*/
var findLengthOfLCIS = function(nums) {
    if(!nums || nums.length === 0) return 0;

    let maxCount = 0, count = 0;

    for(let i = 0; i < nums.length; i++) {
        // Only if the prev number is greater or equal to curr number
        if(i > 0 && nums[i - 1] >= nums[i])
            count = i;
        
        maxCount = Math.max(maxCount, i - count + 1);
    }
    return maxCount;
}