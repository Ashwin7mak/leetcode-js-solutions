var minWindow = function (s, t) {
    //
    let result = s + t;
    // Two pointers
    let start = 0, end = 0;
    // Object for carrying t elements
    let hash = {}

    for (let i = 0; i < t.length; i++) {
        if (!hash[t[i]]) hash[t[i]] = 1;
        else hash[t[i]]++;
    }

    let count = Object.keys(hash).length;

    // Check with two pointers
    while (end < s.length) {
        let charEnd = s[end];

        if (hash[charEnd]) {
            hash[charEnd]--;

            if (hash[charEnd] === 0) count--;
        }

        end++;

        while (count === 0) {
            let charStart = s[start];

            if (hash[charStart]) {
                hash[charStart]++;

                if (hash[charStart] > 0) count++;

                let subStr = s.slice(start, end);

                if (subStr.length < result.length) result = subStr;
            }
            start++;
        }
    }

    if (result.length === s.length + t.length) return '';
    return result;
};