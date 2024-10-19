function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let result = 0
    let start = 0
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum / k >= threshold && (i - start) + 1 == k) result++
        if ((i - start) + 1 == k) sum -= arr[start++]
    }

    return result
};
console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4))
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5))