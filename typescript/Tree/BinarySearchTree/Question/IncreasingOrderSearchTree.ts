
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function increasingBST(root: TreeNode | null): TreeNode | null {
    if (root == null) return root

    let parentNode: TreeNode | null = null
    function inOrderTraverse() {
        const currentNode = root;
        inOrderTraverseHelper(currentNode);
    }

    function inOrderTraverseHelper(currentNode: TreeNode | null) {
        if (currentNode != null) {
            inOrderTraverseHelper(currentNode.left);
            currentNode.left = null
            if (parentNode == null) root = currentNode
            else parentNode.right = currentNode
            parentNode = currentNode
            inOrderTraverseHelper(currentNode.right);
        }
    }
    inOrderTraverse()
    return root
};