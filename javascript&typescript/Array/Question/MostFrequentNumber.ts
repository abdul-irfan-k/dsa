// https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/

// function mostFrequent(nums: number[], key: number): number {
//     const frequentNumbers = new Map()

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i - 1] == key) {
//             frequentNumbers.set(nums[i], (frequentNumbers.get(nums[i]) ?? 0) + 1)
//         }
//     }

//     let maxValue = 0
//     let maxKey = 0

//     for (const [key, value] of frequentNumbers.entries()) {
//         if (value > maxValue) {
//             maxValue = value;
//             maxKey = key;
//         }
//     }


//     return maxKey
// };


const mostFrequent = (nums, key) => {
    const freq = {};
    let ret = 0;
    for (let i = 0, max = 0; i < nums.length - 1; i++) {
        if (nums[i] !== key) continue;
        const target = nums[i + 1];
        freq[target] = (freq[target] || 0) + 1;
        if (freq[target] > max) {
            max = freq[target];
            ret = target;
        }
    }
    return ret;
};

console.log(mostFrequent([1, 100, 200, 1, 100], 1))
console.log(mostFrequent([2, 2, 2, 2, 3], 2))