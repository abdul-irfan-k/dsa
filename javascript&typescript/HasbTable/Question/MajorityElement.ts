//https://leetcode.com/problems/majority-element/
function majorityElement(nums: number[]): number {
  //   const numberRepition = new Map<number, number>();

  //   for (let i = 0; i <= nums.length - 1; i++) {
  //     const num = nums[i]
  //       let numVal = numberRepition.get(num);
  //       let numRepeatCount = numVal != undefined ? numVal + 1 : 1;
  //       if (numRepeatCount > Math.floor(nums.length / 2)) return num;
  //       numberRepition.set(num, numRepeatCount);
  //     }

  //   return NaN;

  let res = 0;
  let majority = 0;

  for (let n of nums) {
    if (majority === 0) {
      res = n;
    }

    majority += n === res ? 1 : -1;
  }

  return res;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
