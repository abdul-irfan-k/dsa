function countGoodSubstrings(s: string): number {
    let goodCount = 0

    let start = 0
    while (start <= s.length - 3) {
        if (new Set(s.slice(start, start + 3).split('')).size == 3) goodCount++
        start++
    }
    return goodCount
};


console.log(countGoodSubstrings("xyzzazbc"))
console.log(countGoodSubstrings("xyzzaz"))
console.log(countGoodSubstrings("aababcabc"))