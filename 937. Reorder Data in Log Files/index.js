/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {

    // Get all the characters after identifiers i.e. "dig1 8 1 5 1" -> "8 1 5 1"
    let getLogs = (str) => {
        let charAfterIdentifier = str.indexOf(' ') + 1;
        return str.slice(charAfterIdentifier);
    }

    // Check if the getLogs as digits
    let isDigit = (num) => {
        return /\d/.test(num);
    }

    // Sort alphabets lexicographically
    let lexicographSort = (a, b) => {
        let sort = getLogs(a).localeCompare(getLogs(b));
        return sort !== 0 ? sort : a.localeCompare(b);
    }

    // Assign two arrays for letterLogs and digitLogs
    // Push the respective logs to the respective arrays
    let letterLogs = [];
    let digitLogs = [];

    for (let words of logs) {
        if (isDigit(getLogs(words))) {
            digitLogs.push(words);
        } else {
            letterLogs.push(words);
        }
    }
    // perform lexicographSort on the letterLogs and merge with digitLogs array
    return [...letterLogs.sort(lexicographSort), ...digitLogs];
};