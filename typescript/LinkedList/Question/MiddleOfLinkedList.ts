import { SingleLinkedList } from "../SinglyLinkedList";

class SlinkedList extends SingleLinkedList<number> {
  findMiddle() {
    let singleStep = this.head;
    let temp = this.head;

    while ((temp != null && temp.next?.next != null) || temp?.next != null) {
      if (singleStep?.next) singleStep = singleStep?.next;
      temp = temp.next?.next;
    }

    return singleStep;
  }
}

const list = new SlinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(7);
list.insert(8);

console.log(list.findMiddle());
