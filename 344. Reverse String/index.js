var reverseString = function (s) {
    return s.reverse();
};

/* Two Pointers Approach */

var reverseString = function (s) {
    if (s.length === 0 || s === null) return [];

    let left = 0, right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
};