/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let len = num.toString().length;
        if (len % 2 === 0) count += 1;
    }
    return count;
};