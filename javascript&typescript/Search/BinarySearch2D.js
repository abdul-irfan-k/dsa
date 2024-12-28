function binarySearch2DArray(nums, target) {
    const row = nums.length;
    const column = nums[0].length;


    let left = 0;
    let right = row * column - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        let rowIndex = Math.floor(mid / row)
        let columnIndex = mid % column

        if (nums[rowIndex][columnIndex] == target) return true
        if (nums[rowIndex][columnIndex] < target) left = mid + 1
        else right = mid - 1


    }
    return false
}

console.log(binarySearch2DArray([[1, 5, 9], [14, 20, 21], [30, 34, 43]], 5))
console.log(binarySearch2DArray([[1, 5, 9], [14, 20, 21], [30, 34, 43]], 34))
console.log(binarySearch2DArray([[1, 5, 9], [14, 20, 21], [30, 34, 43]], 25))