/* Merge Sort */
var sortArray = function (nums) {
    if (nums.length < 2) return nums;

    let mid = Math.floor(nums.length / 2);

    let left = nums.slice(0, mid);

    let right = nums.slice(mid);

    return mergeSort(sortArray(left), sortArray(right));
};

function mergeSort(arr1, arr2) {
    let sorted = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            sorted.push(arr1.shift());
        } else {
            sorted.push(arr2.shift());
        }
    }

    return [...sorted, ...arr1, ...arr2];
}