// https://leetcode.com/problems/implement-stack-using-queues/description/

class MyStack {
    public stackQueue: Queue
    public stackQueueHelper: Queue
    constructor() {
        this.stackQueue = new Queue()
        this.stackQueueHelper = new Queue()
    }

    push(x: number): void {
        while (!this.stackQueue.empty()) {
            this.stackQueueHelper.enqueue(this.stackQueue.dequeue())
        }
        this.stackQueue.enqueue(x)
        while (!this.stackQueueHelper.empty()) {
            this.stackQueue.enqueue(this.stackQueueHelper.dequeue())
        }
    }

    pop(): number {
        return this.stackQueue.dequeue()
    }

    top(): number {
        return this.stackQueue.peek()
    }

    empty(): boolean {
        return this.stackQueue.empty()
    }
}



class Queue {
    public items: Record<number, number>
    public frontIndex: number
    public backIndex: number
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item: number) {
        this.items[this.backIndex] = item
        this.backIndex++
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    peek() {
        return this.items[this.frontIndex]
    }

    empty() {
        return this.frontIndex == this.backIndex
    }
}


const stack = new MyStack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
console.log(stack.top())
console.log(stack.pop())
console.log(stack.top())