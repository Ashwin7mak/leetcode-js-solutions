function topKFrequent(nums, k) {
    
    let hash = {};

    // Create an hashect insert all the elements and their occurences
    nums.forEach(function (item) {
        if (!hash[item])
            hash[item] = 1;
        else
            hash[item]++;
    });

    var arr = [];
    // Push the key-value pairs into the array
    for (var key in hash) {
        arr.push({ key: key, value: hash[key] });
    }

    // Sort the array elements based on their values  
    arr.sort(function (a, b) {
        return b.value - a.value;
    });

    var result = [];
    // Insert the elements with their occurences into ans array
    for (var i = 0; i < k; i++)
        result.push(arr[i].key);

    return result;
}