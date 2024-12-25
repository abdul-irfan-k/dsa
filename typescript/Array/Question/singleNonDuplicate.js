function singleNonDuplicate(nums) {
    let low = 0
    let high = nums.length - 1

    while (low < high) {
        const mid = Math.floor((low + high) / 2)
        if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) return nums[mid]

        if ((mid % 2 == 0 && nums[mid] != nums[mid + 1]) || (mid % 2 == 1 && nums[mid] != nums[mid - 1])) {
            high = mid - 1
        }

        else low = mid + 1
    }
    return nums[low]
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]))
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]))
console.log(singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 4, 8]))
console.log(singleNonDuplicate([1, 1, 2, 2, 3, 4, 4, 8, 8]))