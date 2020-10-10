/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
    TC - O(n)
    SC - O(1)
 */
var runningSum = function (nums) {

    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};

/*
    TC - O(n)
    SC - O(n)
 */
var runningSum = function (nums) {

    let result = [];
    let sum = 0;

    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }

    return nums;
};