class Solution {
    // Function to return a list containing the union of the two arrays.
    static findUnion(a, b) {
        const unionArray = []

        let i = 0
        let j = 0
        let k = 0

        if (a[i] > b[j]) unionArray[k++] = b[j++]
        else unionArray[k++] = a[i++]
        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                if (a[i] > unionArray[k - 1]) {
                    unionArray[k++] = a[i]
                }
                i++
            }
            else {
                if (b[j] > unionArray[k - 1]) {
                    unionArray[k++] = b[j]
                }
                j++
            }
        }

        while (i < a.length) {
            if (a[i] > unionArray[k - 1]) unionArray[k++] = a[i]
            i++
        }
        while (j < b.length) {
            if (b[j] > unionArray[k - 1]) unionArray[k++] = b[j]
            j++
        }

        return unionArray
    }
}

console.log(Solution.findUnion([1, 2, 3, 4, 5], [1, 2, 3, 6, 7]))