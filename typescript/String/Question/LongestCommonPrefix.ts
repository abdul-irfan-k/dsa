function longestCommonPrefix(strs: string[]): string {
    let commonPrefix = strs[0] ?? ""

    for (let i = 0; i < strs.length; i++) {
        for (let c = 0; c < commonPrefix.length; c++) {
            if (commonPrefix[c] != strs[i][c]) {
                commonPrefix = commonPrefix.slice(0, c)
            }
        }
    }
    return commonPrefix
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix(["", "b", "c"]))
console.log(longestCommonPrefix(["asdf"]))
console.log(longestCommonPrefix([]))