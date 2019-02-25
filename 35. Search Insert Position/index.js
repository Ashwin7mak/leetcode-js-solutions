function searchInsertPosition(nums, target) {
    // Find the index of target
    let index = nums.indexOf(target);
    // If the target element is found in the array return the index;
    if(index > -1) return index;

    let mid, left = 0, right = nums[nums.length - 1];

    // Divide and Conquer method
    while(left <= right) {
        // Find the index of mid element,
        mid = Math.floor((left + right) / 2);

        // Check if the index of mid element is lesser than target then iterate towards left 
        if(target < nums[mid]) {
            right = mid - 1;
        }

        // Check if the index of mid element is lesser than target then iterate towards right
        if(target > nums[mid]) {
            left = mid + 1;
        }
    }

    return left;
}