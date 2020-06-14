var reverseWords = function (s) {
    if (s.length == 0) {
        return s;
    }
    // Reverse the entire array of string
    reverse(s, 0, s.length - 1);

    let start = 0;

    // Iterate through the reversed array of string
        // When " " is reached, reverse the word iterated so far until the end of the reversed array of string
    for (let end = 0; end <= s.length; end++) {
        if (s[end] == ' ' || end == s.length) {
            reverse(s, start, end - 1);
            start = end + 1;
        }
    }
};

function reverse(s, start, end) {
    while (end > start) {
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
}