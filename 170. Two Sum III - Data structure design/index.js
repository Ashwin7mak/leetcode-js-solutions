/**
 * Initialize your data structure here.
 */
/*
    - Similar to two sum problem hash map approach, we are using map instead of object for easy computation
    - In add(val), add the num as key and their corresponding occurences as the value
    - In find(k), for every num, calculate complement = (k - num) which takes two cases
        - If complement is not equal to num, then check if complement is present in the map, return true
        - If they are not equal, then check if the value of complement in the map is more than 1, return true 
        - Else return false

    TC - O(n)
    SC - O(n)
*/

var TwoSum = function () {
    this.map = new Map();
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {

    this.map.set(number, 1 + (this.map.get(number) || 0));
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
    for (let [num, b] of this.map) {
        let key = value - num;
        if (key !== num) {
            if (this.map.has(key)) {
                return true;
            }
        } else {
            if (this.map.get(key) > 1) {
                return true;
            }
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */