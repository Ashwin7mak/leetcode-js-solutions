/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    const map = new Map();
    nums.forEach((num, index) => {
        if (!map.get(num)) map.set(num, [index]);
        else map.get(num).push(index);
    });
    this.nums = map;
};

Solution.prototype.pick = function (target) {
    const indexes = this.nums.get(target);
    return indexes ? indexes[Math.floor((Math.random() * indexes.length))] : null;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */