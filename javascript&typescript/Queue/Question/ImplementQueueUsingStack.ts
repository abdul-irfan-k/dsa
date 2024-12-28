
class MyQueue {
    outputStack: Stack
    inputStack: Stack
    constructor() {
        this.outputStack = new Stack()
        this.inputStack = new Stack()
    }

    push(x: number): void {
        while (this.outputStack.stack.length > 0) {
            this.inputStack.push(this.outputStack.pop()!)
        }

        this.inputStack.push(x)

        while (this.inputStack.stack.length > 0) {
            this.outputStack.push(this.inputStack.pop()!)
        }
    }

    pop(): number {
        return this.outputStack.pop()!
    }

    peek(): number {
        return this.outputStack.peek()!
    }

    empty(): boolean {
        return this.outputStack.empty()
    }
}


class Stack {
    stack: number[];
    constructor() {
        this.stack = [];
    }

    push(data: number) {
        this.stack[this.stack.length] = data;
    }

    pop(): number | undefined {
        if (this.empty()) return undefined;

        let temp = this.stack[this.stack.length - 1];
        this.stack.pop();
        return temp;
    }
    empty(): boolean {
        return this.stack.length < 1
    }
    peek(): number | undefined {
        if (this.empty()) return undefined
        return this.stack[this.stack.length - 1];
    }
}


const queue = new MyQueue()
queue.push(4)
queue.push(5)
console.log(queue.peek())
queue.push(11)
queue.push(15)
queue.push(7)
console.log(queue.pop())
console.log(queue.peek())