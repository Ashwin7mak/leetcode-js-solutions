/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let sum = 0;
    while (num > 0) {
        console.log(typeof num, num);
        sum += num % 10;
        num = Math.floor(num / 10);

        if (num == 0 && sum > 9) {
            num = sum;
            sum = 0;
        }
    }
    return sum;
};