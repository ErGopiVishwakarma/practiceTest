function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        // Calculate the potential profit if we sell on the current day (prices[i])
        let potentialProfit = prices[i] - minPrice;

        // Update the maxProfit if the potential profit is greater
        maxProfit = Math.max(maxProfit, potentialProfit);

        // Update the minimum buying price seen so far
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
let result = maxProfit(prices);
console.log(result); // Output: 5
