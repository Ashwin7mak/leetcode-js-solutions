/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.array = [];
    this.sum = 0;
    this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.sum += val;
    this.array.push(val);

    let avg = 0, currSum = 0;

    let totalCount = this.array.length;

    // If count <= size
    if (totalCount <= this.size) {
        avg = this.sum / totalCount;
        return avg;
    }

    let sliced = this.array.slice(totalCount - this.size);

    for (let i = 0; i < sliced.length; i++) {
        // If count > size
        currSum += sliced[i];
    }
    avg = currSum / this.size;
    return avg;
};