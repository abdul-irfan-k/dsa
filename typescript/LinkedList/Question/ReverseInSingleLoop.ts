import { SingleLinkedList, Node } from "../SinglyLinkedList";

type NodeType<T> = Node<T> | null;
class SlinkedList<T> extends SingleLinkedList<T> {
  reverseInSingleLoop() {
    let temp = this.head;

    if (!temp || !temp.next || !temp.next.next) return;

    let prev: NodeType<T> = temp?.next;
    let current: NodeType<T> = temp;
    let prevOldNode: NodeType<T> = temp;

    temp = temp.next;
    while (temp != null) {
      current.next = temp.next;
      prev = temp;
      prev.next = prevOldNode;
      prevOldNode = prev;

      temp = current.next;
      if (current.next == null) {
        this.head = prev;
        this.tail = current;
        break;
      }
    }
  }


  reverseInRecursive() {
    this.reverseInRecursiveHelper(this.head, null)

  }
  private reverseInRecursiveHelper(current: NodeType<T>, parent: NodeType<T>) {
    if (parent == null) this.tail = current
    const next = current?.next
    //@ts-ignore
    current?.next = parent
    if (!next) return this.head = current
    this.reverseInRecursiveHelper(next, current)
  }
}

const list = new SlinkedList<number>();
list.insert(5);
list.insert(6);
list.insert(11);
list.insert(15);
list.insert(18);

list.display();
list.reverseInRecursive()
list.display()
// list.reverseInSingleLoop();
// list.display();
// list.reverseInSingleLoop();
// list.display();
