var maxProfit = function(prices) {
    // Assign minPrice to highest number and maxProfit to 0
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;

    // Loop through the prices array
    // Calculate minPrice and maxProfit through iterations
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
}


console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 5, 4, 1]));