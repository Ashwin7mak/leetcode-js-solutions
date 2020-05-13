/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {

    if (nums.length === 0 || !nums) return 0;

    let left = 0, right = nums.length;
    // Core Concept: 
    // If mid and mid + 1 are equal and if mid is even, left = mid + 1 else right = mid
    // If mid and mid - 1 are equal and if mid is even, right = mid else left = mid + 1 

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === nums[mid + 1]) {
            if (mid % 2 === 0) {
                left = mid + 1;
            } else {
                right = mid;
            }
        } else if (nums[mid - 1] === nums[mid]) {
            if (mid % 2 === 0) {
                right = mid;
            } else {
                left = mid + 1;
            }
        } else {
            return nums[mid];
        }
    }
    return -1;
};