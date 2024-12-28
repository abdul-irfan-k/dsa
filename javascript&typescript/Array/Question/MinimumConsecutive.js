/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
    let result = -1
    let start = 0
    let occurance = {}

    for (let i = 0; i < cards.length; i++) {
        const element = cards[i]
        if (occurance[element] == 1) {
            while (start <= i && cards[start] != element) {
                occurance[cards[start]] = 0
                start += 1
            }
            const currentConsecutive = i - start + 1
            if (result == -1 || currentConsecutive < result) result = currentConsecutive
            start += 1
        }

        occurance[element] = 1
    }
    return result

}
console.log(minimumCardPickup([3, 4, 2, 3, 4, 7, 4]))
console.log(minimumCardPickup([3, 4, 2, 3, 4, 7]))
console.log(minimumCardPickup([1, 0, 5, 3]))
console.log(minimumCardPickup([3, 2, 4, 3, 4, 7, 3, 5, 3, 3]))
console.log(minimumCardPickup([3, 2, 4, 5, 2, , 1, 1]))
console.log(minimumCardPickup([70, 37, 70, 41, 1, 62, 71, 49, 38, 50, 29, 76, 29, 41, 22, 66, 88, 18, 85, 53]))