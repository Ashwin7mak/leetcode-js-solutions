/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Find the k that needs to be swapped iterate from the last before digit
// If k is negative, we had completed the full iteration to find k, 
    // Which is the largest permutation of the nums
// Find the number l that is immediate greater than k
// Reverse the digits from k + 1 to the length of nums
var nextPermutation = function (nums) {

    if (nums.length == 1) return;

    if (nums.length == 2)
        return swap(nums, 0, 1);

    let k = nums.length - 2;

    while (k >= 0 && nums[k] >= nums[k + 1]) {
        k -= 1;
    }

    if (k == -1) {
        reverse(nums, 0, nums.length - 1);
        return;
    }

    for (let i = nums.length - 1; i > k; i--) {
        if (nums[i] > nums[k]) {
            swap(nums, k, i);
            break;
        }
    }

    reverse(nums, k + 1, nums.length - 1);

    return nums;
};

// Reverse helper function 
function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start++] = nums[end];
        nums[end--] = temp;
    }
    return nums;
}

// Swap helper function
function swap(nums, index1, index2) {
    let temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}

