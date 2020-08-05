/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
/* Brute Force Approach */
var divide = function (dividend, divisor) {
    let res = 0;
    // Edge -Infinity / -1 = +Infinity
    if (dividend === -2147483648 && divisor === -1) return 2147483647;

    // Converting all numbers into negative
    // Keep track of negatives numbers and after performing computations changing them back to their sign
    let negative = 2;
    if (dividend > 0) {
        negative--;
        dividend = -dividend;

    }

    if (divisor > 0) {
        negative--;
        divisor = -divisor;
    }

    while (dividend - divisor <= 0) {
        res--;
        dividend -= divisor;
    }

    if (negative !== 1) {
        res = -res;
    }

    return res;
};