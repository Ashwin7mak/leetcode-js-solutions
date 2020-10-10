/**
 * @param {number[]} nums
 * @return {number}
 */
/*
    MATH CONCEPT
    - Gist of the problem is making all the numbers in the array equal.
        Min. moves = Sum of array - (n * minElement) 
    - In first pass, find the min element in the array
    - In second pass, find the no of moves required to make all the elements equal

    TC - O(n)
    SC - O(1)
*/
var minMoves = function (nums) {

    let minElement = Number.MAX_SAFE_INTEGER;

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        minElement = Math.min(minElement, nums[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        count += nums[i] - minElement;
    }

    return count;
};

/*
    Sort Approach
    - Gist of the problem is making all the numbers in the array equal.
        Min. moves = Sum of array - (n * minElement)
    - Sort the elements
    - Iterate through the array, find the no of moves required to make all the elements equal

    TC - O(n logn)
    SC - O(1)
*/
var minMoves = function (nums) {

    nums = nums.sort((a, b) => a - b);

    let count = 0;

    for (let i = nums.length - 1; i >= 0; i--) {

        count += nums[i] - nums[0];

    }

    return count;
};