
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


function generateTrees(n: number): Array<TreeNode | null> {
    if (n == 0) return [null]

    const memo = new Map()
    function generateTreesHelper(start: number, end: number): Array<TreeNode | null> {
        if (memo.has(`${start}-${end}`)) return memo.get(`${start}-${end}`)
        if (start > end) return [null]

        const trees = []

        for (let currentRoot = start; currentRoot <= end; currentRoot++) {
            for (let leftTree of generateTreesHelper(start, currentRoot - 1)) {
                for (let rightTree of generateTreesHelper(currentRoot + 1, end)) {
                    const treeNode = new TreeNode(currentRoot, leftTree, rightTree)
                    trees.push(treeNode)
                }

            }
        }

        memo.set(`${start}-${end}`, trees)
        return trees
    }

    return generateTreesHelper(1, n)
};