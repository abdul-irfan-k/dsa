// function largestNumber(nums: number[]): string {
//     let result = ""
//     nums.sort((a, b) => {
//         const strA = parseInt(a.toString() + b.toString())
//         const strB = parseInt(b.toString() + a.toString())
//         return strA - strB
//     })

//     for (let j = nums.length - 1; j >= 0; j--) {
//         result += nums[j]
//     }

//     result = BigInt(result).toString()
//     if (result[-1] == 'n') result.slice(0, -1)
//     return result
// };
function largestNumber(nums: number[]): string {
    nums.sort((a, b) => `${a}${b}` < `${b}${a}` ? 1 : -1)

    if (nums[0] === 0) {
        return '0'
    }

    return nums.join('')
};
console.log(largestNumber([3, 30, 34, 5, 9]))
console.log(largestNumber([10,2]))
console.log(largestNumber([10]))
console.log(largestNumber([0, 0,10]))
console.log(largestNumber([999999998, 999999997, 999999999]))
