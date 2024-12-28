function breakWord(sentence: string, dict: any, memo: any) {
    if (sentence == "") return true
    if (memo[sentence] !== undefined) return memo[sentence]

    for (let i = 0; i < sentence.length; i++) {
        const left = sentence.slice(0, i + 1)
        const right = sentence.slice(i + 1, sentence.length)

        if (dict.has(left) && breakWord(right, dict, memo)) {
            memo[sentence] = true
            return true
        }
    }
    memo[sentence] = false
    return memo[sentence]
}
function wordBreak(s: string, wordDict: string[]): boolean {
    const dict = new Set(wordDict);
    const memo = {};
    return breakWord(s, dict, memo);
};