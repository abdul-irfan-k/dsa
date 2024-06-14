// https://leetcode.com/problems/search-in-rotated-sorted-array/

function search(nums: number[], target: number): number {
    let start = 0
    let end = nums.length - 1
    let middle =0

    while (start <= end) {
         middle = Math.floor((start + end) / 2)
        if (nums[middle] == target) {
            return middle
        }
        if (nums[start] <= nums[middle]) {
            if (nums[middle] > target && target >= nums[start])
                end = middle
            else
                start = middle + 1
        }
        else {
            if (nums[middle] < target && target <= nums[end])
                start = middle + 1
            else
                end = middle
        }
    }
    return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 4))
console.log(search([4, 5, 6, 7, 0, 1, 2], 6))
console.log(search([4, 5, 6, 7, 0, 1, 2], 2))
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8))
console.log(search([5, 1, 3], 3))
