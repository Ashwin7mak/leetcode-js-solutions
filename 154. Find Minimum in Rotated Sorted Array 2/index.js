var findMin = function (nums) {
    // Remove duplicates
    nums = [...new Set(nums)];

    let mid, left = 0, right = nums.length - 1;
    while (left <= right) {
        // Check if the array is rotated or not
        if (nums[left] <= nums[right]) {
            return nums[left];
        }
        mid = Math.floor((left + right) / 2);
        // Check if the mid element is still greater than first element
        // If 
        if (nums[mid] >= nums[left]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return -1;

};