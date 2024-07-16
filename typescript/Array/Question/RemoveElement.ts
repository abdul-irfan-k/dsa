function removeElement(nums: number[], val: number): number {
    let startP = 0
    let endP = nums.length - 1;


    while (startP <= endP) {
        if (nums[startP] === val) {
            if (nums[endP] === val) {
                endP--;
                continue;
            } else {
                nums[startP] = nums[endP]
                nums[endP] = -1
                endP--
            }
        }
        startP++
    }

    return startP  
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
console.log(removeElement([0], 0))