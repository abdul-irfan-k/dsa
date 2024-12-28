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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    function sortedArrayToBSTHelper(start: number, end: number, parent: TreeNode) {
        if (start > end) return
        if (start == end) {
            if (nums[start] > parent.val) parent.right = new TreeNode(nums[start])
            else parent.left = new TreeNode(nums[start])
            return
        }
        else {
            const median = Math.floor((start + end) / 2)
            const newNode = new TreeNode(nums[median])

            if (nums[median] > parent.val) parent.right = newNode
            else parent.left = newNode
            sortedArrayToBSTHelper(start, median - 1, newNode)
            sortedArrayToBSTHelper(median + 1, end, newNode)
        }
    }

    const median = Math.floor((nums.length - 1) / 2)
    const root = new TreeNode(nums[median])
    sortedArrayToBSTHelper(0, median - 1, root)
    sortedArrayToBSTHelper(median + 1, nums.length - 1, root)


    return root ?? null
};