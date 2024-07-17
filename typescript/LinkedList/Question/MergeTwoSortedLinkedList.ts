class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number,next?:ListNode) {
        this.val = val
        this.next = next ?? null
    }
}

class LinkedList {
    head: ListNode | null = null;
    tail: ListNode | null = null;



    insertInBegin(val: number) {
        const newNode: ListNode = new ListNode(val);

        if (this.checkIsEmpty()) {
            this.head = newNode;
            return;
        }

        const nextNode = this.head;
        newNode.next = nextNode;
        this.head = newNode;
    }

    insert(val: number) {
        const newNode: ListNode = new ListNode(val);

        if (this.head == null || this.tail == null) {
            this.head = this.tail = newNode;
            return;
        }

        const prevNode = this.tail;
        prevNode.next = newNode;
        this.tail = newNode;
    }



    remove(val: number) {
        let temp: ListNode | null = this.head;
        let prevNode: ListNode | null = null;

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

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     if (list1 == null) return list2
//     if (list2 == null) return list1


//     let head = null
//     let list1NextNode = list1
//     let list2NextNode = list2
//     let currentNode = null

//     if (list1.val < list2.val) {
//         head = list1
//         currentNode = list1
//         list1NextNode = list1NextNode?.next ?? null
//     }
//     else {
//         head = list2
//         list2NextNode = list2NextNode?.next ?? null
//         currentNode = head
//     }
//     while (list1NextNode != null && list2NextNode != null) {
//         if (list1NextNode.val < list2NextNode.val) {
//             currentNode.next = list1NextNode
//             list1NextNode = list1NextNode.next
//         }function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//         else {
//             currentNode.next = list2NextNode
//             list2NextNode = list2NextNode.next
//         }
//         currentNode = currentNode?.next
//     }


//     while(list1NextNode != null){
//         currentNode.next = list1NextNode
//         list1NextNode = list1NextNode.next
//         currentNode = currentNode.next
//     }
//     while(list2NextNode != null){
//         currentNode.next = list2NextNode
//         list2NextNode = list2NextNode.next ?? null
//         currentNode = currentNode.next
//     }
    
//     return head
// };
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    if (!list1) return list2;
    if (!list2) return list1;

    let merged: ListNode;

    if (list1.val < list2.val) {
        merged = new ListNode(list1.val, mergeTwoLists(list1.next, list2));
    } else {
        merged = new ListNode(list2.val, mergeTwoLists(list1, list2.next));
    }

    return merged;
}



const list1 = new LinkedList()
// list1.insert(3)
// list1.insert(7)
// list1.insert(10)
list1.insert(1)
list1.insert(2)
list1.insert(4)


const list2 = new LinkedList()
// list2.insert(2)
// list2.insert(4)
// list2.insert(8)
// list2.insert(13)
list2.insert(1)
list2.insert(3)
list2.insert(4)
list2.insert(13)
const result = mergeTwoLists(list1.head, list2.head)
let currentNode = result
while (currentNode != null) {
    console.log(currentNode.val)
    currentNode = currentNode.next
}