/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
*/
/*
    GIST: Check if all the passengers are picked and dropped in the destinations
    Check if the total count is within in the total capacity at any given location(start, end)

    - Use an hashmap to store the start and end locations as key with passenger count as the values
        - For start, add passenger count as the values
        - For end, subtract passenger count as the values
    
    - Iterate over the array of passenger counts from the hash
    - Check if passenger count is with in the capacity 
*/
var carPooling = function (trips, capacity) {
    if(!trips || trips.length === 0) return false;

    let hash = {};

    for(let [count, start, end] of trips) {
        hash[start] = (hash[start] || 0) + count;
        hash[end] = (hash[end] || 0) - count;
    }

    let passengerCount = Object.values(hash);

    for(let i of passengerCount) {
        capacity -= i;

        if(capacity < 0)    // If capacity is positive, then at the given location it exceeds the capacity
            return false;
    }
    return true;
}