/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    
    let N = seats.length, maxDistance = 0;
    
    let prev = -1;
    
    for(let i = 0; i < N; i++) {
        
        if(seats[i] === 1) {
            
            if(prev === -1) {
                maxDistance = i;
            } else {
                maxDistance = Math.max(maxDistance, Math.floor((i - prev)/2));
            }
            prev = i;
        }         
    }
    
    if(seats[N - 1] === 0) {
        maxDistance = Math.max(maxDistance, (N - 1 - prev));
    }
    
    return maxDistance;
};
