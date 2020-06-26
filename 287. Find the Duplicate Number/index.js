/**
 * @param {number[]} nums
 * @return {number}
 */

/* Two pointers approach */
 var findDuplicate = function (nums) {
    let slow = 0;
    let fast = 0;

    // Two pointers to detect if there is a cycle
    // Slow pointer moving one step, fast pointer moving two steps at a time
    while (nums.length) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast)
            break;
    }

    fast = 0;

    // Two pointers to detect the entry point or intersection
    // Both are moving one step at a time
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return fast;
};