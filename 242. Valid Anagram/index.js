var isAnagram = function (s, t) {
    // Check the sorted strings are equal
    return s.split("").sort().join("") === t.split("").sort().join("");
};