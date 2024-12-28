// function findDisappearedNumbers(nums: number[]): number[] {
//     const result = []

//     const existingNums = new Array(nums.length + 1).fill(false)
//     for (let i = 0; i < nums.length; i++) {
//         existingNums[nums[i]] = true
//     }
//     for (let i = 1; i <= nums.length; i++) {
//         if (existingNums[i] == false) result.push(i)
//     }


//     return result
// };


function findDisappearedNumbers(nums: number[]): number[] {
    let set = new Set(nums), result = []
    for (let i = 1; i < nums.length + 1; i++) {
        if (!set.has(i)) {
            result.push(i)
        
    }
    return result
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findDisappearedNumbers([2, 1, 2, 3, 1]))
console.log(findDisappearedNumbers([1, 1]))