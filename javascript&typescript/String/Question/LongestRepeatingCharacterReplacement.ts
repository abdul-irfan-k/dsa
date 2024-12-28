function characterReplacement(s: string, k: number): number {
    let maxLength = 0

    const count = {}
    let maxFrequency = 0
    let left = 0

    for (let right = 0; right < s.length; right++) {
        const element = s[right]
        count[element] = count[element] != undefined ? count[element] + 1 : 1
        maxFrequency = Math.max(maxFrequency, count[element])

        if (right - left - maxFrequency < k) maxLength = Math.max(maxLength, right - left + 1)
        else {
            count[s[left]] -= 1
            left++
        }
    }
    return maxLength
};
console.log(characterReplacement("AABABBA", 1))
console.log(characterReplacement("ABAB", 1))