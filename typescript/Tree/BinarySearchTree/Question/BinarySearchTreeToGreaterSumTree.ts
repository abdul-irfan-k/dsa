
export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function bstToGst(root: TreeNode | null): TreeNode | null {
    let sum = 0

    function bstToGstHelper(currentNode: TreeNode | null) {
        if (currentNode != null) {
            bstToGstHelper(currentNode.right)
            currentNode.val += sum
            sum = currentNode.val
            bstToGstHelper(currentNode.left)
        }
    }
    bstToGstHelper(root)
    return root
};