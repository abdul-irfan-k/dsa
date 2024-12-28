export class Node<T> {
  public next: Node<T> | null = null;
  public prev: Node<T> | null = null;
  constructor(public data: T) {}
}

export type NodeType<T> = Node<T> | null;
export class DoublyLinkedList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;

  insert(data: T) {
    const newNode = new Node(data);

    if (this.head == null || this.tail == null) {
      this.head = this.tail = newNode;
      return;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }

  insertAtBegin(data: T) {
    const newNode = new Node(data);

    if (this.head == null || this.tail == null) {
      this.head = this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = this.head.prev;
  }

  display() {
    if (this.checkIsEmpty()) return;

    let str = "";
    let temp = this.head;

    while (temp != null) {
      str += `${temp.data} `;
      temp = temp.next;
    }
    console.log(str);
  }
  displayReverse() {
    if (this.checkIsEmpty()) return;

    let str = "";
    let temp = this.tail;

    while (temp != null) {
      str += `${temp.data} `;
      temp = temp.prev;
    }
    console.log(str);
  }

  checkIsEmpty() {
    return this.head == null || this.tail == null;
  }

  remove(element: T) {
    if (this.head == null || this.tail == null) return;

    if (this.head.data == element) {
      this.head = this.head.next;
      return;
    }

    let temp: NodeType<T> = this.head;

    while (temp?.next != null && temp.data != element) {
      temp = temp.next;
    }

    if (temp.next == null && temp.data == element) {
      this.tail = this.tail.prev;
      //@ts-ignore
      this.tail.next = null;
      return;
    }
    if (temp.data == element) {
      const previousNode = temp.prev;
      const nextNode = temp.next
      //@ts-ignore
      previousNode.next = nextNode;
      //@ts-ignore
      nextNode?.prev = previousNode
      return;
    }
    return;
  }
}

// const list = new DoublyLinkedList<number>();
// list.insert(5);
// list.insert(12);
// list.insert(25);
// list.insert(43);
// list.insert(19);
// list.insert(31);
// // list.insertAtBegin(22);


// list.remove(43)
// list.remove(19)
// list.remove(31)

// list.display()
// list.displayReverse()