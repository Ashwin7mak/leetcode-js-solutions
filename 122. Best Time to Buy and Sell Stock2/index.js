var maxProfit = function (prices) {
    // Check if prices are greater than 1
    if (prices.length <= 1) return 0;

    let profit = 0;

    // Loop through prices array
    // Check if there is a profit 
    // i.e. prices[i] > prices[i - 1]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[i - 1] > 0) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};