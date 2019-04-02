var singleNumber = function (nums) {
    let hash = {};

    nums.forEach((e) => {
        if (!hash[e]) {
            hash[e] = 1;
        } else {
            hash[e]++;
        }
    });

    // Using ES6 features, filtering the keys of hash object whose values is 1
    return Object.keys(hash).filter((val) => hash[val] === 1);
};