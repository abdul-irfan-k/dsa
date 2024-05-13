type NODE<T> = Node<T> | null;
export class Node<T> {
  left: NODE<T>;
  right: NODE<T>;

  constructor(public data: T) {
    this.left = this.right = null;
  }
}

class BinarySearchTree<T> {
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
    let currentNode: NODE<T> = this.root;
    let parentNode: NODE<T> = null;
    if (currentNode == null) return;

    while (currentNode != null) {
      if (element < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode?.left;
      } else if (element > currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode?.right;
      } else {
        if (parentNode == null) {
        } else {
          if (currentNode.right == null && currentNode.left == null) {
            if(currentNode == parentNode.left){
                parentNode.left = null
                return 
            }
            else if(currentNode == parentNode.right){
                parentNode.right = null 
                return 
            }
          }
        }
        break;
      }
    }
  }
  //   removeHelper(element: T, currentNode: NODE<T>, parentNode: NODE<T>) {}
}

const sampleTree = new BinarySearchTree<number>();
sampleTree.insert(100);
sampleTree.insert(20);
sampleTree.insert(10);
sampleTree.insert(30);
sampleTree.insert(200);
sampleTree.insert(300);
sampleTree.insert(150);


