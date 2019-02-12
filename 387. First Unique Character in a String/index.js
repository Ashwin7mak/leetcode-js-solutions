var firstUniqChar = function (s) {
    let hash = {};
    let res = [];
    // Loop through elements in the string and 
    // add unique elements in the object
    for (let i = 0; i < s.length; i++) {
        let key = s[i];
        if (!hash.hasOwnProperty(key)) {
            hash[key] = 1;
        } else {
            hash[key]++;
        }
    }

    // Filter the duplicate elements
    res = Object.keys(hash).filter((val) => hash[val] == 1);
    // Return the index of the first element in the array
    return s.indexOf(res[0]);
};