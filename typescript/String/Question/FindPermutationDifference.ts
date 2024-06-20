function findPermutationDifference(s: string, t: string): number {
    let difference = 0

    for (let i = 0; i < s.length; i++) {
        let tIndex = t.indexOf(s[i])
        let indexDifference = Math.abs(i - tIndex)
        difference += indexDifference
    }
    return difference
};

console.log(findPermutationDifference("abcde", "edbac"))
console.log(findPermutationDifference("abc", "bac"))