/**
 * @param {number[]} nums
 * @return {number}
 */
// XOR approach, XOR of any number with 0 is that number
// We can apply XOR approach since we need to find only one number in the array
var singleNumber = function (nums) { 
    let result = 0;

    nums.forEach((num) => {
        result ^= num;
    });
    return result;
}