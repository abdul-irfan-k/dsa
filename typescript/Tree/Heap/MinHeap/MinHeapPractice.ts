import { MinHeap } from "./MinHeap"

const heap =new MinHeap()
heap.insert(10)
heap.insert(7)
heap.insert(11)
heap.insert(5)
heap.insert(4)
heap.insert(13)

heap.printHeap()
console.log(heap.peek())
console.log(heap.remove())
heap.printHeap()