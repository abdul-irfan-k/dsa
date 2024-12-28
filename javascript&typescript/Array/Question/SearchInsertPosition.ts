function searchInsert(nums: number[], target: number): number {
    let start = 0
    let end = nums.length - 1

    while (start < end) {
        const middle = Math.floor((start + end) / 2)
        if (nums[middle] == target) return middle
        if (nums[middle] > target) end = middle
        else start = middle + 1
    }
    if (nums[start] < target) return start + 1
    return start
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))