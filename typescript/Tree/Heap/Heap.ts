class Heap<T = number> {
  heap: Array<T>;

  constructor(public selectValidChild: (leftChild: T, rightChild: T) => T) {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  insert(data: T) {
    this.heap.push(data);
    this.heapifyUp(this.heap.length - 1);
  }

  remove() {
    if (this.heap.length == 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return item;
  }

  heapifyDown(currentChildIndex: number) {
    const leftChildIndex = this.getLeftChildIndex(currentChildIndex);
    const rightChildIndex = this.getRightChildIndex(currentChildIndex);
    let childSwapIndex = -1;

    const leftChild = this.hasLeftChild(currentChildIndex)
      ? this.heap[leftChildIndex]
      : undefined;
    const rightChild = this.hasRightChild(currentChildIndex)
      ? this.heap[rightChildIndex]
      : undefined;
    const parentChild = this.heap[currentChildIndex];

    if (leftChild != undefined && rightChild != undefined) {
      const adjucentChild = this.selectValidChild(leftChild, rightChild);
      const adjucentChildIndex =
        this.selectValidChild(leftChild, rightChild) == leftChild
          ? leftChildIndex
          : rightChildIndex;
      if (this.selectValidChild(adjucentChild, parentChild) == adjucentChild)
        childSwapIndex = adjucentChildIndex;
    } else if (
      leftChild != undefined &&
      this.selectValidChild(leftChild, parentChild) == leftChild
    ) {
      childSwapIndex = leftChildIndex;
    } else if (
      rightChild != undefined &&
      this.selectValidChild(rightChild, parentChild)
    ) {
      childSwapIndex = rightChildIndex;
    }

    if (childSwapIndex != -1) {
      this.swap(currentChildIndex, childSwapIndex);
      this.heapifyDown(childSwapIndex);
    }
  }

  heapifyUp(currentChildIndex: number) {
    if (!this.hasParent(currentChildIndex)) return;
    const parentIndex = this.getParentChildIndex(currentChildIndex);
    const parent = this.heap[parentIndex];
    const currentChild = this.heap[currentChildIndex];

    if (this.selectValidChild(parent, currentChild) == currentChild) {
      this.swap(parentIndex, currentChildIndex);
      this.heapifyUp(parentIndex);
    }
  }

  getLeftChildIndex(currentNodeIndex: number): number {
    return 2 * currentNodeIndex + 1;
  }

  getRightChildIndex(currentNodeIndex: number): number {
    return 2 * currentNodeIndex + 2;
  }

  getParentChildIndex(currentNodeIndex: number): number {
    return Math.floor((currentNodeIndex - 1) / 2);
  }

  hasParent(currentChildIndex: number) {
    return Math.floor((currentChildIndex - 1) / 2) >= 0;
  }
  hasLeftChild(currentChildIndex: number) {
    return 2 * currentChildIndex + 1 < this.heap.length;
  }
  hasRightChild(currentChildIndex: number) {
    return 2 * currentChildIndex + 2 < this.heap.length;
  }

  isEmpty() {
    return this.size() == 0;
  }
  size() {
    return this.heap.length;
  }

  swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  printHeap() {
    var heap = ` ${this.heap[0]} `;
    for (var i = 1; i < this.heap.length; i++) {
      heap += ` ${this.heap[i]} `;
    }
    console.log(heap);
  }
}

export class MinHeap<T = number> extends Heap<T> {
  constructor() {
    super((leftChild: T, rightChild: T) => {
      if (leftChild < rightChild) return leftChild;
      else return rightChild;
    });
  }
}
export class MaxHeap<T = number> extends Heap<T> {
  constructor() {
    super((leftChild: T, rightChild: T) => {
      if (leftChild > rightChild) return leftChild;
      else return rightChild;
    });
  }
}
