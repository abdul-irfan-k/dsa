//@ts-nocheck
class Solution {
    // Function to count the occurrences of x in the array.
    static countFreq(arr, target) {
        const start = this.findPosition(arr, target, true)
        const end = this.findPosition(arr, target, false)


        if (start === -1 | end === -1) return 0
        return end - start + 1
    }


    static findPosition(arr, target, startIndex) {
        let start = 0
        let end = arr.length - 1

        let pos = -1
        while (start <= end) {
            const mid = Math.floor((start + end) / 2)

            if (arr[mid] == target) {
                pos = mid
                if (startIndex) end = mid - 1
                else start = mid + 1
            }

            else if (arr[mid] > target) {
                end = mid - 1
            }
            else start = mid + 1
        }
        return pos
    }
}


console.log(Solution.countFreq([1, 1, 2, 2, 2, 2, 3], 2))
console.log(Solution.countFreq([1, 1, 2, 2, 2, 2, 3], 1))
console.log(Solution.countFreq([1, 1, 2, 2, 2, 2, 3], 0))