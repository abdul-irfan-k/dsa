// https://leetcode.com/problems/valid-anagram/

function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false

    const letterRepetation = new Map()
    for (let i = 0; i < s.length; i++) {
        const previous = letterRepetation.get(s[i]) ?? 0
        letterRepetation.set(s[i], previous + 1)
    }


    for (let j = 0; j < t.length; j++) {
        if (!letterRepetation.has(t[j]) || letterRepetation.get(t[j]) == 0) return false
        letterRepetation.set(t[j], letterRepetation.get(t[j]) - 1)
    }
    return true
};

// function isAnagram(s: string, t: string): boolean {
//     if (s.length != t.length) return false

//     const sortedS = s.split("").sort()
//     const sortedT = t.split("").sort()

//     return sortedS.join() === sortedT.join()
// };

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("anagram", "nagars"))
console.log(isAnagram("ab", "a"))   