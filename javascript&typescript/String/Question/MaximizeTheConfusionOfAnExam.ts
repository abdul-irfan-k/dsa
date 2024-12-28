// https://leetcode.com/problems/maximize-the-confusion-of-an-exam/description/

function maxConsecutiveAnswers(answerKey: string, k: number): number {
    let max = 0
    let trueCount = 0
    let falseCount = 0
    let start = 0

    for (let i = 0; i < answerKey.length; i++) {
        if (answerKey.charAt(i) == "T") trueCount++
        else falseCount++

        while (trueCount > k && falseCount > k) {
            if (answerKey.charAt(start) == "T") trueCount--
            else falseCount--
            start++
        }

        max = Math.max(max, i - start + 1)
    }

    return max
};

console.log(maxConsecutiveAnswers("TTFF", 2))
console.log(maxConsecutiveAnswers("TFFT", 1))
console.log(maxConsecutiveAnswers("TTFTTFTT", 1))
console.log("asdf".charAt(1))