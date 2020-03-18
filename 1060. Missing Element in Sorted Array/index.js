/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
    // Since we need to calculate the missing numbers from left, lets add k from first number
    let missingNum = nums[0] + k;

    let res = [];

    for (let i = 1; i < nums.length; i++) {
        console.log("--", nums[i], missingNum);
        if (nums[i] > missingNum) {
            return missingNum;
        } else {
            missingNum++;
        }
    }
    return missingNum;
};