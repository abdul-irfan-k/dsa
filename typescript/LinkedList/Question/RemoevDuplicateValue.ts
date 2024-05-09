// Removing duplicate value
import { Node, SingleLinkedList } from "../SinglyLinkedList";

class SLinkedList<T> extends SingleLinkedList<T> {
  removeDuplicate() {
    if (this.head == null) return;

    let temp: Node<T> | null = this.head;

    while (temp != null) {
      let nextNode: Node<T> | null = temp.next;

      while (temp.data == nextNode?.data && nextNode.next != null) {
        nextNode = nextNode?.next;
      }

      if (temp.data == nextNode?.data && nextNode == this.tail) {
        temp.next = null;
        this.tail = temp;
        return;
      }

      temp.next = nextNode;
      temp = temp.next;
    }
  }
}

const list = new SLinkedList<number>();
list.insert(10);
list.insert(40);
list.insert(40);
list.insert(40);
list.insert(70);
list.insert(70);
list.insert(70);

list.display();
list.removeDuplicate();
list.display();
