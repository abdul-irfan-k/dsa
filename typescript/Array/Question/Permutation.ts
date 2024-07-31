function permute(nums: number[]): number[][] {

    const permuteHelper = (nums: number[]): number[][] => {
        if (nums.length == 1) return [nums.slice()]

        const res = []

        for (let i = 0; i < nums.length; i++) {
            const firstElement = nums.shift()
            const permutation = permuteHelper(nums.slice())

            for (let p of permutation) {
                p.push(firstElement)
            }

            res.push(...permutation)
            nums.push(firstElement)
        }

        return res
    }

    return permuteHelper(nums)

};

console.log(permute([1, 2, 3]))