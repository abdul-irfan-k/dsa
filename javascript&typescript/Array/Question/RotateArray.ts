// https://leetcode.com/problems/rotate-array/
function rotate(nums: number[], k: number): void {
    k %= nums.length;

    const reverse = (start: number, end: number) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]
            start++
            end--
        }
    }

    reverse(0, nums.length - 1)
    reverse(0, k - 1)
    reverse(k, nums.length - 1)
};


let nums = [1, 2, 3, 4, 5, 6, 7]
rotate(nums, 3)
console.log(nums)