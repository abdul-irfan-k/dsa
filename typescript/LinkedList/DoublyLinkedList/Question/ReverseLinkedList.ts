import { DoublyLinkedList, NodeType } from "../DoublyLinkedList";

class DLinkedList<T> extends DoublyLinkedList<T>{

    reverse(){
      let current :NodeType<T>=this.head
      let temp :NodeType<T> = null

      while(current != null){
        temp = current.prev
        current.prev = current.next
        current.next = temp
        
        if(temp == null){
            this.tail = current
        }
        current = current.prev
      }

      if(temp != null){
        this.head = temp.prev
      }

    }
}

const list = new DLinkedList<number>()
list.insert(7)
list.insert(11)
list.insert(15)
list.insert(4)
list.insert(9)
list.reverse()
list.display()

list.displayReverse()