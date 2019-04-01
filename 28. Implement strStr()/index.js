var strStr = function(haystack, needle) {
    let hl = haystack.length,
        nl = needle.length;
    // If needle is 0 return 0
    if (needle.length == 0) return 0;
    // Loop through haystack check if substring matches needle
    for (let i = 0; i < hl; i++) {
        if (haystack.substr(i, nl) == needle) return i;
    }
    return -1;
}


console.log(strStr("bomb", "om"));
console.log(strStr("", ""));
console.log(strStr("bomb", "b"));