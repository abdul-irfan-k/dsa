import { BinarySearchTree, NODE } from "../BinarySearchTree";

class BST extends BinarySearchTree<number> {
  findClosest(target: number): number | null {
    if (this.root == null) return null;
    let closestNodeData = this.root.data;
    let currentNode :NODE<number>= this.root;

    while (currentNode != null) {
      if (
        Math.abs(currentNode.data - target) < Math.abs(closestNodeData - target)
      ) {
        closestNodeData = currentNode.data;
      }
      if(target < currentNode.data){
        currentNode = currentNode.left
      }
      else if(target > currentNode.data){
        currentNode = currentNode.right
      }
      else {
        return currentNode.data
      }
    }

    return closestNodeData;
  }
}

const tree = new BST()
tree.insert(20)
tree.insert(4)
tree.insert(40)
tree.insert(1)
tree.insert(19)
tree.insert(30)
tree.insert(70)


console.log(tree.findClosest(39))
console.log(tree.findClosest(15))
console.log(tree.findClosest(65))