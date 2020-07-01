/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.array = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.array;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    // Fisher-Yates algorithm
    let result = this.array.slice();
    let n = result.length;
    while (n) {
        let pick = Math.floor(Math.random() * n--);
        [result[n], result[pick]] = [result[pick], result[n]];

    }
    return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */