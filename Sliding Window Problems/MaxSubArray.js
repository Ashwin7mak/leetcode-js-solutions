// Sliding Window Maximum (Maximum of all subarrays of size k)

// arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}, k = 3 
// Output : 3 3 4 5 5 5 6


function maxOfAllSubArray(arr, k) {
    
    let max = 0, result = [];

    for(let i = 0; i <= arr.length - k; i++) {
        max = arr[i];

        for(let j = 1; j < k; j++) {
            if(max < arr[i + j]) {
                max = arr[i + j];
            }
        }
        result.push(max);
    }
    return result;
}


console.log(maxOfAllSubArray([2,3,4,5,1,6,2], 3)); // [4,5,5,6,6]