// https://leetcode.com/problems/contains-duplicate/description/


function containsDuplicate(nums: number[]): boolean {
    let i = 0
    let numsSet = new Set()
    for (; i <= nums.length - 1; i++) {
        if (numsSet.has(nums[i])) return true
        numsSet.add(nums[i])
    }
    return false
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))