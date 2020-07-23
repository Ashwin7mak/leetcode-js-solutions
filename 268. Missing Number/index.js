/**
 * @param {number[]} nums
 * @return {number}
 */
// XOR Approach
var missingNumber = function (nums) {
    // (nums.length XOR (index i XOR nums[i]))
    let missing = nums.length;

    for (let i = 0; i < nums.length; i++) {
        let xor = i ^ nums[i];
        missing ^= xor;
    }

    return missing;
};