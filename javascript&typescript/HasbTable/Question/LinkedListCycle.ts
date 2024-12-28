
export class Node<T = number> {
    public next: Node<T> | null = null;
    constructor(public val: T) { }
}

class ListNode {
    head: Node | null = null;
    tail: Node | null = null;



    insertInBegin(val: number) {
        const newNode: Node = new Node(val);

        if (this.checkIsEmpty()) {
            this.head = newNode;
            return;
        }

        const nextNode = this.head;
        newNode.next = nextNode;
        this.head = newNode;
    }

    insert(val: number) {
        const newNode: Node = new Node(val);

        if (this.head == null || this.tail == null) {
            this.head = this.tail = newNode;
            return;
        }

        const prevNode = this.tail;
        prevNode.next = newNode;
        this.tail = newNode;
    }

    insertAt(insertAt: number, val: number) {
        const newNode: Node = new Node(val);
        let temp = this.head;

        if (this.head == null || this.tail == null) {
            this.head = this.tail = newNode;
            return;
        }
        while (temp != null && temp.val != insertAt) {
            temp = temp.next;
        }

        if (temp == null) {
            const prevNode = this.tail;
            this.tail = newNode;
            prevNode.next = newNode;
            return;
        }

        const nextNode = temp?.next;
        temp.next = newNode;
        newNode.next = nextNode;
    }

    remove(val: number) {
        let temp: Node | null = this.head;
        let prevNode: Node | null = null;

        if (this.checkIsEmpty()) return;
        if (this.head?.val == val) {
            this.head = this.head.next;
            return;
        }
        while (temp != null && temp.val != val) {
            prevNode = temp;
            temp = temp.next;
        }

        if (this.tail?.val == val) {
            this.tail = prevNode;
            return;
        }

        if (prevNode == null || temp == null) return;
        const nextNode = temp?.next;
        prevNode.next = nextNode;
    }

    checkIsEmpty(): boolean {
        return this.head == null || this.tail == null;
    }

    peek(){
        return this.tail
    }

}





/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: Node | null): boolean {
    let isCycle = false
    const nodeMap =  new Map()

    let currentNode = head
    while(currentNode != null){
        if(nodeMap.has(currentNode))return true
        nodeMap.set(currentNode,currentNode.val)

        currentNode = currentNode.next
    }


    return isCycle
};


const list = new ListNode()
list.insert(12);
list.insert(22);
const ref = list.peek()
list.insert(5);
list.insert(45);
console.log(hasCycle(list.head))
//@ts-ignore
list.peek()?.next = ref
console.log(hasCycle(list.head))

