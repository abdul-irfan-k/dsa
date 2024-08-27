function subarraySum(nums: number[], k: number): number {
    const sumFrequent = new Map()
    sumFrequent.set(0, 1)
    let ans = 0
    let prefixSum = 0

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i]
        const remove = prefixSum - k

        ans += sumFrequent.get(remove) || 0
        sumFrequent.set(prefixSum, (sumFrequent.get(prefixSum) || 0) + 1)

    }
    return ans

};


console.log(subarraySum([1, 2, 3], 3))