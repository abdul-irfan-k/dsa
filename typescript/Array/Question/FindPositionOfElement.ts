// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// ##### Recursive #####

// function searchRange(nums: number[], target: number): number[] {
//     let start = -1
//     let end = -1

//     function searchRangeHelper(startIndex: number, endIndex: number) {
//         if (startIndex > endIndex) return
//         const middle = Math.floor((endIndex + startIndex) / 2)
//         if (nums[middle] == target) {
//             if (start > middle || start == -1) start = middle
//             if (end < middle || start == -1) end = middle

//             if (nums[middle - 1] == target) searchRangeHelper(startIndex, middle - 1)
//             if (nums[middle + 1] == target) searchRangeHelper(middle + 1, endIndex)
//         }
//         else if (nums[middle] > target) searchRangeHelper(startIndex, middle - 1)
//         else searchRangeHelper(middle + 1, endIndex)
//     }

//     searchRangeHelper(0, nums.length - 1)
//     return [start, end]
// };


// ##### Linear #####

function searchRange(nums: number[], target: number): number[] {
    const binarySearch = (nums: number[], target: number, isSearchingLeft: boolean): number => {
        let left = 0;
        let right = nums.length - 1;
        let idx = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] > target) right = mid - 1;
            else if (nums[mid] < target) left = mid + 1;
            else {
                idx = mid;
                if (isSearchingLeft) right = mid - 1;
                else left = mid + 1;
            }
        }

        return idx;
    };

    const left = binarySearch(nums, target, true);
    const right = binarySearch(nums, target, false);

    return [left, right];
};

console.log("hello")
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 6, 8, 8, 8, 8, 8, 8, 8, 9, 10, 11, 12], 8))


