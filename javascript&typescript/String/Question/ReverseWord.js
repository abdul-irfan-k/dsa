function reverseWords() {
    let count = 0
    let result = []
    let i = 0
    for (; i < s.length; i++) {
        if (s[i] === " " && count > 0) {
            result.push(s.substring(i - count, i))
            count = 0
        }
        else if (s[i] !== " ") count++
    }
    if (count > 0) result.push(s.substring(i - count, i))

    return result.reverse().join(" ")
}