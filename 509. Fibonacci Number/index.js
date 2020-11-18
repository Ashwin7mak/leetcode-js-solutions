/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N <= 1) return N;
    return fib(N - 2) + fib(N - 1);
};