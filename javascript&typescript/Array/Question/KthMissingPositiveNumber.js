function findKthPositive(arr, k) {
    let start = 0
    let end = arr.length

    if (arr[0] > k) return k
    while (start < end) {
        const mid = Math.floor((start + end) / 2) + 1
        if (arr[mid] <= mid + k) {
            start = mid
        }
        else {
            end = mid - 1
        }
    }
    return arr[start] + (k - (arr[start] - start)) + 1
};



console.log(findKthPositive([2, 3, 4, 7, 11], 5))
console.log(findKthPositive([1, 2, 3, 4], 2))