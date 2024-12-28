function longestPalindrome(s: string): string {
    let longestPalindrome = ""

    function getPalindrome(leftIndex: number, rightIndex: number) {
        while (leftIndex >= 0 && rightIndex <= s.length && s[leftIndex] === s[rightIndex]) {
            leftIndex--
            rightIndex++
        }
        return s.substring(leftIndex + 1, rightIndex)
    }

    for (let i = 0; i < s.length; i++) {
        let odd = getPalindrome(i, i)
        let even = getPalindrome(i, i + 1)
        if (odd.length > longestPalindrome.length)
            longestPalindrome = odd

        if (even.length > longestPalindrome.length)
            longestPalindrome = even
        if (longestPalindrome.length == s.length) return longestPalindrome
    }

    return longestPalindrome
};




// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("bb"))