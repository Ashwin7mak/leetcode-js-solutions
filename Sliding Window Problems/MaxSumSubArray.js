// Given an array of integers of size ‘n’.
// Our aim is to calculate the maximum sum possible for ‘k’ consecutive elements in the array.

// Input  : arr[] = {100, 200, 300, 400}, k = 2
// Output : 700


function maxSumSubArray(arr, k) {
    
    let maxSum = 0, windowSum = 0;
    // Calculate Window Sum of first k elements in the array
    for(let i = 0; i < k; i++) windowSum += arr[i];
    // Loop through the array
    // Calculate new windowSum by adding new arr[i] and subtracting arr[i - k]
    // Calculate maxSum by choosing max between windowSum and maxSum
    for(let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}