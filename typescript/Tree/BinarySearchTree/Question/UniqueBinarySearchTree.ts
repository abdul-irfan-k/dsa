
function numTrees(n: number): number {

    const uniqueCount = new Array(n + 1).fill(0);
    uniqueCount[0] = 1;
    uniqueCount[1] = 1;

    for (let i = 2; i <= n; ++i)
        for (let j = 1; j <= i; ++j)
            uniqueCount[i] += uniqueCount[j - 1] * uniqueCount[i - j];

    return uniqueCount[n]
};

console.log(numTrees(1))
console.log(numTrees(3))
console.log(numTrees(4))