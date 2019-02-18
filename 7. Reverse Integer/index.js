var reverse = function (x) {

    // Get the sign of the integer
    let pow = Math.pow(2, 31) * Math.sign(x);
    let num = "";
    x = Math.abs(x);

    // Reverse the string
    while (x !== 0) {
        let remainder = x % 10;
        x = Math.floor(x / 10);
        num += String(remainder);
    }

    // Convert num back to Integer/Number
    num = Math.sign(pow) * Number(num);

    // Check for the range [−2^31,  2^31 − 1].
    if (pow > 0) {
        return num < pow - 1 ? num : 0;
    } else {
        return num > pow ? num : 0;
    }
};