export class Node<T> {
  public next: Node<T> | null = null;
  public prev: Node<T> | null = null;
  constructor(public data: T) {}
}

class DoublyLinkedList<T> {
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
    if(this.checkIsEmpty())return 

    let str = "";
    let temp = this.head;

    while (temp != null) {
        str +=`${temp.data} `
        temp = temp.next
    }
    console.log(str)
  }

  checkIsEmpty(){
    return this.head == null || this.tail == null
  }
}



const list = new DoublyLinkedList<number>()
list.insert(5)
list.insert(12)
list.insert(25)
list.insert(31)
list.insertAtBegin(22)
list.display()