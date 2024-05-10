import { Node, SingleLinkedList } from "../SinglyLinkedList";

class SlinkedList<T> extends SingleLinkedList<T> {
  recursiveSearch(temp: Node<T> | null, element: T): boolean {
    if (temp == null) return false;

    if (temp.data == element) return true ;
    return this.recursiveSearch(temp.next, element);
  }
}

const  list = new SlinkedList<number>()
list.insert(10)
list.insert(33)
list.insert(37)
list.insert(7)
list.insert(45)
list.insert(11)


console.log(list.recursiveSearch(list.head,7))
console.log(list.recursiveSearch(null,7))
console.log(list.recursiveSearch(list.head,25))

