import { MaxHeap } from "../Tree/Heap/Heap";

class HeapSort {
  static sort(data: number[]) {
    const newSortedArray = [];
    const heap = new MaxHeap();
    heap.buildHeap(data);

    for (let i = heap.size()-1; i >= 0; i--) {
      const lastElement = heap.remove();
      newSortedArray[i] = lastElement;
    }
    return newSortedArray
  }
}
console.log(HeapSort.sort([12, 11, 13, 5, 6, 7]))