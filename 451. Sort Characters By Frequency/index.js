var frequencySort = function (s) {

    let hash = {};
    let result = [];

    // Push elements into the object
    for (let i = 0; i < s.length; i++) {
        let key = s[i];
        if (!hash.hasOwnProperty(key)) {
            hash[key] = 1;
        } else {
            hash[key]++;
        }
    }

    // Push the key-value pairs of Object into the array
    for (let item in hash) {
        result.push({
            char: item,
            count: hash[item]
        });
    }

    // Sort the array in descending order of values
    result.sort((a, b) => b.count - a.count);

    // Reduce the array by adding the values based on the keys
    return result.reduce((e, f) => {
        return e + f.char.repeat(f.count);
    }, '');
};