function minOperations(nums: number[]): number {
    if (nums.filter(element => element === 0).length % 2 == 0) return -1
    let count = 0

    let left = 0
    while (left < nums.length - 2) {
        if (nums[left] == 0) {
            count++
            nums[left] = nums[left] == 0 ? 1 : 0
            nums[left + 1] = nums[left + 1] == 0 ? 1 : 0
            nums[left + 2] = nums[left + 2] == 0 ? 1 : 0
        }
        left++
    }
    if (nums[left] == 0 || nums[left + 1] == 0) return -1
    return count
};

console.log(minOperations([0, 1, 1, 1, 0, 0]))
console.log(minOperations([0, 1, 1, 1]))

const arr = [1, 0, 0, 1, 1, 0, 1, 1, 1]
console.log(minOperations(arr))
console.log(arr)
