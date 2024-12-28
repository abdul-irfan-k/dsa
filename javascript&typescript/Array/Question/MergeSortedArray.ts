function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let endIndex = nums1.length - 1
    m = m-1
    n = n-1

    while (endIndex >= 0) {
        if (nums2[n] >= nums1[m] || m < 0) {
            nums1[endIndex] = nums2[n]
            n--
        } else {
            nums1[endIndex] = nums1[m]
            m--
        }
        endIndex--
    }
};
let nums1: number[] = [1, 2, 3, 0, 0, 0]
let nums2: number[] = [2, 5, 6]

merge(nums1, 3, nums2, 3)
console.log(nums1)


nums1 = [4, 0, 0, 0, 0, 0]
nums2 = [1, 2, 3, 5, 6]

merge(nums1, 1, nums2, 5)
console.log(nums1)