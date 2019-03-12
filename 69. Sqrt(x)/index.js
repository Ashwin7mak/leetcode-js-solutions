var mySqrt = function(x) {
    // Using Binary Search Algorithm
    if(x < 1) return 0;

    let mid, left = 1, right = x;

    while(left + 1 < right) {
        mid = Math.floor((left + right) / 2);

        if(mid * mid > x) {
            right = mid;
        } else if(mid * mid < x) {
            left = mid;
        } else {
            return mid;
        }
    }
    return left;
}

