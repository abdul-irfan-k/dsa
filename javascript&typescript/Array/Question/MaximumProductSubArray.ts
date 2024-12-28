function maxProduct(nums: number[]): number {
    let max = nums[0] ?? 0
    if (nums.length <= 1) return max

    let maxSoFar = nums[0]
    let minSoFar = nums[0]
    let tempMaxSoFar
    for (let i = 1; i < nums.length; i++) {
        const current = nums[i]
        tempMaxSoFar = Math.max(current, current * maxSoFar, current * minSoFar)
        minSoFar = Math.min(current, current * maxSoFar, current * minSoFar)
        maxSoFar= tempMaxSoFar
        max = Math.max(max, maxSoFar)
    }
    return max
};

console.log(maxProduct([2, 3, -2, 4]))
console.log(maxProduct([3, -2, 4, -5, 1]))
console.log(maxProduct([10, 10]))
console.log(maxProduct([-10, 5]))
console.log(maxProduct([0, 2]))
console.log(maxProduct([-4, -3, -2]))
console.log(maxProduct([4, 3, 2]))
console.log(maxProduct([3, -1, 4]))
console.log(maxProduct([7, -2, -4]))
console.log(maxProduct([1, 0, -1, 2, 3, -5, -2, 1]))