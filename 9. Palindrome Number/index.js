/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    if (x < 0) return false;

    if (x < 10) return true;

    if (x % 10 === 0) return false;

    return x === reverseDigits(x);

    function reverseDigits(num) {
        let res = 0, rem = 0;

        while (num) {
            rem = num % 10;
            res = res * 10 + rem;
            num = Math.floor(num / 10);
        }
        return res;
    }
};