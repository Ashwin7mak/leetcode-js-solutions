var removeDuplicates = function (nums) {
    // Looping through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            // Removing only the elements that are identical
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;

};