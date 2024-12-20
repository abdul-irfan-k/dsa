function findMin(nums: number[]): number {
    let low = 0
    let high = nums.length - 1

    while (low < high) {
        const mid = Math.floor((low + high) / 2)
        if (nums[low] < nums[high]) return nums[low]
        if (nums[low] < nums[high] || nums[mid] < nums[low]) high = mid
        else {
            low = mid
            if (nums[mid] > nums[mid + 1]) low += 1
        }
    }
    return nums[low]
};


console.log(findMin([5, 1, 2, 3, 4]))