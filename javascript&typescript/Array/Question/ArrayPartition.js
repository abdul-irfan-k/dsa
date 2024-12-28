// https://leetcode.com/problems/array-partition/description/

// const  arrayPairSum = function (nums) {
//     nums.sort((a,b) => a-b)
//     console.log(nums)

//     let i = 0
//     let totalValue = 0

//     while (i <= nums.length - 1) {
//         totalValue += Math.min(nums[i], nums[i + 1])
//         i = i + 2
//     }
//     return totalValue
// };

// console.log(arrayPairSum([6,2,6,5,1,2]))
// console.log(arrayPairSum([-470, 66, -4835, -5623]))


const  arrayPairSum = function (nums) {
    nums.sort((a,b) => a-b)
    console.log(nums)

    let i = 0
    let totalValue = 0

    while (i <= nums.length - 1) {
        totalValue += nums[i]
        i = i + 2
    }
    return totalValue
};

console.log(arrayPairSum([6,2,6,5,1,2]))
console.log(arrayPairSum([-470, 66, -4835, -5623]))

