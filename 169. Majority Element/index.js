/**
 * @param {number[]} nums
 * @return {number}
 */
/*
    Bayer-Moore's Algorithm Approach
    TC - O(n)
    SC - O(1)
*/
var majorityElement = function (nums) {

    let candidate = 0, count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }

        if (nums[i] !== candidate) {
            count--;
        } else {
            count++;
        }
    }
    return candidate;
};

/*
    HashTable Approach
    TC - O(n)
    SC - O(n)
*/
var majorityElement = function (nums) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];
        if (!hash[key]) {
            hash[key] = 1;
        } else {
            hash[key]++;
        }
    }
    // Returns the key with highest value in the object
    return Object.keys(hash).reduce((a, b) => hash[a] > hash[b] ? a : b);
};