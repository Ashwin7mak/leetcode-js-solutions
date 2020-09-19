/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
    if(num === null || !num) return;
    
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];

    let i = 0, res = '';
    
    while(num > 0) {
        if(num >= numbers[i]) {
            res += symbols[i];
            num -= numbers[i];
        } else {
            i++;
        }
    }
    return res;
}