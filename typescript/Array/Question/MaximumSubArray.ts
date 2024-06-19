function maxSubArray(nums: number[]): number {
    let max = nums[0]
    let currentSum = 0

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i]
        currentSum += element
        if (element > currentSum) {
            currentSum = element
        }
        if (currentSum > max)
            max = currentSum
    }
    return max
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([5, 4, -1, 7, 8]))
console.log(maxSubArray([1]))
console.log(maxSubArray([-1]))