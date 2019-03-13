var findPeakElement = function (nums) {
    let mid, left = 0, right = nums.length - 1;

    while (left < right) {
        mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};