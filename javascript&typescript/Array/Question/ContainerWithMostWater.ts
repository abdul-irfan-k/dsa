// https://leetcode.com/problems/container-with-most-water/description/

function maxArea(height: number[]): number {
    let maxWater = 0

    let i = 0
    let j = height.length - 1

    while (i < j) {
        const area =Math.min(height[i], height[j]) * (j - i)
        if ( area> maxWater) maxWater = area
        if (height[i] < height[j]) {
            i++
        }
        else {
            j--
        }
    }

    return maxWater
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) //49   
console.log(maxArea([1, 1])) // 1
console.log(maxArea([4, 4, 4, 4, 4])) // 16
console.log(maxArea([5, 4, 3, 2, 1])) // 6
console.log(maxArea([1, 2, 3, 4, 5])) //6
console.log(maxArea([1, 3, 2, 5, 2, 3, 1])) //12
console.log(maxArea([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])) //25