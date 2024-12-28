import { MaxHeap } from "../../Tree/Heap/MaxHeap/MaxHeap"
import { MinHeap } from "../../Tree/Heap/MinHeap/MinHeap"

// function findKthLargest(nums: number[], k: number): number {
//     const heap = new MinHeap()
//     let i = 0

//     for (; i < k; i++) {
//         heap.insert(nums[i])
//     }

//     for (; i <= nums.length - 1; i++) {
//         if (heap.peek() < nums[i]) {
//             heap.remove()
//             heap.insert(nums[i])
//         }
//     }
//     return heap.peek()
// };
function findKthLargest(nums: number[], k: number): number {
    let heap = new MaxHeap()
    heap.buildHeap(nums)
    let result: number | null = null

    for (let i = 0; i < k; i++) {
        result = heap.remove()
    }
    if (result == null) return NaN
    return result

};


console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))