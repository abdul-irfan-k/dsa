// https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/

// function maximumLengthSubstring(s: string): number {
//     let max = 0
//     let start = 0
//     const freq: any = {}

//     for (const [index, ch] of s.split("").entries()) {
//         freq[ch] = 1 + (freq[ch] ?? 0)

//         while (freq[ch] == 3) {
//             freq[s[start]] = freq[s[start]] - 1
//             start++
//         }

//         max = Math.max(max, index - start + 1)
//     }
//     return max
// };





function maximumLengthSubstring(s: string): number {
    const map = new Map();
    let count = 0;

    for (let i = 0, j = 0; j < s.length; j++) {
        map.set(s[j], (map.get(s[j]) || 0) + 1);

        while (map.get(s[j]) > 2) {
            map.set(s[i], map.get(s[i++]) - 1);
        }

        count = Math.max(count, j - i + 1);
    }

    return count;
};
console.log(maximumLengthSubstring("bcbbbcba"))