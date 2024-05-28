const isMonotonic = function (nums) {
    let j = nums.length - 1
    let i = 0
    let isIncreasing = nums[i] < nums[j]

    while (i <= j) {
        if (isIncreasing && nums[i] > nums[j] | nums[i] > nums[i + 1]) return false
        if (!isIncreasing && nums[i] < nums[j] | nums[i] < nums[i + 1]) return false

        i++
    }
    return true
};

console.log(isMonotonic([1, 2, 2, 3]))