import { BinarySearchTree, Node } from "../BinarySearchTree";

class BST extends BinarySearchTree<number> {
  sum = 0;
  low: number = 0;
  high: number = 0;

  calculateRangeSum(low: number, high: number) {
    this.low = low;
    this.high = high;

    if (this.root == null) return 0;
    this.calculateRangeSumHelper(this.root);
    return this.sum;
  }

  private calculateRangeSumHelper(currentNode: Node<number>) {
    if (this.checkDataIsInRange(currentNode.data)) {
      this.sum += currentNode.data;
    }
    if (currentNode.left && currentNode.data >= this.low) {
      this.calculateRangeSumHelper(currentNode.left);
    }
    if (currentNode.right && currentNode.data <= this.high) {
      this.calculateRangeSumHelper(currentNode.right);
    }
  }

  private checkDataIsInRange(data: number) {
    return data >= this.low && data <= this.high;
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(6);
tree.insert(13);
tree.insert(18);

console.log(tree.calculateRangeSum(3, 10));
