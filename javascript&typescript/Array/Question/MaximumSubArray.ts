function maxSubArray(nums: number[]): number {
    let max = nums[0]
    let currentSum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(currentSum + nums[i], nums[i])
        if(currentSum > max)max = currentSum
    }
    return max
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// console.log(maxSubArray([5, 4, -1, 7, 8]))
// console.log(maxSubArray([1]))
console.log(maxSubArray([5,4,-1,7,8]))