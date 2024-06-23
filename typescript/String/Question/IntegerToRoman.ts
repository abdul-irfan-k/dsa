// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
function intToRoman(num: number): string {
    let romanLiteral = ""
    const romanCombination = ["I", "V", "X", "L", "C", "D", "M"]

    let numberPosition = 0
    while (num != 0) {
        const index = numberPosition * 2
        let currentValue = num % 10
        if (currentValue > 0 && currentValue < 4) {
            romanLiteral = (romanCombination[index].repeat(currentValue)) + romanLiteral
        }
        else if (currentValue == 4) {
            romanLiteral = (romanCombination[index] + romanCombination[index + 1]) + romanLiteral
        }
        else if (currentValue == 9) {
            romanLiteral = (romanCombination[index] + romanCombination[index + 2]) + romanLiteral
        }
        else if (currentValue > 4 && currentValue < 9) {
            romanLiteral = (romanCombination[index + 1] + romanCombination[index].repeat(currentValue-5)) + romanLiteral
        }
        num = Math.floor(num / 10)
        numberPosition++
    }
    return romanLiteral
};


console.log(intToRoman(3749))
console.log(intToRoman(58))
console.log(intToRoman(1994))
