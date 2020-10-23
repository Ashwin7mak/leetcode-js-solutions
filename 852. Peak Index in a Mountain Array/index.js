/**
 * @param {number[]} arr
 * @return {number}
 */
/*
    Binary Search Approach

    TC - O(log n)
    SC - O(1)
*/
var peakIndexInMountainArray = function(arr) {
    
    let low = 0, high = arr.length - 1;
    
    while(low < high) {    
        let mid = Math.floor((low + high)/ 2);
        
        if(arr[mid] < arr[mid + 1])
            low = mid + 1;
        else 
            high = mid;
    }
    return low;
};

/*
    Iterative Approach

    TC - O(n)
    SC - O(1)
*/
var peakIndexInMountainArray = function(arr) {
    
    if(!arr || arr.length < 3) return -1;
    
    for(let i = 1; i < arr.length - 1; i++) {
        if(arr[i - 1] < arr[i] && arr[i] > arr[i + 1])
            return i;
    }
    
    return -1;
};