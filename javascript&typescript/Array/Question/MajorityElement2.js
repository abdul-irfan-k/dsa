// function majorityElement(nums) {
//     const frequency = {}
//     const result = []
//     for (let index = 0; index < nums.length; index++) {
//         frequency[nums[index]] = (frequency[nums[index]] ?? 0) + 1
//         if (frequency[nums[index]] > Math.floor(nums.length / 3) && frequency[nums[index]] <= Math.floor(nums.length / 3) + 1) {
//             result.push(nums[index])
//         }

//     }
//     return result
// }


// Optimal Approach (Extended Boyer Moore’s Voting Algorithm): 
function majorityElement(nums) {
    let counter1 = 0
    let counter2 = 0
    let element1 = Infinity
    let element2 = Infinity

    for (let index = 0; index < nums.length; index++) {
        if (counter1 === 0 && nums[index] !== element2) {
            element1 = nums[index]
            counter1 = 1
        }
        else if (counter2 === 0 && nums[index] !== element1) {
            element2 = nums[index]
            counter2 = 1
        }

        else if (nums[index] === element1) counter1++
        else if (nums[index] === element2) counter2++
        else {
            counter1--
            counter2--
        }
    }

    let result = []
    counter1 = counter2 = 0
    for (let index = 0; index < nums.length; index++) {
        if (element1 === nums[index]) counter1++
        if (element2 === nums[index]) counter2++
    }

    let minimum = Math.floor(nums.length / 3) + 1
    if (counter1 >= minimum) result.push(element1)
    if (counter2 >= minimum) result.push(element2)
    return result
}

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([1, 2, 3]))
console.log(majorityElement([1, 2]))
console.log(majorityElement([1]))
console.log(majorityElement([1, 1, 1, 2, 2, 2]))