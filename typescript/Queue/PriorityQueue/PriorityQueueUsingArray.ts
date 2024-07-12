class QElement {
    constructor(public val: any,
        public priority: number) {
    }
}

class PriorityQueue {
    items: Array<QElement>
    constructor() {
        this.items = []
    }


    enqueue(val: any, priority: number) {
        let isContain = false
        let qElement = new QElement(val, priority)

        for (let i = 0; i < this.items.length; i++) {
            if (qElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, qElement)
                isContain = true
                break
            }
        }
        if (!isContain) this.items.push(qElement)
    }

    dequeue() {
        if (this.empty()) return "under flow"
        return this.items.shift()
    }
    empty() {
        return this.items.length == 0
    }

    front(){
        if(this.empty())return "no elements in queue"
        return this.items[0]
    }
    rear(){
        if(this.empty())return "no elements in queue"
        return this.items[this.items.length-1]
    }
    printQueue(){
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i].val + " ";
        console.log(str)
    }
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sheru", 3);
priorityQueue.enqueue("Kaleel", 5);
priorityQueue.enqueue("Imran", 1);

priorityQueue.printQueue()
priorityQueue.dequeue()
priorityQueue.printQueue()

