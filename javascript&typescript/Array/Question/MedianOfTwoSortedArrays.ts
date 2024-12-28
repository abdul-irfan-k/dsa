function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let result = 0

    let totalLength = nums1.length + nums2.length
    let i = 0
    let j = 0
    let k = 0

    while (k < totalLength / 2) {
        if (nums1[i] < nums2[j] || nums2[j] == undefined) {
            result = nums1[i]
            i++
            k++
        }
        else {
            result = nums2[j]
            j++
            k++
        }
    }
    if (totalLength % 2 == 0) {
        const nextEelement = nums1[i] < nums2[j] || nums2[j] == undefined ? nums1[i] : nums2[j]
        return (result + nextEelement) / 2
    }
    return result
};

console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([1, 3], [2, 6, 7]))
console.log(findMedianSortedArrays([], [1, 2]))
// console.log(findMedianSortedArrays([4], [1, 2]))