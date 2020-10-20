/*
    Sieve of Eratoshtenes Algorithm

    TC - O(n log log n)
    SC - O(n)
*/

var countPrimes = function(n) {
    
    // Two arrays one for carrying initial numbers and another for resulting prime numbers
    let prime = [];
    let res = [];
    // Set all the values in the array to true starting from 2 i.e. first prime num
    for(let i = 2; i < n; i++) { prime[i] = true; }

    // Loop throught the array 
    // Setting multiples of i to false
    for(let i = 2; i * i < n; i++) {
        for(let j = i * i; j < n; j += i) {
            prime[j] = false;
        }
    }

    // Loop through the array
    // Push only the true values into the result array
    for(let i = 0; i < n; i++) {
        if(prime[i]) {
            res.push(i);
        }
    }
    return res.length;
}


console.log(countPrimes(10));
console.log(countPrimes(2));