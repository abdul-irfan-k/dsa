// function threeSum(nums) {
// let low = 0

// let n = nums.length
// let ans = []
// nums.sort((a, b) => a - b)

// for (; low < n; low++) {
//     if (low !== 0 && nums[low] === nums[low - 1]) continue
//     let mid = low + 1
//     let high = nums.length - 1

//     while (mid < high) {
//         let sum = nums[low] + nums[mid] + nums[high]

//         if (sum > 0) high--
//         else if (sum < 0) mid++

//         else {
//             ans.push([nums[low], nums[mid], nums[high]])
//             mid++
//             high--

//             while (mid < high && nums[mid] === nums[mid - 1]) mid++
//             while (high > mid && nums[high] === nums[high + 1]) high--
//         }
//     }
// }
// return ans
// }

// using Map

function threeSum(nums) {
    nums.sort((a, b) => a - b)
    let n = nums.length
    if (n < 3 || nums[0] > 0) return []

    let result = []
    const hashMap = new Map()

    for (let i = 0; i < n; i++) {
        hashMap.set(nums[i], i)
    }


    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) break

        for (let j = i + 1; j < n; j++) {
            const required = -(nums[i] + nums[j])
            if (hashMap.has(required) && hashMap.get(required) > j) {
                result.push([nums[i], nums[j], required])
            }
            j = hashMap.get(nums[j])
        }
        i = hashMap.get(nums[i])
    }
    return result
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
