const lengthOfLongestSubstring = (s: string) => {
    let maxLength = 0
    let start = 0

    const characterRepetation = new Map()
    let i = 0
    for (; i <= s.length - 1; i++) {
        if (characterRepetation.has(s[i]) && characterRepetation.get(s[i]) + 1 > start) {
            if (i - start > maxLength) maxLength = i - start
            start = characterRepetation.get(s[i]) + 1
        }
        characterRepetation.set(s[i], i)
    }
    if (i - start > maxLength) return i - start
    return maxLength
};
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("p"))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring("abcd"))
console.log(lengthOfLongestSubstring("aab"))