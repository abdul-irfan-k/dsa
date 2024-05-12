export class Node<T> {
  next: Node<T> | null = null;
  constructor(public data: T) {}
}

class Queue<T> {
  front: Node<T> | null = null;
  rear: Node<T> | null = null;

  dequeue() {
    if (this.front == null) return console.log("Queue is empty");
    let temp = this.front;
    if (this.front == this.rear) {
      console.log("front and rear is same ");
    }
    this.front = this.front.next;
    return temp;
  }
  enqueue(element: T) {
    const newNode = new Node(element);
    if (this.front == null || this.rear == null) {
      this.front = this.rear = newNode;
      return;
    }

    this.rear.next = newNode;
    this.rear = newNode;
  }

  peek() {
    return this.front;
  }
  isEmpty(front: Node<T> | null = this.front): front is Node<T> {
    return front instanceof Node;
  }

  display() {
    let temp = this.front;
    if (!this.isEmpty(temp)) return console.log("queue is empty");

    let str = "";
    while (temp != null) {
      str += `${temp.data} `;
      temp = temp.next;
    }
    console.log(str)
  }
}


const queue = new Queue<number>()
queue.enqueue(10)
queue.enqueue(45)
queue.enqueue(31)
console.log(queue.peek())
queue.enqueue(17)
queue.display()
queue.dequeue()
queue.display()

