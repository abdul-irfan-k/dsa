//@ts-nocheck

class Solution {
    static getFloorAndCeil(x, arr) {
        arr.sort((a, b) => a - b)


        let start = 0
        let end = arr.length - 1
        let floor = -1;
        let ceil = -1;


        while (start <= end) {
            const middle = Math.floor((start + end) / 2)
            if (arr[middle] == x) return [x, x]
            else if (arr[middle] < x) {
                floor = arr[middle]; // Update floor
                start = middle + 1;
            } else {
                ceil = arr[middle]; // Update ceil
                end = middle - 1;
            }
        }

        return [floor, ceil]
    }
}


console.log(Solution.getFloorAndCeil(7, [5, 6, 8, 9, 6, 5, 5, 6]))

