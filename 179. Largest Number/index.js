/**
 * @param {number[]} nums
 * @return {string}
 */
/*
    - Convert given array of integers to array of strings
    - Perform sorting my concating each character

    TC - O(n logn)
    SC - O(1)
*/
var largestNumber = function (nums) {

    if (!nums || nums.length === 0) return nums.toString();

    let largestNumber = nums.map(String).sort((a, b) => {
        if (a.concat(b) > b.concat(a)) {
            return -1;
        }
        return 1;
    });

    if (largestNumber[0] === "0") return "0";

    return largestNumber.join('');
};
