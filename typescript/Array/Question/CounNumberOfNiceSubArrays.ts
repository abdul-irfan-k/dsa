function numberOfSubarrays(nums: number[], k: number): number {
    let result = 0

    let start = 0
    let middle = 0
    let end = 0
    let odd = 0

    while (end < nums.length) {
        if (nums[end] % 2) odd++

        while (odd > k) {
            if (nums[start] % 2) odd--
            start = start + 1
            middle = start
        }

        if (odd == k) {
            for (let i = middle; i <= end; i++) {
                if (nums[i] % 2) {
                    middle = i
                    break
                }
            }

            result += (middle - start) + 1
        }
        end++
    }

    return result
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3))
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2))