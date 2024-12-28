
class Stack {
    stack: string[];
    constructor() {
        this.stack = [];
    }

    push(data: string) {
        this.stack[this.stack.length] = data;
    }

    pop(): string | undefined {
        if (this.empty()) return undefined;

        let temp = this.stack[this.stack.length - 1];
        this.stack.pop();
        return temp;
    }
    empty(): boolean {
        return this.stack.length < 1
    }
    peek(): string | undefined {
        if (this.empty()) return undefined
        return this.stack[this.stack.length - 1];
    }
}


function isValid(s: string): boolean {
    const bracketsPair = new Map([['{', '}'], ['[', ']'], ['(', ')']])
    const bracketClosingOrder = new Stack()

    for (let i = 0; i < s.length; i++) {
        let element = s[i]

        if (bracketsPair.has(element)) {
            bracketClosingOrder.push(bracketsPair.get(element))
        }
        else if (element == '}' || element == "]" || element == ")") {
            if (bracketClosingOrder.peek() != element) return false
            bracketClosingOrder.pop()
        }
    }

    return bracketClosingOrder.empty()
};



console.log(isValid("()"))
console.log(isValid("([{()}])"))
console.log(isValid("(["))