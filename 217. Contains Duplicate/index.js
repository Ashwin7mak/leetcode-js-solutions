/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* 
    HashTable Approach
    TC - O(n)
    SC - O(n)
*/
var containsDuplicate = function (nums) {
    if (nums.length < 0) return false;

    let hash = {};

    for (let i of nums) {
        if (hash[i] === undefined) {
            hash[i] = 1;
        } else {
            return true;
        }
    }
    return false;
};

/*
    Sort Approach
    TC - O(n logn)
    SC - O(1)
*/
var ContainsDuplicate = function (nums) {
    nums = nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] === nums[i + 1])
            return true;
    }
    return false;
}