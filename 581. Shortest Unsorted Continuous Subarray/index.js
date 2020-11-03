/**
 * @param {number[]} nums
 * @return {number}
 */
/*
    Two Pointer Approach
    
    l = 0, r = nums.length - 1;
    
    min = Infinity, max = -Infinity
    
    start = 0, end = -1
    
    - Iterate through the nums array
        - end - Find the index of the last element that is smaller than the largest element in the nums array
        - start - Find the index of the first element that is larger than the smallest element in the nums array
    
    - Return end - start + 1

    TC - O(n)
    SC - O(1)
*/
var findUnsortedSubarray = function(nums) {
    
    let l = 0, r = nums.length - 1;
    
    let start = 0, end = -1;
    
    let min = Infinity, max = -Infinity;
    
    while(l < nums.length) {
        
        max = Math.max(max, nums[l]);
        if(nums[l] < max) {
            end = l;
        }
        
        min = Math.min(min, nums[r]);
        if(nums[r] > min) {
            start = r;
        }
        
        l += 1;
        r -= 1;
    }

    return end - start + 1;
};
