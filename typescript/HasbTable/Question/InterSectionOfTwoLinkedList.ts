

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

    peek() {
        return this.tail
    }

}



function getIntersectionNode(headA: Node | null, headB: Node | null): Node | null {
    const nodeMap = new Map()

    if (headA == null || headB == null) return null
    let currentNode = headA
    while (currentNode != null) {
        nodeMap.set(currentNode, currentNode.val)
        currentNode = currentNode.next
    }


    currentNode = headB

    while (currentNode != null) {
        if (nodeMap.has(currentNode)) {
            if (nodeMap.get(currentNode) == currentNode.val) return currentNode
        }

        currentNode = currentNode.next

    }
    return null
};


const list1 = new ListNode()
list1.insert(4)
list1.insert(1)
const peek = list1.peek()
list1.insert(8)
list1.insert(4)
list1.insert(5)


const list2 = new ListNode()
list2.insert(5)
list2.insert(6)
list2.peek()?.next = peek


console.log(getIntersectionNode(list1.head,list2.head))