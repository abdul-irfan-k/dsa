function minEatingSpeed(piles, h) {

    function validateSpeed(speed) {
        let currentHour = 0

        for (let i = 0; i < piles.length; i++) {
            currentHour += Math.ceil(piles[i] / speed)
        }

        if (currentHour > h) return false
        return true
    }

    function findMax() {
        let maxi = piles[0]
        for (let i = 1; i < piles.length; i++) {
            maxi = Math.max(maxi, piles[i]);
        }
        return maxi;
    }


    let start = 0
    let end = findMax()
    if (h == piles.length) return end

    while (start < end) {
        const mid = Math.floor((start + end) / 2)
        if (validateSpeed(mid)) {
            end = mid
        }
        else start = mid + 1
    }

    return start
};
console.log(minEatingSpeed([3, 6, 7, 11], 8))
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5))
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6))

