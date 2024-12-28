function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a, b) => a - b)
    const combination = []

    for (let left = 0; left < nums.length - 2; left++) {
        if (nums[left] > 0) break
        if (nums[left] === nums[left - 1]) continue

        let middle = left + 1
        let right = nums.length - 1
        while (middle < right) {
            if (nums[right] < 0) break
            const sum = nums[left] + nums[middle] + nums[right]
            if (sum === 0) {
                combination.push([nums[left], nums[middle], nums[right]])
                while (middle < right && nums[middle] === nums[middle + 1]) middle++
                while (middle < right && nums[right] === nums[right - 1]) right--
                middle++
                right--
            } else if (sum > 0) {
                right--
            } else {
                middle++
            }
        }
    }

    return combination
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
