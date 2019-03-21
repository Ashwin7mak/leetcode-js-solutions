var searchRange = function (nums, target) {

    let result = [-1, -1];

    let mid, left = 0, right = nums.length - 1;

    // Find first position
    while(left < right) {
        mid = Math.floor((left + right) / 2);

        if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    if(nums[left] !== target) {
        return result;
    } else {
        result[0] = left;
    }

    // Find last position
    right = nums.length - 1;

    while(left < right) {
        mid = Math.ceil((left + right) / 2);

        if(nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }

    result[1] = right;

    return result;
}


console.log(searchRange([1], 1));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 7, 8, 8, 10], 7));
