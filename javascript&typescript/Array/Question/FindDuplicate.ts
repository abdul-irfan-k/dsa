function findDuplicate(nums: number[]): number {
    let start = 0
    let end = nums.length - 1

    nums.sort((a, b) => a - b)
    while (start < end) {
        let middle = Math.floor((start + end) / 2)

        if (nums[middle] <= middle) {
            end = middle - 1
        }
        else {
            start = middle + 1
        }
    }

    return nums[start]
};
console.log(findDuplicate([1, 3, 4, 2, 2]))
console.log(findDuplicate([3, 3, 3, 3, 3]))
console.log(findDuplicate([3, 1, 3, 4, 2]))
console.log(findDuplicate([3, 2, 5, 14, 5, 5, 19, 18, 11, 10, 1, 4, 5, 5, 5, 5, 12, 5, 17, 5]))

