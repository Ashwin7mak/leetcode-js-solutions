/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    for(let i of [2, 3, 5]) {
        while (num && num % i === 0) {
            num /= i;
        }
    }
    return num === 1;
};
