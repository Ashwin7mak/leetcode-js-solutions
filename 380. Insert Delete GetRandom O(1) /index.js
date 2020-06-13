/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.hash = {}
    this.arr = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {

    if (this.hash[val] === undefined) {  // val not present in set, undefined because of '0' index
        this.arr.push(val)
        this.hash[val] = this.arr.length - 1     // store index as value
        return true
    }
    // set already present
    return false
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.hash[val] !== undefined) {
        // swap key and value
        let currIndex = this.hash[val]
        let lastIndex = this.arr.length - 1
        let lastNum = this.arr[lastIndex]
        this.hash[lastNum] = currIndex
        // // swap arr
        this.arr[currIndex] = lastNum


        // let lastNum = this.arr[this.arr.length-1]
        // let currNum = this.hash[val]
        // this.hash[lastNum] = currNum
        // this.arr[currNum] = lastNum
        // remove val in hash and arr
        delete this.hash[val]
        this.arr.pop()
        return true
    }
    return false
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let randomKey = Math.floor(Math.random() * this.arr.length)
    return this.arr[randomKey]
};