function removeDuplicates(nums: number[]): number {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        i++;
        nums[i] = nums[j];
      }
    }
    return i + 1;
}

let nums = [1, 1, 2];
console.log(removeDuplicates(nums), nums);

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums), nums);
nums = [1, 1];

console.log(removeDuplicates(nums), nums);
nums = [1, 1, 2, 3];

console.log(removeDuplicates(nums), nums);
nums = [-1,0,0,0,0,3,3];

console.log(removeDuplicates(nums), nums);
