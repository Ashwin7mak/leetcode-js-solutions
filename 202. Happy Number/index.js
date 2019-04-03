var isHappy = function (n) {
    // Calculate sum of square of digits
    function digitSquareSum(num) {
        let sum = 0;
        while (num) {
            sum += (num % 10) * (num % 10);
            num = Math.floor(num / 10);
        }
        return sum;
    }

    // Using object
    let obj = {};

    // Check if n is not equal to 1 and n is not the key of obj
    while (n != 1 && !obj[n]) {
        obj[n] = true;
        n = digitSquareSum(n);
    }

    return n == 1;
};