/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
    Hash map Approach

    - Assign count = 0 and hash map to store the nums
    - Store the nums in the given array into hash as hash = { num: no.of occurences }
    - Iterate over the hash elements
        - If k = 0, then check if hash[i] is more than 1, if so increment count
        - If k != 0, then check if hash[i + k] is in the hash, if so increment count
    - Return the count
    
    TC - O(n)
    SC - O(n)
*/
var findPairs = function (nums, k) {

    if (!nums || nums.length === 0 || k < 0) return 0;

    let count = 0;

    let hash = {};

    for (let i of nums) {
        if (hash[i] === undefined) {
            hash[i] = 1;
        } else {
            hash[i] += 1;
        }
    }

    for (let i of Object.keys(hash)) {
        if (k === 0) {
            if (hash[i] >= 2) {
                count++;
            }
        } else {
            if (hash[parseInt(i) + k] !== undefined) {
                count++;
            }
        }
    }

    return count;
};