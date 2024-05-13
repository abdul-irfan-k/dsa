export type NODE<T> = Node<T> | null;
export class Node<T> {
  left: NODE<T>;
  right: NODE<T>;

  constructor(public data: T) {
    this.left = this.right = null;
  }
}

export class BinarySearchTree<T> {
  root: NODE<T>;
  constructor() {
    this.root = null;
  }

  insert(data: T) {
    if (this.root == null) {
      this.root = new Node<T>(data);
      return;
    }

    let currentNode: NODE<T> = this.root;
    while (true) {
      if (data < currentNode.data) {
        if (currentNode.left == null) {
          currentNode.left = new Node(data);
          break;
        }
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if (currentNode.right == null) {
          currentNode.right = new Node(data);
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  contains(element: T): boolean {
    let currentNode: NODE<T> = this.root;

    while (currentNode != null) {
      if (element < currentNode.data) {
        currentNode = currentNode.left;
      } else if (element > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  inOrderTraverse() {
    const currentNode = this.root;
    this.inOrderTraverseHelper(currentNode);
  }

  private inOrderTraverseHelper(currentNode: NODE<T>) {
    if (currentNode != null) {
      this.inOrderTraverseHelper(currentNode.left);
      console.log(currentNode.data);
      this.inOrderTraverseHelper(currentNode.right);
    }
  }

  preOrderTraverse() {
    const currentNode = this.root;
    this.preOrderTraverseHelper(currentNode);
  }

  private preOrderTraverseHelper(currentNode: NODE<T>) {
    if (currentNode != null) {
      this.preOrderTraverseHelper(currentNode.left);
      console.log(currentNode.data);
      this.preOrderTraverseHelper(currentNode.right);
    }
  }

  postOrderTraverse() {
    const currentNode = this.root;
    this.postOrderTraverseHelper(currentNode);
  }

  private postOrderTraverseHelper(currentNode: NODE<T>) {
    if (currentNode != null) {
      this.postOrderTraverseHelper(currentNode.left);
      console.log(currentNode.data);
      this.postOrderTraverseHelper(currentNode.right);
    }
  }

  remove(element: T) {
    this.removeHelper(element, this.root, null);
  }
  private removeHelper(element: T, currentNode: NODE<T>, parentNode: NODE<T>) {
    if (this.root == null) return;
    while (currentNode != null) {
      if (element < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode?.left;
      } else if (element > currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode?.right;
      } else {
        if (currentNode.right != null && currentNode.left != null) {
          currentNode.data = this.getMinValue(currentNode.right).data;
          this.removeHelper(currentNode.data, currentNode.right, currentNode);
        } else {
          if (parentNode == null) {
            if (currentNode.right == null) {
              this.root = currentNode.left;
            } else if (currentNode.left == null) {
              this.root = currentNode.right;
            }
          } else {
            if (currentNode == parentNode.left) {
              if (currentNode.right == null) {
                parentNode.left = currentNode.left;
              } else {
                parentNode.left = currentNode.right;
              }
            } else {
              if (currentNode.right == null) {
                parentNode.right = currentNode.left;
              } else {
                parentNode.right = currentNode.right;
              }
            }
          }
        }
        break;
      }
    }
  }

  getMinValue(currentNode: Node<T>): Node<T> {
    while (currentNode != null) {
      if (currentNode.left == null) {
        return currentNode;
      }

      currentNode = currentNode.left;
    }
    return currentNode;
  }
}

// const sampleTree = new BinarySearchTree<number>();
// sampleTree.insert(50);
// sampleTree.insert(30);
// sampleTree.insert(70);
// sampleTree.insert(40);
// sampleTree.insert(20);
// sampleTree.insert(60);
// sampleTree.insert(80);
// sampleTree.insert(99)

// console.log(sampleTree.contains(99))
// sampleTree.remove(99)
// console.log(sampleTree.contains(99))