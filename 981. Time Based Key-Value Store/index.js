/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
    this.hash = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.hash[key]) {
        this.hash[key] = [];
    }
    // console.log("TYP", typeof timestamp);
    this.hash[key].push({ timestamp: timestamp, value: value });
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (!this.hash[key]) return "";
    // console.log("Hash", this.hash, "---", this.hash[key]);
    return binarySearch(this.hash[key], timestamp);
};

function binarySearch(array, target) {

    if (array.length === 1) return target < array[0].timestamp ? "" : array[0].value;

    let left = 0, right = array.length - 1;

    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (array[mid].timestamp === target) return array[mid].value;

        if (array[mid].timestamp < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    // console.log("BS", array[mid].timestamp, target);
    return array[mid].timestamp < target ? array[mid].value : array[mid - 1] ? array[mid - 1].value : "";
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */