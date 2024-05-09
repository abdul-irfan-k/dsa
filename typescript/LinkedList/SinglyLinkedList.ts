export class Node<T> {
  public next: Node<T> | null = null;
  constructor(public data: T) {}
}

export class SingleLinkedList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;

  display() {
    let temp = this.head;

    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  insertInBegin(data: T) {
    const newNode: Node<T> = new Node(data);

    if (this.head == null) {
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
}

const list = new SingleLinkedList<number>();
list.insert(12);
list.insert(22);
list.insert(5);
list.insert(45);


list.insertAt(22,7)
list.display();
