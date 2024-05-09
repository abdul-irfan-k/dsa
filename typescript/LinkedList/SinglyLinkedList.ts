export class Node<T> {
  public next: Node<T> | null = null;
  constructor(public data: T) {}
}

export class SingleLinkedList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;

  display() {
    let temp = this.head;

    let str = "";
    while (temp != null) {
      str += `${temp.data} `;
      temp = temp.next;
    }
    console.log(str)
  }

  insertInBegin(data: T) {
    const newNode: Node<T> = new Node(data);

    if (this.checkIsEmpty()) {
      this.head = newNode;
      return;
    }

    const nextNode = this.head;
    newNode.next = nextNode;
    this.head = newNode;
  }

  insert(data: T) {
    const newNode: Node<T> = new Node(data);

    if (this.head == null || this.tail == null) {
      this.head = this.tail = newNode;
      return;
    }

    const prevNode = this.tail;
    prevNode.next = newNode;
    this.tail = newNode;
  }

  insertAt(insertAt: T, data: T) {
    const newNode: Node<T> = new Node(data);
    let temp = this.head;

    if (this.head == null || this.tail == null) {
      this.head = this.tail = newNode;
      return;
    }
    while (temp != null && temp.data != insertAt) {
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

  remove(data: T) {
    let temp: Node<T> | null = this.head;
    let prevNode: Node<T> | null = null;

    if (this.checkIsEmpty()) return;
    if (this.head?.data == data) {
      this.head = this.head.next;
      return;
    }
    while (temp != null && temp.data != data) {
      prevNode = temp;
      temp = temp.next;
    }

    if (this.tail?.data == data) {
      this.tail = prevNode;
      return;
    }

    if (prevNode == null || temp == null) return;
    const nextNode = temp?.next;
    prevNode.next = nextNode;
  }

  checkIsEmpty(): boolean {
    return this.head == null || this.tail == null
  }
}

const list = new SingleLinkedList<number>();
list.insert(12);
list.insert(22);
list.insert(5);
list.insert(45);

list.display();

list.remove(2)
list.display()