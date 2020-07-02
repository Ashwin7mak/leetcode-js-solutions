/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let i = 0;
    
    while (n > 0) {
        i += 1;
        n -= i;
    }
    return n === 0 ? i : i - 1;
};