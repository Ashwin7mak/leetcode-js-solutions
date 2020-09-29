/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*  Two pointer approach
    - prod = 1, res = 1;
    - i = 0, j = 0;
    - Iterate through the nums
        - Multiply each number with prod
        - Check if prod >= k
            - If so, divide by the num[i] and increment i
        - Add res to j - i + 1
        - Increment j
    - Return the result
*/
var numSubarrayProductLessThanK = function (nums, k) {

    if (k <= 1) return 0;

    let count = 0, prod = 1;

    let i = 0, j = 0;

    while (j < nums.length) {

        prod *= nums[j];

        while (prod >= k) {

            prod /= nums[i];
            i++;
        }

        count += j - i + 1;
        j++;
    }

    return count;
};


