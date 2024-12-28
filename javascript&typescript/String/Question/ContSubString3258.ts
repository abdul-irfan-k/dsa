function countKConstraintSubstrings(s: string, k: number): number {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        let zeros = 0
        let ones = 0


        if (s[i] == "0") zeros++
        else ones++
        count++


        for (let j = i + 1; j < s.length; j++) {
            if (s[j] == "0") zeros++
            else ones++

            if (zeros <= k || ones <= k) count++
            else break
        }
    }
    return count
};
console.log(countKConstraintSubstrings("10101", 1))
console.log(countKConstraintSubstrings("11111", 5))

// 11111
// 5
// 4
// 3
// 2
// 1