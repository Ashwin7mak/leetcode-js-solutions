var search = function (nums, target) {

    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if the target is the mid element
        if (target == nums[mid]) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            // Check if the target is in the left side of mid element
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Check if the target is in the right side of mid element
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;

};