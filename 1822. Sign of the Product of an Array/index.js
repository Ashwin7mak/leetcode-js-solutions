/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if(nums.length === 0)
        return;

    let result = 0;

    for(let char of nums) {
        if(char === 0)
            return 0;

        if(char < 0) {
            result++;
        }
    }

    return result % 2 === 0 ? 1 : -1;
};
