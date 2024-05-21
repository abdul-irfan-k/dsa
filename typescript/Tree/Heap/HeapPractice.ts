import { MaxHeap, MinHeap } from "./Heap";

const heap = new MaxHeap()
heap.insert(10)
heap.insert(55)
heap.insert(7)
heap.insert(11)
heap.insert(5)
heap.insert(4)
heap.insert(13)
heap.printHeap()
console.log(heap.peek())



console.log("-------------------------------------")
const heapSample = new MaxHeap()
heapSample.buildHeap([10,55,7,11,5,4,13])
heapSample.printHeap()
