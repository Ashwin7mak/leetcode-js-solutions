/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    if (nums.length === 0 || nums === "") return nums;
    // Binary Search Approach
    let counts = [0];

    let sortedNums = [nums[nums.length - 1]];


    // First tyring to find all the smallest numbers to current number in array
    function binarySearch(target) {

        let left = 0, right = sortedNums.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (target > sortedNums[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        sortedNums.splice(left, 0, target);
        return left;
    }

    for (let i = nums.length - 2; i >= 0; i--) {

        let count = binarySearch(nums[i]);

        counts.unshift(count);

    }

    return counts;
};