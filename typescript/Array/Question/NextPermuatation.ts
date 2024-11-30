function nextPermutation(nums: number[]): void {
  let n = nums.length;

  let ind = -1;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      ind = i;
      break;
    }
  }

  if (ind == -1) { nums.reverse();
    return 
}
  for (let i = n - 1; i > ind; i--) {
    if (nums[i] > nums[ind]) {
      [nums[i], nums[ind]] = [nums[ind], nums[i]];
      break;
    }
  }


  nums.splice(ind+1,n-ind+1,...nums.slice(ind+1).reverse())
}

let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);

nums = [1, 3, 2];
nextPermutation(nums);
console.log(nums);
nums = [5, 4, 7, 5, 3, 2];
nextPermutation(nums);
console.log(nums);

