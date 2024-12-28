class Solution {
    findKRotation(arr) {
        let low = 0
        let high = arr.length - 1


        while (low < high) {
            if (arr[low] <= arr[high]) return low
            const mid = Math.floor((low + high) / 2)


            if (arr[mid] < arr[low]) high = mid
            else {
                low = mid
                if (arr[mid] > arr[mid + 1]) low += 1

            }
        }
        return low
    }
}

console.log(new Solution().findKRotation([5, 1, 2, 3, 4]))