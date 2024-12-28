function heightChecker(heights: number[]): number {
    let invalidIndices = 0
    const expectedHeights = [...heights].sort((a, b) => a - b)
    for (let i = 0; i <= heights.length - 1; i++) {
        if (heights[i] != expectedHeights[i]) invalidIndices++
    }

    return invalidIndices
};
console.log(heightChecker([1, 1, 4, 2, 1, 3]))
console.log(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]))