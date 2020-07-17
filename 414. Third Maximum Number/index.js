/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {

    let set = new Set(nums);

    let maxVal = 0;

    if (set.size < 3) return Math.max(...set);

    let i = 0;

    while (i < 3) {
        maxVal = Math.max(...set);
        set.delete(maxVal);
        i++;
    }

    return maxVal;

};