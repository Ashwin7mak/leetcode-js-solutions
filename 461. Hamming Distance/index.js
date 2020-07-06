/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    // Count the no of set bits
    function countBits(num) {
        let count = 0;
        while (num > 0) {
            count += 1;
            // num = num & (num - 1);
            num &= (num - 1);
        }
        return count;
    }
    // Perform x XOR y to get the diff
    let result = x ^ y;
    return countBits(result);
};

