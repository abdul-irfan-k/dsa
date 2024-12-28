function maxProfit(prices: number[]): number {
    let max = 0
    let lowPrice = prices[0]

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i]
        if (lowPrice < currentPrice){
            max = Math.max(max,currentPrice-lowPrice)
        }
        else lowPrice = currentPrice
    }

    return max
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))