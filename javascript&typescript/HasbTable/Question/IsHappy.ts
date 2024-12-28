function isHappy(n: number): boolean {
    let copiesSet = new Set()

    n = get_sum(n)
    while (!copiesSet.has(n)) {
        if (n == 1) return true
        copiesSet.add(n)
        n = get_sum(n)
    }
    return false
};


function get_sum(num: number) {
    let sum = 0;
    for (let n of num.toString()) {
        sum += Number(n) ** 2;
    }
    return sum;
}


console.log(isHappy(19))
console.log(isHappy(2))