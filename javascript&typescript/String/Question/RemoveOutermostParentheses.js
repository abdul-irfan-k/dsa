function removeOuterParentheses(s) {
    let start = 0
    let result = ""
    let nestedParantheses = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            nestedParantheses += 1
        }
        else if (s[i] === ")") {
            nestedParantheses -= 1
            if (nestedParantheses == 0) {
                result += s.substring(start + 1, i)
                start = i + 1
            }
        }
    }

    return result
};

console.log(removeOuterParentheses("(()())(())"))
console.log(removeOuterParentheses("()()"))
console.log(removeOuterParentheses("(()())(())(()(()))"))