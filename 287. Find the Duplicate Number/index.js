/**
 * @param {number[]} nums
 * @return {number}
 */

/* Two pointers approach 
    TC - O(n)
    SC - O(1)
*/
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

/* Using negation method
   But alters the given input

    Iterate through the array
        Negate all the elements
        use the index which Math.abs(nums[i])

        Check if that position is positive, if so negate it

        If the position is negative, then it is the duplicate, return index
   TC - O(n)
   SC - O(1)
*/
var findDuplicate = function (nums) {
    for(let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]);

        if(nums[index] < 0) {
            return index;
        } else {
            nums[index] = -nums[index];
        }
    }
    return -1;
}