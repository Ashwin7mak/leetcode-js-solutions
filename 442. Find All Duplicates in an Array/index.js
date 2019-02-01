function findDuplicates(nums) {
    let hash = {};
    let result = [];

    //Iterate the array 
    //Add them into the Object hash with no. of occurences as values
    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (!hash.hasOwnProperty(key)) {
            hash[key] = 1;
        } else {
            hash[key]++;
        }
    }

    // Finding the keys of object hash
    // Find the keys, whose values is 2 using filter method
    return Object.keys(hash).filter((item) => hash[item] === 2);

}