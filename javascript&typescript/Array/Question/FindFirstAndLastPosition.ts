function searchRange(nums: number[], target: number): number[] {
    let startIndex = -1
    let endIndex = -1

    function binarySearch(start: number, end: number) {
        if (start > end) return -1
        const middle = Math.floor((start + end) / 2)

        if (nums[middle] == target) {
            if (middle > endIndex || endIndex === -1) {
                endIndex = middle
                binarySearch(middle + 1, end)
            }
            if (middle < startIndex || startIndex === -1) {
                startIndex = middle
                binarySearch(start, middle - 1)
            }
        }


        else if (nums[middle] < target) {
            binarySearch(middle + 1, end)
        }
        else binarySearch(start, middle - 1)

    }

    binarySearch(0, nums.length - 1)

    return [startIndex, endIndex]
};


console.log(searchRange([5, 7, 7, 8, 8, 10], 8))