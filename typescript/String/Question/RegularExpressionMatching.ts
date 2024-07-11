function isMatch(s: string, p: string): boolean {
    let ans: boolean;
    function dp(a: number, b: number): boolean {
        if (ans) return ans

        if (b === p.length) {
            ans = a === s.length;
        } else {
            const first_match = (a < s.length &&
                (p[b] === s[a] ||
                    p[b] === '.'));

            if (b + 1 < p.length && p[b + 1] === '*') {
                ans = (dp(a, b + 2) || (first_match && dp(a + 1, b)));
            } else {
                ans = first_match && dp(a + 1, b + 1);
            }
        }
        return ans
    }

    return dp(0, 0);
};

console.log(isMatch('abc', 'a'))
console.log(isMatch('aaaa', 'a*'))
console.log(isMatch('aaaabcaa', 'a*aa'))
console.log(isMatch("aab", "c*a*b"))